import { createAsyncThunk } from '@reduxjs/toolkit';
import { catalogRequest } from 'services/api';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await catalogRequest();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
