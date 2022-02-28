import fs from 'fs';
import path from 'path';
import { ScriptObj } from '../redux/features/scripts/scriptSlice';
import { hostAppPath, callDialog } from './init';
import { SendHostScript } from './connectHostScript';

export const getScripts = async () => {
  try {
    const dirs = await fs.promises.readdir(hostAppPath + '/Presets');
    console.log(dirs);
  } catch (e) {
    console.log(e);
  }
}

export const getScriptFromDialog:()=>ScriptObj[]|false = () => {
  const f = callDialog();
  console.log(f);
  if (f.data.length < 1) return false;
  const scriptPaths = f.data.map(sc => decodeURI(sc.replace(/^file:\/\//, '')));
  return scriptPaths.map(sc => ({ path: sc, name: path.basename(sc, path.extname(sc)) }));
}

export const loadInitJsx = async () => {
  try {
    const connect = new SendHostScript('getScripts.jsx');
    const r = await connect.callJsx();
    console.log(r);
  } catch (e) {
    console.log(e);
  }
}
