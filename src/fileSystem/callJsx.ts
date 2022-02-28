import { SendHostScript } from './connectHostScript';
import { ActionSet } from '../redux/features/registered/registeredSlice';

export const callAction:(arg:ActionSet)=>Promise<void> = async (arg) => {
  const connect = new SendHostScript();
  const r = await connect.callHostScript(arg);
  console.log(r);
}

export const callJsx:(scriptParh:string)=>Promise<void> = async (scriptPath) => {
  const connect = new SendHostScript(scriptPath);
  const r = await connect.callJsx();
  console.log(r);
}
