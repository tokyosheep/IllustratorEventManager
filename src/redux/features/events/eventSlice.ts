import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface EventState {
  value:string[]
}

const initialState:EventState = {
  value: []
}

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent: (state, action:PayloadAction<string>) => {
      state.value = [...state.value, action.payload];
    }
  }
});

export const events = (state:RootState) => state.events;

export default eventSlice.reducer;
