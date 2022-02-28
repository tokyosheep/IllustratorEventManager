import React from 'react';
import useEvent from './useEvent/useEvent';
import { CommonTitle } from '../../styles/titles';
import { useAppSelector } from '../../redux/app/hooks';
import { StdCheckBox } from '../parts/stdChexkBox';
import { MainContainer } from '../../styles/containers';
const { SwitchContainer } = MainContainer;

const MainSwitch = () => {
  const { startEvents, removeEvents } = useEvent();
  const dispatchTrigger = useAppSelector(state => state.dispatchTrigger.value);
  const registeredData = useAppSelector(state => state.registeredData.value);
  const handleCheckBox:(e, data:typeof registeredData)=>void = (e, data) => {
    if (!dispatchTrigger) {
      startEvents(data);
    } else {
      removeEvents(data);
    }
  };
  return (
      <SwitchContainer>
        <StdCheckBox checked={dispatchTrigger} func={handleCheckBox} arg={registeredData} />
        <CommonTitle >Dispatch action or script through a registered event</CommonTitle>
      </SwitchContainer>
  );
};

export default MainSwitch;
