// src/redux/slices/projectSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProjects } from '../../Admin/Endpoints/ProjectAPI'; // import your API function


const LOCAL_STORAGE_KEY = 'projects_cache';
const CACHE_DURATION = 60 * 60 * 1000; 

const loadCachedMarkets = () => {
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

export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async (_, { rejectWithValue }) => {
    try {
      // Try cache first
      const cached = loadCachedMarkets();
      if (cached) return cached;

      // Else fetch fresh
      const response = await getProjects();
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

const projectSlice = createSlice({
  name: 'projects',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default projectSlice.reducer;
