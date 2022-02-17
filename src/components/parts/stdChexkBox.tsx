import React, { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const StdCheckBoxWrappper = styled.label<{color:string, checked:boolean}>`
    width: 40px;
    height: 15px;
    display: block;
    border-radius: 10px;
    position: relative;
    cursor:pointer;
    background: ${props => props.checked ? props.color : '#333'};
    transition: .3s linear;
    & > input{
        display: none;
    }
`;

const StdCheckBoxBall = styled.div<{checked:boolean}>`
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    top: 50%;
    transition: .3s linear;
    transform: translateY(-50%);
    left: ${props => props.checked ? (40 - 15) + 'px' : '3px'};
`;

type StdCheckProps = {
    checked:boolean,
    func:(e: React.ChangeEvent<HTMLInputElement>) => void
}

export const StdCheckBox:FC<StdCheckProps> = ({ checked, func }) => {
  const theme = useContext(ThemeContext);
  return (
      <StdCheckBoxWrappper checked={checked} color={theme.green} >
          <input type='checkbox' checked={checked} onChange={(e) => func(e)} />
          <StdCheckBoxBall checked={checked} ></StdCheckBoxBall>
      </StdCheckBoxWrappper>
  );
};
