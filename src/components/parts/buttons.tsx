import React, { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { CenterPlace } from '../../styles/mixin';
import { darken } from 'polished';

const StdButtonBase = styled.button<{color:string, disabled:boolean}>`
    width: 120px;
    height: 25px;
    position: relative;
    border-radius: 5px;
    border: 1px solid #999;
    background: ${props => props.disabled ? darken(0.2, props.color) : props.color};
    cursor: pointer;
    &:focus{
        outline: none;
    }
    &:active{
        background: ${props => darken(0.2, props.color)};
    }
`;

const StdButtonTitle = styled.span<{disabled:boolean}>`
    display: block;
    ${CenterPlace};
    color: ${props => props.disabled ? '#888' : '#fff'};
    font-size: 11px;
    font-weight: 200;
    margin: 0;
`;

type StdButtonProps = {
    name:string,
    func:(arg?:unknown) => void,
    color?:string,
    arg?:unknown,
    disabled?:boolean
}

export const StdButtton:FC<StdButtonProps> = ({ name, func, color, arg, disabled = false }) => {
  const theme = useContext(ThemeContext);
  return (
      <StdButtonBase disabled={disabled} color={color ?? theme.darkGray} onClick={() => {
        if (disabled) return;
        func(arg);
      }}>
          <StdButtonTitle disabled={disabled}>{name}</StdButtonTitle>
      </StdButtonBase>
  );
};
