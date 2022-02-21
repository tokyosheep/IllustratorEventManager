import React, { FC } from 'react';
import styled from 'styled-components';

const ListBox = styled.select`
    appearance: none;
    border: none;
    width: 100%;
    height: 25px;
    box-sizing:border-box;
    font-size: 13px;
    font-weight: 200;
    color: #fff;
    border: 1px solid #888;
    background: linear-gradient(135deg , rgba(90,90,90,0.5) , rgba(0,0,0,0));
    margin: 5px 0px;
    padding-left: 4px;
    cursor: pointer;
    &:focus{
        outline: none;
    }
    option{
        background: rgba(0,0,0,1);
        &:focus{
            outline: none;
        }
    }
`;

export type SelectorType<T> = {
    options:T[],
    value:T,
    func:(e:React.ChangeEvent<HTMLSelectElement>)=>void
}

export const SizeMenuSelector:FC<SelectorType<string>> = ({ options, value, func }) => {
  const optionList = options.map((m, i) => <option key={i}>{m}</option>);
  return (
      <ListBox value={value} onChange={(e) => func(e)}>
          {optionList}
      </ListBox>
  )
}
