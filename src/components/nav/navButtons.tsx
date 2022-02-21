import React from 'react';
import styled from 'styled-components';
import { StdButtton } from '../parts/buttons';
import ScriptWrapper from './scriptWrapper';
import { MainContainer } from '../../styles/containers';
const { NavButtonContainer } = MainContainer;

export const TopWrapper = styled.div`
    width: 100%;
    height: 50px;
`;

const NavButtons = () => {
  return (
      <NavButtonContainer>
          <TopWrapper>
              <StdButtton name='delete' func={() => {}} />
          </TopWrapper>
          <ScriptWrapper />
      </NavButtonContainer>
  );
};

export default NavButtons;
