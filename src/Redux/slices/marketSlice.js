// src/redux/slices/marketSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMarkets } from '../../Admin/Endpoints/MarketsAPI';

const LOCAL_STORAGE_KEY = 'markets_cache';
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in ms

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

export const fetchMarkets = createAsyncThunk(
  'markets/fetchMarkets',
  async (_, { rejectWithValue }) => {
    try {
      // Try cache first
      const cached = loadCachedMarkets();
      if (cached) return cached;

      // Else fetch fresh
      const response = await getMarkets();
      const data = response?.data || [];

      // ✅ Cache the result
      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify({ data, timestamp: Date.now() })
      );

      return data;
    } catch (err) {
      return rejectWithValue(err.message || 'Failed to fetch markets');
    }
  }
);
const marketSlice = createSlice({
  name: 'markets',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers:{
    resetMarkets(state){
      state.data = [];
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMarkets.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMarkets.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchMarkets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { resetMarkets } = marketSlice.actions;
export default marketSlice.reducer;
