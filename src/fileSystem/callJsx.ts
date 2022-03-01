import { SendHostScript } from './connectHostScript';
import { ActionSet } from '../redux/features/registered/registeredSlice';
import { justCallJsxOutside } from './init';

export const callAction:(arg:ActionSet)=>Promise<void> = async (arg) => {
  const connect = new SendHostScript();
  const r = await connect.callHostScript(arg);
  console.log(r);
}

export const callJsx:(scriptParh:string)=>Promise<void> = async (scriptPath) => {
  try {
    const r = await justCallJsxOutside(scriptPath);
    console.log(r);
  } catch (e) {
    console.log(e);
  }
}
