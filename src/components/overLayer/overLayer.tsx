import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../redux/app/hooks';

const OverLayer = styled.div<{visible:boolean}>`
  z-index: 25;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  display: ${props => props.visible ? 'block' : 'none'};
`;

const CoverLayer = () => {
  const disable = useAppSelector(state => state.disablePanel.value);
  return (
      <OverLayer visible={disable} ></OverLayer>
  )
}

export default CoverLayer;
