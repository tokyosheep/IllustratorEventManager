import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { MainContainer } from '../../styles/containers';
import { checkEvent } from '../../redux/features/registered/registeredSlice';

const { RegisteredContainer } = MainContainer;

const DataWrapper = styled.ul`
  list-style:none;
  padding: 0;
  margin: 0;
`;

const ListRow = styled.li<{checked:boolean}>`
  height: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
  font-size: 10px;
  font-weight: 200;
  border-bottom: 1px solid #999;
  background: ${props => props.checked ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0)'};
  cursor: pointer;
`;

const EventTitle = styled.span`
  margin-left: 5px;
  height: auto;
  width: 200px;
  display: block;
`;

const ProcessTitle = styled.span`
  margin-left: 5px;
  width: auto;
  height: auto;
  display: block;
`;

const RegisteredList = () => {
  const dispatch = useAppDispatch();
  const registeredData = useAppSelector(state => state.registeredData.value);
  console.log(registeredData);
  const eventList = registeredData.map((data, i) => {
    return (
      <ListRow key={i} checked={data.checked} onClick={() => {
        dispatch(checkEvent(i));
      }}>
        <EventTitle>{data.event}</EventTitle>
        <ProcessTitle>{'name' in data.dispatch ? data.dispatch.name : `${data.dispatch.set}: ${data.dispatch.action}`}</ProcessTitle>
      </ListRow>
    )
  });
  return (
      <RegisteredContainer>
        <DataWrapper>
          {eventList}
        </DataWrapper>
      </RegisteredContainer>
  );
};

export default RegisteredList;
