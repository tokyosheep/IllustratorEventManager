import React from 'react';
import styled from 'styled-components';
import { StdButtton } from '../parts/buttons';
import ScriptWrapper from './scriptWrapper';
import StorageWwrapper from './storageWrapper';
import { MainContainer } from '../../styles/containers';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { removeAll, removeEvent } from '../../redux/features/registered/registeredSlice';
const { NavButtonContainer } = MainContainer;

export const TopWrapper = styled.div`
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
`;

const NavButtons = () => {
  const dispatch = useAppDispatch();
  const eventFlag = useAppSelector(state => state.dispatchTrigger.value);
  return (
      <NavButtonContainer>
          <TopWrapper>
              <StdButtton disabled={eventFlag} name='delete' func={() => {
                dispatch(removeEvent());
              }} />
              <StdButtton disabled={eventFlag} name='delete all' func={() => {
                dispatch(removeAll());
              }}/>
          </TopWrapper>
          <ScriptWrapper />
          <StorageWwrapper />
      </NavButtonContainer>
  );
};

export default NavButtons;
