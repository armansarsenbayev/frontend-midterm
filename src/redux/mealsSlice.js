import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMeals, createMeal, deleteMealById } from '../services/mealService';


export const fetchMeals = createAsyncThunk(
  'meals/fetchMeals',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getMeals();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const addMealAsync = createAsyncThunk(
  'meals/addMeal',
  async (meal, { rejectWithValue }) => {
    try {
      const created = await createMeal(meal);
      return created;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const deleteMealAsync = createAsyncThunk(
  'meals/deleteMeal',
  async (id, { rejectWithValue }) => {
    try {
      await deleteMealById(id);
      
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const mealsSlice = createSlice({
  name: 'meals',
  initialState: {
    items: [],
    loading: false,   
    error: null,      
  },
  reducers: {},
  
  extraReducers: (builder) => {

    
    builder.addCase(fetchMeals.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchMeals.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    });
    builder.addCase(fetchMeals.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    
    builder.addCase(addMealAsync.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addMealAsync.fulfilled, (state, action) => {
      state.loading = false;
      
      state.items.push(action.payload);
    });
    builder.addCase(addMealAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    
    builder.addCase(deleteMealAsync.pending, (state) => {
      state.error = null;
    });
    builder.addCase(deleteMealAsync.fulfilled, (state, action) => {
      
      
      state.items = state.items.filter(meal => String(meal.id) !== String(action.payload));
    });
    builder.addCase(deleteMealAsync.rejected, (state, action) => {
      state.error = action.payload;
    });

  },
});

export default mealsSlice.reducer;
