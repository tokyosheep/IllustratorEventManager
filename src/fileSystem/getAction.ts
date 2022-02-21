import { SendHostScript } from './connectHostScript';

type ActionObjFromJSX = {
    setName:string,
    actions:string[]
}

export const getActionsFromJSX = async () => {
  const connect = new SendHostScript('getActions.jsx');
  const r = await connect.callJsx();
  if (typeof r === 'boolean') return false;
  const actionObj:ActionObjFromJSX[] = JSON.parse(r);
  console.log(actionObj);
  return actionObj;
}
