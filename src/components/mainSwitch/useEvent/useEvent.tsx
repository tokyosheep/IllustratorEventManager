import { useDispatch } from 'react-redux';
import { registerAiEvent, removeAiEvent } from '../../../fileSystem/registerAIEvent';
import { switchTrigger } from '../../../redux/features/dispatchTrigger/TriggerSlice';
import { RegisteredEvent } from '../../../redux/features/registered/registeredSlice';

const useEvent = () => {
  const dispatch = useDispatch();
  const startEvents:(registeredData:RegisteredEvent[])=>void = registeredData => {
    dispatch(switchTrigger(true));
    registeredData.forEach(data => {
      registerAiEvent(data);
    });
  }

  const removeEvents:(registeredData:RegisteredEvent[])=>void = registeredData => {
    dispatch(switchTrigger(false));
    registeredData.forEach(data => {
      removeAiEvent(data);
    });
  }
  return { startEvents, removeEvents };
}

export default useEvent;
