import React, { FC, useState, useMemo, useRef, useEffect } from 'react';
import { YAxe, scrollStyle } from '../../styles/mixin';
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
    overflow: hidden;
`;

const SelectorValue = styled.span<{disabled:boolean}>`
    color: ${props => props.disabled ? '#888' : '#fff'};
    font-size: 11px;
    font-weight: 300;
    ${YAxe};
    left: 20px;
    z-index: 3;
    cursor:pointer;
    white-space: nowrap;
    pointer-events: none;
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
    padding-right: 10px;
    background: #121212;
    border: 1px solid #707070;
    opacity: ${props => props.visible ? 1 : 0};
    pointer-events:${props => props.visible ? 'auto' : 'none'};
    z-index: 10;
    overflow: scroll;
    cursor:pointer;
    ${scrollStyle};
    & > li{
        width: 110%;
        height: 25px;
        color: #fff;
        font-size: 11px;
        font-weight: 300;
        padding-left: 10px;
        display: flex;
        align-items: center;
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
    width?:number,
    disabled?:boolean
}

export const Selector:FC<SelectorProps<string|ScriptObj>> = ({ disabled = false, value, options, func, width = 250 }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const selectorRef = useRef();
  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      if (selectorRef.current !== e.target) {
        setVisible(false);
      }
    });
  }, []);
  useMemo(() => {
    if (disabled) setVisible(false);
  }, [disabled]);
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
      <SelectorBase ref={selectorRef} width={width} onClick={(e) => {
        if (disabled || options.length < 1) return;
        setVisible(!visible);
      }}>
          <SelectorValue disabled={disabled}>
              {value}
          </SelectorValue>
      </SelectorBase>
      </>
  );
};
