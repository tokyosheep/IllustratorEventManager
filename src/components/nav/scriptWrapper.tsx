import React, { useCallback } from 'react';
import styled from 'styled-components';
import { addScripts, resetScripts } from '../../redux/features/scripts/scriptSlice';
import { getScriptFromDialog } from '../../fileSystem/loadScripts';
import { StdButtton } from '../parts/buttons';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { switchDisable } from '../../redux/features/dispatchTrigger/disableSlice';

const ScriptButtonWrapper = styled.div`
    width: 100%;
    height: 100px;
`;

const timeLag:()=>Promise<void> = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 1000)
  })
}

const ScriptWrapper = () => {
  const dispatch = useAppDispatch();
  const eventFlag = useAppSelector(state => state.dispatchTrigger.value);
  const scripts = useAppSelector(state => state.scripts.value);
  const loadScripts = useCallback(() => {
    (async () => {
      dispatch(switchDisable(true));
      await timeLag();
      const r = getScriptFromDialog();
      console.log(r);
      dispatch(switchDisable(false));
      if (!r) return;
      dispatch(addScripts(r));
    })();
  }, [scripts]);
  const removeAllScripts = useCallback(() => {
    dispatch(resetScripts(null));
  }, [scripts]);
  return (
      <ScriptButtonWrapper>
          <StdButtton disabled={eventFlag} name='load script' func={loadScripts} />
          <StdButtton disabled={eventFlag} name='reset script' func={removeAllScripts} />
      </ScriptButtonWrapper>
  )
}

export default ScriptWrapper;
