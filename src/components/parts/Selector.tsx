import React, { FC, useState } from 'react';
import { YAxe } from '../../styles/mixin';
import { ScriptObj } from '../../redux/features/scripts/scriptSlice';
import styled from 'styled-components';

const SelectorBase = styled.label<{width:number}>`
    position: relative;
    z-index: 1;
    display: block;
    width: ${props => props.width}px;
    height: 25px;
    background: #121212;
    border: 1px solid #707070;
    cursor:pointer;
`;

const SelectorValue = styled.span`
    color: #fff;
    font-size: 12px;
    font-weight: 300;
    ${YAxe};
    left: 20px;
    z-index: 3;
    cursor:pointer;
`;

const OptionsWrapper = styled.ul<{left:number, width:number, visible:boolean}>`
    list-style:none;
    padding: 0;
    margin: 0;
    position: fixed;
    top: 80px;
    left:${props => props.width + 50}px ;
    width: auto;
    height: 160px;
    padding-right: 5px;
    box-sizing: border-box;
    background: #121212;
    border: 1px solid #707070;
    opacity: ${props => props.visible ? 1 : 0};
    pointer-events:${props => props.visible ? 'auto' : 'none'};
    z-index: 10;
    overflow: scroll;
    cursor:pointer;
    & > li{
        width: 100%;
        height: 25px;
        color: #fff;
        font-size: 11px;
        font-weight: 300;
        padding-left: 10px;
        box-sizing: border-box;
        overflow:hidden;
        &:hover{
            background: #575757;
        }
    }
`;

export type SelectorProps<T> = {
    value:T,
    options:T[],
    func:(v:T) => void,
    width?:number
}

export const Selector:FC<SelectorProps<string|ScriptObj>> = ({ value, options, func, width = 250 }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const optionList = options.map((o, i) => {
    return (
        <li key={i} onClick={() => {
          func(o);
          setVisible(false);
        }}>
            {typeof o === 'string' ? o : o.name}
        </li>
    );
  });
  return (
      <>
      <OptionsWrapper width={width} left={width + 5} visible={visible} >
          {optionList}
      </OptionsWrapper>
      <SelectorBase width={width} onClick={() => setVisible(!visible)}>
          <SelectorValue>
              {value}
          </SelectorValue>
      </SelectorBase>
      </>
  );
};
