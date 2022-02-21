import React, { useCallback } from 'react';
import styled from 'styled-components';
import { refisterForm, selectEvent, selectType, selectScript, selectActionSet, selectAction } from '../../redux/features/registered/registerFormSlice';
import { Selector } from '../parts/Selector';
import { StdRadioBox } from '../parts/radio';
import { CommonTitle } from '../../styles/titles';
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

const ScriptWrapper = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items:center;
  margin-top: 10px;
  & > *{
    margin-left: 10px;
  }
`;

const ActionWrapper = styled(ScriptWrapper)`
  margin-top: 15px;
`;

const MainRegisterForm = () => {
  const dispatch = useAppDispatch();
  const events = useAppSelector(state => state.events.value);
  const registerForm = useAppSelector(state => state.registerForm.value);
  const scripts = useAppSelector(state => state.scripts.value);
  const actionSets = useAppSelector(state => state.actions.value);
  const handleEventValue = useCallback((event) => {
    dispatch(selectEvent(event));
  }, [registerForm]);
  const handleRadioBtn = useCallback((e, name) => {
    dispatch(selectType(name));
  }, [refisterForm]);
  const scriptSelector = useCallback((sc) => {
    dispatch(selectScript(sc));
  }, [scripts]);
  const selectActionAndSet = useCallback((set) => {
    const targetActions = actionSets.sets.find(se => se.setName === set);
    if (targetActions === undefined) return;
    dispatch(selectActionSet({ set, action: targetActions.actions[0] }));
  }, [registerForm]);
  const selectActionName = useCallback((ac) => {
    dispatch(selectAction(ac));
  }, [registerForm]);
  return (
      <RegisterFormContainer>
        <EventWrapper>
          <CommonTitle>Illustrator Event</CommonTitle>
          <Selector func={handleEventValue} options={events} value={registerForm.event} />
        </EventWrapper>
        <ScriptWrapper>
          <StdRadioBox func={handleRadioBtn} checked={registerForm.type === 'script'} name='script' />
          <Selector func={scriptSelector} value={registerForm.script.name} options={scripts} />
        </ScriptWrapper>
        <ActionWrapper>
          <StdRadioBox func={handleRadioBtn} checked={registerForm.type === 'action'} name='action' />
          <Selector width={180} func={selectActionAndSet} value={registerForm.action.set} options={actionSets.sets.map(set => set.setName)} />
          <Selector width={180} func={selectActionName} value={registerForm.action.action} options={actionSets.actions} />
        </ActionWrapper>
      </RegisterFormContainer>
  );
};

export default MainRegisterForm;
