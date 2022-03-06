import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type DetailProp = {
  msg: string,
  visible: boolean
}

interface DetailState {
  value: DetailProp
}

const initialState:DetailState = {
  value: {
    msg: '',
    visible: false
  }
}

const detailBarSlice = createSlice({
  name: 'detailBar',
  initialState,
  reducers: {
    enterArea: (state, action:PayloadAction<DetailProp>) => {
      state.value = { ...action.payload };
    },
    leaveArea: (state, action:PayloadAction<null>) => {
      state.value.visible = false;
    }
  }
});

export const { enterArea, leaveArea } = detailBarSlice.actions;

export const detailBar = (state:RootState) => state.detailBar;

export default detailBarSlice.reducer;
