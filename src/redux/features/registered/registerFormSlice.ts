import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { ScriptObj } from '../scripts/scriptSlice';
import { ActionSet, ProcessType } from './registeredSlice';

export type RegisterType = {
    event:string,
    type:ProcessType,
    action:ActionSet,
    script:ScriptObj
}

interface RegisterFormState {
    value: RegisterType
};

const initialState:RegisterFormState = {
  value: {
    event: 'AI Art Selection Changed Notifier',
    type: 'action',
    action: {
      action: '',
      set: ''
    },
    script: {
      name: '',
      path: ''
    }
  }
};

const registerFormSlice = createSlice({
  name: 'registerForm',
  initialState,
  reducers: {
    selectEvent: (state, action:PayloadAction<string>) => {
      state.value.event = action.payload;
    },
    selectType: (state, action:PayloadAction<ProcessType>) => {
      state.value.type = action.payload;
    },
    selectScript: (state, action:PayloadAction<ScriptObj>) => {
      state.value.script = { ...action.payload };
    },
    selectAction: (state, action:PayloadAction<string>) => {
      state.value.action.action = action.payload;
    },
    selectActionSet: (state, action:PayloadAction<ActionSet>) => {
      state.value.action = { ...action.payload };
    }
  }
});

export const refisterForm = (state:RootState) => state.registerForm;

export const { selectEvent, selectType, selectScript, selectAction, selectActionSet } = registerFormSlice.actions;

export default registerFormSlice.reducer;
