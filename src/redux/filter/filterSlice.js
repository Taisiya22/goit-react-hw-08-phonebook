import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    contactsFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { contactsFilter } = filterSlice.actions;
