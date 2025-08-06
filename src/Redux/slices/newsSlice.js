// src/redux/slices/newsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getNews } from '../../Admin/Endpoints/NewsAPI';

const LOCAL_STORAGE_KEY = 'news_cache';
const CACHE_DURATION = 60 * 60 * 1000; 

const loadCachedNews = () => {
  try {
    const cache = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (cache && Date.now() - cache.timestamp < CACHE_DURATION) {
      return cache.data;
    }
    return null;
  } catch {
    return null;
  }
};

export const fetchNews = createAsyncThunk(
  'News/fetchNews',
  async (_, { rejectWithValue }) => {
    try {
      // Try cache first
      const cached = loadCachedNews();
      if (cached) return cached;

      // Else fetch fresh
      const response = await getNews();
      const data = response?.data || [];

      // ✅ Cache the result
      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify({ data, timestamp: Date.now() })
      );

      return data;
    } catch (err) {
      return rejectWithValue(err.message || 'Failed to fetch projects');
    }
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
