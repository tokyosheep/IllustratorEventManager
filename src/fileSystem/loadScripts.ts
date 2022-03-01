import path from 'path';
import { ScriptObj } from '../redux/features/scripts/scriptSlice';
import { callDialog } from './init';
import { SendHostScript } from './connectHostScript';

export const getScriptFromDialog:()=>ScriptObj[]|false = () => {
  const f = callDialog();
  console.log(f);
  if (f.data.length < 1) return false;
  const scriptPaths = f.data.map(sc => decodeURI(sc.replace(/^file:\/\//, '')));
  return scriptPaths.map(sc => ({ path: sc, name: path.basename(sc, path.extname(sc)) }));
}

export const loadInitJsx:()=>Promise<ScriptObj[]|false> = async () => {
  try {
    const connect = new SendHostScript('getScripts.jsx');
    const r = await connect.callJsx();
    if (typeof r === 'boolean') return false;
    const scripts = JSON.parse(r);
    console.log(scripts);
    return scripts.map(sc => ({ path: sc, name: path.basename(sc, path.extname(sc)) }));
  } catch (e) {
    console.log(e);
    return false;
  }
}
