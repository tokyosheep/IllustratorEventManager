import React, { useCallback, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import ListningEvent from '../listening/listening';
import { alertFromJSX } from '../../fileSystem/init';
import { addEvent, hasSameEvent } from '../../redux/features/registered/registeredSlice';
import { selectEvent } from '../../redux/features/registered/registerFormSlice';
import { Selector } from '../parts/Selector';
import { CommonTitle } from '../../styles/titles';
import { StdButtton } from '../parts/buttons';
import ProcessArea from './processArea/processArea';
import { MainContainer } from '../../styles/containers';
import { useAppSelector, useAppDispatch } from '../../redux/app/hooks';
const { RegisterFormContainer } = MainContainer;

const EventWrapper = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items:center;
  & > *{
    margin-left: 10px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: cneter;
  margin-left: 10px;
  margin-top: 10px;
`;

const MainRegisterForm = () => {
  const theme = useContext(ThemeContext);
  const dispatch = useAppDispatch();
  const events = useAppSelector(state => state.events.value);
  const registerForm = useAppSelector(state => state.registerForm.value);
  const registeredData = useAppSelector(state => state.registeredData.value);
  const handleEventValue = useCallback((event) => {
    dispatch(selectEvent(event));
  }, [registerForm]);
  const registerEvent = useCallback((registerArg:typeof registerForm) => {
    (async () => {
      if (
        registerArg.type === 'action' &&
        registerArg.action.action === '' && registerArg.action.set === ''
      ) {
        await alertFromJSX('you set invlid action');
        return;
      }

      if (registerArg.type === 'script' && registerArg.script.path === '') {
        await alertFromJSX('you set invlid script');
        return;
      }
      const filledEvent = {
        event: registerArg.event,
        type: registerArg.type,
        dispatch: registerArg.type === 'action' ? registerArg.action : registerArg.script,
        checked: false
      }
      if (hasSameEvent(filledEvent, registeredData)) {
        await alertFromJSX('it already has same event');
        return;
      }
      dispatch(addEvent(filledEvent));
    })();
  }, [registeredData]);
  return (
      <>
      <RegisterFormContainer>
        <ListningEvent />
        <EventWrapper>
          <CommonTitle>Illustrator Event</CommonTitle>
          <Selector func={handleEventValue} options={events} value={registerForm.event} />
        </EventWrapper>
        <ProcessArea />
        <ButtonWrapper>
          <StdButtton arg={registerForm} name='register' func={registerEvent} color={theme.blue} />
        </ButtonWrapper>
      </RegisterFormContainer>
      </>
  );
};

export default MainRegisterForm;
