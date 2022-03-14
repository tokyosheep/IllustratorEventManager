import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface VisibleSearch {
  value: boolean
}

const initialState:VisibleSearch = {
  value: false
}

const searchBoxVisibleSlice = createSlice({
  name: 'searchBoxVisible',
  initialState,
  reducers: {
    setVisible: (state, action:PayloadAction<boolean>) => {
      state.value = action.payload;
    }
  }
});

export const { setVisible } = searchBoxVisibleSlice.actions;

export const searchBoxVisible = (state:RootState) => state.searchBoxVisible;

export default searchBoxVisibleSlice.reducer;
