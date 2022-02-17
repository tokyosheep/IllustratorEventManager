import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type ActionSets = {
    sets:string[],
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
}

const actionSlice = createSlice({
  name: 'actions',
  initialState,
  reducers: {
    loadActions: (state, action:PayloadAction<ActionSets>) => {
      state.value = action.payload;
    }
  }
});

export const { loadActions } = actionSlice.actions;

export const actions = (state:RootState) => state.actions;

export default actionSlice.reducer;
