import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../redux/app/hooks';

const BarBase = styled.div<{visible:boolean}>`
    background: #000;
    width: 100%;
    height: 20px;
    position: fixed;
    top: 100%;
    left: 0px;
    transform: translateY(-20px);
    display:${props => props.visible ? 'flex' : 'none'};
    color: #fff;
    font-size: 12px;
    font-weight: 200;
    align-items: center;
    z-index: 10;
    padding-left: 5px;
    box-sizing:border;
`;

const BarDisplay = () => {
  const sideBarState = useAppSelector(state => state.detailBar);
  return (
      <BarBase visible={sideBarState.value.visible}>
        {sideBarState.value.msg}
      </BarBase>
  )
};

export default BarDisplay;
