import { callAction, callJsx } from './callJsx';
import { writeDebugData } from './init';

export const aiEvents = Object.values(AIEvent);

const setMethod = async eventData => {
  removeAiEvent(eventData);
  if(eventData.type === 'action'){
      // await writeDebugData({func:'callAction', arg: eventData.dispatch});
      await callAction({func:'callAction', arg: eventData.dispatch});
  }else{
      await callJsx(eventData.dispatch.path);
  }
  registerAiEvent(eventData);
}

/**
 * register Illustrator event
 * @param {eventData}
 * @type {event: string,type: ProcessType,dispatch: ActionSet | ScriptObj}
 */ 

export const registerAiEvent = eventData => {
    AIEventAdapter.getInstance().addEventListener(
      eventData.event,
      function (e) {
        setMethod(eventData);
      }
    );
}

export const removeAiEvent = eventData => {
    AIEventAdapter.getInstance().removeEventListener(
      eventData.event,
      function (e) {
        setMethod(eventData);
      }
    );
}