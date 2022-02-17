import React from 'react';
import styled from 'styled-components';
import { StdButtton } from '../parts/buttons';
import { MainContainer } from '../../styles/containers';
const { NavButtonContainer } = MainContainer;

const TopWrapper = styled.div`
    width: 100%;
    height: 12px;
`;

const NavButtons = () => {
  return (
      <NavButtonContainer>
          <TopWrapper>
              <StdButtton name='delete' func={() => {}} />
          </TopWrapper>
      </NavButtonContainer>
  )
}

export default NavButtons;
