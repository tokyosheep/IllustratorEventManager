import React, { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { CenterPlace } from '../../styles/mixin';
import { darken } from 'polished';

const StdButtonBase = styled.button<{color:string}>`
    width: 110px;
    height: 25px;
    position: relative;
    border-radius: 5px;
    border: 1px solid #999;
    background: ${props => props.color};
    cursor: pointer;
    &:focus{
        outline: none;
    }
    &:active{
        background: ${props => darken(0.2, props.color)};
    }
`;

const StdButtonTitle = styled.span`
    display: block;
    ${CenterPlace};
    color: #fff;
    font-size: 13px;
    font-weight: 300;
`;

type StdButtonProps = {
    name:string,
    func:() => void,
}

export const StdButtton:FC<StdButtonProps> = ({ name, func }) => {
  const theme = useContext(ThemeContext);
  return (
      <StdButtonBase color={theme.darkGray} onClick={func}>
          <StdButtonTitle>{name}</StdButtonTitle>
      </StdButtonBase>
  )
}
