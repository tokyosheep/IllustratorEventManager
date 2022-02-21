import React, { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const StdRadioWrapper = styled.label`
    width: 80px;
    height: 25px;
    display: flex;
    justify-content:space-between;
    align-items: center;
    & > input{
        display: none;
    }
`;

const RadioHole = styled.div<{checked:boolean, color:string}>`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #000;
    position: relative;
    border: 1px solid #999;
    & > div{
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: ${props => props.color};
        top: 50%;
        left: 50%;
        position: absolute;
        transform: translate(-50%, -50%) ${props => props.checked ? 'scale(1)' : 'scale(0.2)'};
        transition: .3s linear;
    }
`;

const StdRadioTitle = styled.span`
    color: #fff;
    font-size: 13px;
    font-weight: 300;
    display: block;
`;

type RadioProps<T> = {
    checked:boolean,
    func:(e:React.ChangeEvent<HTMLInputElement>, v:T) => void,
    name:string
}

export const StdRadioBox:FC<RadioProps<string>> = ({ checked, func, name }) => {
  const theme = useContext(ThemeContext);
  return (
      <StdRadioWrapper>
          <input type="radio" checked={checked} onChange={(e) => func(e, name)} />
          <StdRadioTitle>{name}</StdRadioTitle>
          <RadioHole checked={checked} color={theme.green}>
              <div></div>
          </RadioHole>
      </StdRadioWrapper>
  );
};
