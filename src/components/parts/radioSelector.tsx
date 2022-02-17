import React, { FC } from 'react';
import styled from 'styled-components';

const SelectorBase = styled.label<{width:number}>`
    position: relative;
    width: ${props => props.width}px;
    height: 25px;
    background: #121212;
    border: 1px solid #707070;
`;

const SelectorValue = styled.span`
    color: #fff;
    font-size: 13px;
    font-weight: 300;
`;

const OptionsWrapper = styled.ul<{left:number, width:number, visible:boolean}>`
    list-style:none;
    padding: 0;
    margin: 0;
    top: 0;
    left:${props => props.left}px ;
    width: ${props => props.width};
    height: auto;
    background: #121212;
    border: 1px solid #707070;
    opacity: ${props => props.visible ? 1 : 0};
    pointer-events:${props => props.visible ? 'auto' : 'none'}
    & > li{
        width: 100%;
        height: 25px;
        color: #fff;
        font-size: 13px;
        font-weight: 300;
        overflow:hidden;
    }
`;

export type SelectorProps<T> = {
    value:T,
    options:T[],
    func:(v:T) => void,
    width?:number
}

export const Selector:FC<SelectorProps<string>> = ({ value, options, func, width = 250 }) => {
  const optionList = options.map((o, i) => {
    return (
        <li key={i}>
            {o}
        </li>
    )
  })
  return (
      <SelectorBase width={width}>
          <OptionsWrapper width={width} left={width + 20} visible={false} >
              {optionList}
          </OptionsWrapper>
          <SelectorValue>
              {value}
          </SelectorValue>
      </SelectorBase>
  )
}
