import React, { useCallback } from 'react';
import styled from 'styled-components';
import { selectType, selectScript, selectActionSet, selectAction } from '../../../redux/features/registered/registerFormSlice';
import { StdRadioBox } from '../../parts/radio';
import { Selector } from '../../parts/Selector';
import { useAppSelector, useAppDispatch } from '../../../redux/app/hooks';

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

const ProcessArea = () => {
  const dispatch = useAppDispatch();
  const scripts = useAppSelector(state => state.scripts.value);
  const actionSets = useAppSelector(state => state.actions.value);
  const registerForm = useAppSelector(state => state.registerForm.value);
  console.log(registerForm);
  const handleRadioBtn = useCallback((e, name) => {
    dispatch(selectType(name));
  }, [registerForm]);
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
      <>
        <ScriptWrapper>
          <StdRadioBox func={handleRadioBtn} checked={registerForm.type === 'script'} name='script' />
          <Selector disabled={registerForm.type !== 'script'} func={scriptSelector} value={registerForm.script.name} options={scripts} />
        </ScriptWrapper>
        <ActionWrapper>
          <StdRadioBox func={handleRadioBtn} checked={registerForm.type === 'action'} name='action' />
          <Selector disabled={registerForm.type !== 'action'} width={180} func={selectActionAndSet} value={registerForm.action.set} options={actionSets.sets.map(set => set.setName)} />
          <Selector disabled={registerForm.type !== 'action'} width={180} func={selectActionName} value={registerForm.action.action} options={actionSets.actions} />
        </ActionWrapper>
      </>
  )
}

export default ProcessArea;
