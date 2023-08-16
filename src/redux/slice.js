const { createSlice } = require('@reduxjs/toolkit');
const { fetchCars } = require('./operations');

const initialState = {
  cars: [],
  favourites: [],
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

export const { setFilter } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
