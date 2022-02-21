import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type ScriptObj = {
  name:string,
  path:string
}

interface ScriptState {
    value:ScriptObj[]
};

const initialState:ScriptState = {
  value: []
};

const scriptSlice = createSlice({
  name: 'scripts',
  initialState,
  reducers: {
    addScripts: (state, action:PayloadAction<ScriptObj[]>) => {
      state.value = [...state.value, ...action.payload];
    },
    removeScript: (state, action:PayloadAction<number>) => {
      state.value = state.value.filter((s, i) => i !== action.payload);
    },
    resetScripts: (state, action?) => {
      state.value = [];
    }
  }
});

export const { addScripts, removeScript, resetScripts } = scriptSlice.actions;

export const scripts = (state:RootState) => state.scripts;

export default scriptSlice.reducer;
