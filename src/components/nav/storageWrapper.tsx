import React, { useCallback } from 'react';
import styled from 'styled-components';
import { StdButtton } from '../parts/buttons';
import { saveData, loadData } from '../../fileSystem/saveAndloadData';
import { loadEvents } from '../../redux/features/registered/registeredSlice';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';

const StorageButtonWrapper = styled.div`
    width: 100%;
    height: 100px;
`;

const StorageWwrapper = () => {
  const dispatch = useAppDispatch();
  const registeredData = useAppSelector(state => state.registeredData.value);
  const eventFlag = useAppSelector(state => state.dispatchTrigger.value);
  const saveJsonData = async (data) => {
    console.log(data);
    await saveData(data);
  }
  const readStorage = useCallback(() => {
    (async () => {
      const data = await loadData();
      if (!data) return;
      dispatch(loadEvents(data));
    })();
  }, [registeredData])
  return (
      <StorageButtonWrapper>
          <StdButtton disabled={eventFlag} name='save events' func={saveJsonData} arg={registeredData} />
          <StdButtton disabled={eventFlag} name='load events' func={readStorage} />
      </StorageButtonWrapper>
  )
};

export default StorageWwrapper;
