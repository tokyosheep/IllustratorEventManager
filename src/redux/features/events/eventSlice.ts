import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

const eventList = [
  'AI Art Selection Changed Notifier',
  'AI Current Layer Notifier',
  'AI Layer Deletion Notifier',
  'AI Layer Set Notifier',
  'AI Layer Options Notifier',
  'AI Edit Layer List Changed Notifier',
  'AI Command Notifier: Before Open',
  'AI Command Notifier: After Open',
  'AI Command Notifier: Before Close',
  'AI Command Notifier: After Close'
];

interface EventState {
  value:string[]
}

const initialState:EventState = {
  value: [...eventList]
};

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
