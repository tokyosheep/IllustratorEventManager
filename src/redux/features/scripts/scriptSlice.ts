import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface ScriptState {
    value:string[]
};

const initialState:ScriptState = {
  value: []
}

const scriptSlice = createSlice({
  name: 'scripts',
  initialState,
  reducers: {
    addScripts: (state, action:PayloadAction<string[]>) => {
      state.value = [...state.value, ...action.payload];
    },
    removeScript: (state, action:PayloadAction<number>) => {
      state.value = state.value.filter((s, i) => i !== action.payload);
    }
  }
});

export const { addScripts, removeScript } = scriptSlice.actions;

export const scripts = (state:RootState) => state.scripts;

export default scriptSlice.reducer;
