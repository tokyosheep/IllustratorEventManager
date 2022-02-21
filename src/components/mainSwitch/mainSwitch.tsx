import React, { useCallback } from 'react';
import { CommonTitle } from '../../styles/titles';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { switchTrigger } from '../../redux/features/dispatchTrigger/TriggerSlice';
import { StdCheckBox } from '../parts/stdChexkBox';
import { MainContainer } from '../../styles/containers';
const { SwitchContainer } = MainContainer;

const MainSwitch = () => {
  const dispatch = useAppDispatch();
  const dispatchTrigger = useAppSelector(state => state.dispatchTrigger.value);
  const handleCheckBox = useCallback((e) => dispatch(switchTrigger(e.target.checked)), [dispatchTrigger]);
  return (
      <SwitchContainer>
        <StdCheckBox checked={dispatchTrigger} func={handleCheckBox} />
        <CommonTitle >Dispatch action or script through a registered event</CommonTitle>
      </SwitchContainer>
  );
};

export default MainSwitch;
