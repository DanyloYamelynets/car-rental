import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

const initialState = {
  cars: [],
  favorites: [],
  isLoading: false,
  error: null,
  filter: '',
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    addToFavorites: (state, action) => {
      const carId = action.payload;
      if (!state.favorites.includes(carId)) {
        state.favorites.push(carId);
      }
    },
    removeFromFavorites: (state, action) => {
      const carId = action.payload;
      state.favorites = state.favorites.filter(id => id !== carId);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cars = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setFilter, addToFavorites, removeFromFavorites } =
  carsSlice.actions;
export const carsReducer = carsSlice.reducer;
