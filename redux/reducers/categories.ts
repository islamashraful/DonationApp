import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Category {
  categoryId: number;
  name: string;
}

export interface CategoriesState {
  categories: Category[];
  selectedCategoryId: number;
}

const initialState: CategoriesState = {
  categories: [
    {
      categoryId: 1,
      name: 'Highlight',
    },
    {
      categoryId: 2,
      name: 'Environment',
    },
    {
      categoryId: 3,
      name: 'Education',
    },
    {
      categoryId: 4,
      name: 'Clothing and Accessories',
    },
    {
      categoryId: 5,
      name: 'Household goods',
    },
    {
      categoryId: 6,
      name: 'Electronics',
    },
    {
      categoryId: 7,
      name: 'Toys and Games',
    },
    {
      categoryId: 8,
      name: 'Sports Equipment',
    },
    {
      categoryId: 9,
      name: 'Books and Media',
    },
    {
      categoryId: 10,
      name: 'Health and Beauty Products',
    },
    {
      categoryId: 11,
      name: 'Office supplies',
    },
    {
      categoryId: 12,
      name: 'Tools and Hardware',
    },
    {
      categoryId: 13,
      name: 'Art and Craft Supplies',
    },
  ],
  selectedCategoryId: 1,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    updateSelectedCategoryId: (
      state,
      action: PayloadAction<{ categoryId: number }>,
    ) => {
      state.selectedCategoryId = action.payload.categoryId;
    },
    resetCategories: () => {
      return initialState;
    },
  },
});

export const { updateSelectedCategoryId, resetCategories } =
  categoriesSlice.actions;
export default categoriesSlice.reducer;
