import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useAppSelector } from '../../redux/app/hooks';
import { CenterPlace } from '../../styles/mixin';

const fading = keyframes`
  0%{
    opacity: 0.5;
  }

  50%{
    opacity: 1;
  }

  100%{
    opacity: 0.5;
  }
`;

const OverLayer = styled.div<{visible:boolean}>`
  z-index: 20;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  display: ${props => props.visible ? 'block' : 'none'};
`;

const ListeningTitle = styled.span`
  color: #fff;
  font-size: 30px;
  font-weight: 300;
  display: block;
  ${CenterPlace};
  animation: ${fading} 1.2s infinite linear;
`;

const ListningEvent = () => {
  const triggerFlag = useAppSelector(state => state.dispatchTrigger.value);
  return (
    <OverLayer visible={triggerFlag} >
      <ListeningTitle>watching activity</ListeningTitle>
    </OverLayer>
  )
};

export default ListningEvent;
