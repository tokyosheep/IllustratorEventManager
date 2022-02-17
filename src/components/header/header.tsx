import React from 'react';
import styled from 'styled-components';
import { MainContainer } from '../../styles/containers';
const { HeaderContainer } = MainContainer;

const Title = styled.h1`
    color: #fff;
    font-size: 18px;
    font-weight: 300;
    margin: 0;
    margin-right: 10px;
`;

const Header = () => {
  return (
      <HeaderContainer>
          <Title>Script Event Manager Illustrator</Title>
      </HeaderContainer>
  )
};

export default Header;
