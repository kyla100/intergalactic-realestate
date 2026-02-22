import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  properties: [],
  currentProperty: null,
  loading: false,
  error: null,
  filters: {
    galaxy: null,
    planet: null,
    minPrice: null,
    maxPrice: null,
    status: 'available',
    sortBy: 'newest',
  },
  pagination: {
    page: 1,
    pages: 1,
    total: 0,
  },
};

const propertySlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {
    setProperties: (state, action) => {
      state.properties = action.payload.properties;
      state.pagination = action.payload.pagination;
    },
    setCurrentProperty: (state, action) => {
      state.currentProperty = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters: (state) => {
      state.filters = initialState.filters;
    },
    setPagination: (state, action) => {
      state.pagination = action.payload;
    },
  },
});

export const {
  setProperties,
  setCurrentProperty,
  setLoading,
  setError,
  setFilters,
  clearFilters,
  setPagination,
} = propertySlice.actions;

export default propertySlice.reducer;
