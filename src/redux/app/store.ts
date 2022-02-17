import { configureStore } from '@reduxjs/toolkit';
import scriptSlice from '../features/scripts/scriptSlice';
import actionSlice from '../features/actions/actionSlice';
import eventSlice from '../features/events/eventSlice';
import TriggerSlice from '../features/dispatchTrigger/TriggerSlice';

export const store = configureStore({
  reducer: {
    actions: actionSlice,
    scripts: scriptSlice,
    events: eventSlice,
    dispatchTrigger: TriggerSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
