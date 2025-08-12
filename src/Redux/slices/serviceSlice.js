// src/redux/slices/projectSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getServices } from '../../Admin/Endpoints/ServicesAPI'; // import your API function


const LOCAL_STORAGE_KEY = 'services_cache';
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

export const fetchServices = createAsyncThunk(
  'services/fetchServices',
  async (_, { rejectWithValue }) => {
    try {
      // Try cache first
      const cached = loadCachedMarkets();
      if (cached) return cached;

      // Else fetch fresh
      const response = await getServices();
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



const serviceSlice = createSlice({
  name: 'services',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default serviceSlice.reducer;
