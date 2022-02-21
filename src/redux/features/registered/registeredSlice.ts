import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type ActionSet = {action: string, set: string};
export type ProcessType = 'script'|'action';

export type RegisteredEvent = {
  event:string,
  type:ProcessType,
  dispatch:ActionSet|string
}

interface RegisteredState {
  value:RegisteredEvent[]
}

const initialState:RegisteredState = {
  value: []
};

const registeredSlice = createSlice({
  name: 'registeredData',
  initialState,
  reducers: {
    addEvent: (state, action:PayloadAction<RegisteredEvent>) => {
      state.value = [...state.value, action.payload];
    },
    removeEvent: (state, action:PayloadAction<number>) => {
      state.value = state.value.filter((s, i) => i !== action.payload);
    },
    removeAll: (state, action) => {
      state.value = [];
    }
  }
});

export const registeredData = (state:RootState) => state.registeredData;

export const { addEvent, removeEvent, removeAll } = registeredSlice.actions;

export default registeredSlice.reducer;
