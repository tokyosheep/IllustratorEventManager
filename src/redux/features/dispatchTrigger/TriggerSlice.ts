import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface TriggerState {
  value:boolean
}

const initialState:TriggerState = {
  value: false
}

const triggerSlice = createSlice({
  name: 'trigger',
  initialState,
  reducers: {
    switchTrigger: (state, action:PayloadAction<boolean>) => {
      state.value = action.payload;
    }
  }
});

export const { switchTrigger } = triggerSlice.actions;

export const dispatchTrigger = (state:RootState) => state.dispatchTrigger;

export default triggerSlice.reducer;
