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
};

/*
const getFilesFromFolder:(directory:string, jsxList:string[])=>Promise<void> = async (directory, jsxList) => {
  const files = await fs.promises.readdir(directory);
  await Promise.allSettled(files.map(async (f) => {
    const stat = await fs.promises.stat(`${directory}/${f}`);
    if (stat.isDirectory()) {
      await getFilesFromFolder(`${directory}/${f}`, jsxList);
    } else {
      if (path.extname(f) === '.jsx') jsxList.push(`${directory}/${f}`);
    }
  }));
}

export const getJsxes = async () => {
  const jsxList:string[] = [];
  try {
    const appPath = path.dirname(path.dirname(path.dirname(path.dirname(hostAppPath))));
    const topFolders = await fs.promises.readdir(appPath);
    const preset = topFolders.find(top => top.toLowerCase().includes('preset'));
    console.log(preset);
    if (!preset) return;
    const stat = await fs.promises.stat(`${appPath}/${preset}`);
    if (!stat.isDirectory()) return;
    await getFilesFromFolder(appPath, jsxList);
    console.log(jsxList);
  } catch (e) {
    console.log(e);
  }
}
*/
