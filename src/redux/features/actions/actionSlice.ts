import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type ActionFolder = {
  setName:string,
  actions:string[]
}

export type ActionSets = {
    sets:ActionFolder[],
    actions:string[]
}

interface ActionState {
    value:ActionSets
};

const initialState:ActionState = {
  value: {
    sets: [],
    actions: []
  }
};

const actionSlice = createSlice({
  name: 'actions',
  initialState,
  reducers: {
    loadActions: (state, action:PayloadAction<ActionSets>) => {
      console.log(action.payload);
      state.value = { ...action.payload };
    },
    setAction: (state, action:PayloadAction<string[]>) => {
      state.value.actions = [...action.payload];
    }
  }
});

export const { loadActions, setAction } = actionSlice.actions;

export const actions = (state:RootState) => state.actions;

export default actionSlice.reducer;
