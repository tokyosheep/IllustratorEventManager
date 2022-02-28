import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../redux/app/hooks';
import { CenterPlace } from '../../styles/mixin';

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
  ${CenterPlace}
`;

const ListningEvent = () => {
  const triggerFlag = useAppSelector(state => state.dispatchTrigger.value);
  return (
    <OverLayer visible={triggerFlag} >
      <ListeningTitle>seeing your activity</ListeningTitle>
    </OverLayer>
  )
};

export default ListningEvent;
