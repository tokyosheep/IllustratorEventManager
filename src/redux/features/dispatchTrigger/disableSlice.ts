import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface DisableState {
  value:boolean
}

const initialState:DisableState = {
  value: false
}

const disableSlice = createSlice({
  name: 'disablePanel',
  initialState,
  reducers: {
    switchDisable: (state, action:PayloadAction<boolean>) => {
      state.value = action.payload;
    }
  }
});

export const { switchDisable } = disableSlice.actions;

export const disablePanel = (state:RootState) => state.disablePanel;

export default disableSlice.reducer;
