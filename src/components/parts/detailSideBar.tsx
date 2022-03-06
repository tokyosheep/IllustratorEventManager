import React from 'react';
import styled from 'styled-components';

const BarBase = styled.div<{visible:boolean}>`
    background: #000;
    width: 100%;
    height: 20px;
    position: fixed;
    top: 100%;
    left: 0px;
    transform: translateY(-30px);
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
  return (
      <BarBase visible={true}>
        ssssssssss
      </BarBase>
  )
};

export default BarDisplay;
