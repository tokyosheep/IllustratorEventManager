import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { ScriptObj } from '../scripts/scriptSlice';

export type ActionSet = {action: string, set: string};
export type ProcessType = 'script'|'action';

export type RegisteredEvent = {
  event:string,
  type:ProcessType,
  dispatch: ActionSet|ScriptObj,
  checked:boolean
}

interface RegisteredState {
  value:RegisteredEvent[]
}

const initialState:RegisteredState = {
  value: []
};

export const hasSameEvent:(refer:RegisteredEvent, presentState:RegisteredEvent[])=>boolean = (refer, presentState) => {
  return presentState.some(state => state.event === refer.event);
}
/*
export const hasSameEvent:(refer:RegisteredEvent, presentState:RegisteredEvent[])=>boolean = (refer, presentState) => {
  return presentState.some(state => {
    return refer.event === state.event && refer.type === state.type && (
      ('path' in refer.dispatch && 'path' in state.dispatch && refer.dispatch.path === state.dispatch.path) ||
      ('action' in refer.dispatch && 'action' in state.dispatch && refer.dispatch.action === state.dispatch.action && refer.dispatch.set === state.dispatch.set)
    );
  })
}
*/

const registeredSlice = createSlice({
  name: 'registeredData',
  initialState,
  reducers: {
    addEvent: (state, action:PayloadAction<RegisteredEvent>) => {
      state.value = [...state.value, action.payload];
    },
    loadEvents: (state, action:PayloadAction<RegisteredEvent[]>) => {
      state.value = [...action.payload];
    },
    removeEvent: (state, action:PayloadAction<null>) => {
      state.value = state.value.filter((s, i) => !s.checked);
    },
    removeAll: (state, action:PayloadAction<null>) => {
      state.value = [];
    },
    checkEvent: (state, action:PayloadAction<number>) => {
      state.value[action.payload].checked = !state.value[action.payload].checked;
    }
  }
});

export const registeredData = (state:RootState) => state.registeredData;

export const { addEvent, removeEvent, removeAll, checkEvent, loadEvents } = registeredSlice.actions;

export default registeredSlice.reducer;
