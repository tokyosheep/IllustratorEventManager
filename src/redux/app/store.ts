import { configureStore } from '@reduxjs/toolkit';
import scriptSlice from '../features/scripts/scriptSlice';
import actionSlice from '../features/actions/actionSlice';
import eventSlice from '../features/events/eventSlice';
import TriggerSlice from '../features/dispatchTrigger/TriggerSlice';
import disableSlice from '../features/dispatchTrigger/disableSlice';
import registeredSlice from '../features/registered/registeredSlice';
import registerFormSlice from '../features/registered/registerFormSlice';
import detailBarSlice from '../features/detailBar/detailBarSlice';
import searchBoxVisibleSlice from '../features/searchBox/searchVisibleSlice';

export const store = configureStore({
  reducer: {
    actions: actionSlice,
    scripts: scriptSlice,
    events: eventSlice,
    dispatchTrigger: TriggerSlice,
    disablePanel: disableSlice,
    registeredData: registeredSlice,
    registerForm: registerFormSlice,
    detailBar: detailBarSlice,
    searchBoxVisible: searchBoxVisibleSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
