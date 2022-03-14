import { useDispatch } from 'react-redux';
import { aiEventTarget } from '../../../fileSystem/registerAIEvent';
import { switchTrigger } from '../../../redux/features/dispatchTrigger/TriggerSlice';
import { RegisteredEvent } from '../../../redux/features/registered/registeredSlice';
import { callAction, callJsx } from '../../../fileSystem/callJsx';
// import { writeDebugData } from '../../../fileSystem/init';

const timeLag:()=>Promise<void> = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 200);
  });
}

const setMethod = async (eventObj:RegisteredEvent, eventData:RegisteredEvent[], add, remove) => {
  console.log('fired');
  remove(eventData, add, remove);
  await timeLag();
  if ('action' in eventObj.dispatch) {
    await callAction({ func: 'callAction', arg: eventObj.dispatch });
  } else {
    await callJsx(eventObj.dispatch.path);
  }
  await timeLag();
  add(eventData, add, remove);
}

type EventFunc = (eventData:RegisteredEvent[], register:EventFunc, removes:EventFunc) => void;

const registerEvent:EventFunc = (eventData, register, removes) => {
  eventData.forEach(data => {
    aiEventTarget().addEventListener(
      data.event,
      async () => {
        await setMethod(data, eventData, register, removes);
      }
    );
  })
}

const removeEventData:EventFunc = (eventData, register, removes) => {
  eventData.forEach(data => {
    aiEventTarget().removeEventListener(
      data.event,
      async () => {
        await setMethod(data, eventData, register, removes);
      }
    );
  })
}

const useEvent = () => {
  const dispatch = useDispatch();
  const startEvents:(registeredData:RegisteredEvent[])=>void = registeredData => {
    dispatch(switchTrigger(true));
    registerEvent(registeredData, registerEvent, removeEventData);
  }

  const removeEvents:(registeredData:RegisteredEvent[])=>void = registeredData => {
    dispatch(switchTrigger(false));
    removeEventData(registeredData, registerEvent, removeEventData);
  }
  return { startEvents, removeEvents };
}

export default useEvent;
