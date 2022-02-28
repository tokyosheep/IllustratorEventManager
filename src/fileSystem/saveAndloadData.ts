import fs from 'fs';
import { saveJsonRoot, alertFromJSX } from './init';
import { RegisteredEvent } from '../redux/features/registered/registeredSlice';

const jsonPath = `${saveJsonRoot}data.json`;

export const saveData:(registerData:RegisteredEvent[])=>Promise<void> = async (registeredData) => {
  console.log(jsonPath);
  try {
    await fs.promises.writeFile(jsonPath, JSON.stringify(registeredData));
    await alertFromJSX('saved');
  } catch (e) {
    console.log(e);
    await alertFromJSX(e);
  }
};

export const loadData:()=>Promise<RegisteredEvent[]|false> = async () => {
  try {
    const data = await fs.promises.readFile(jsonPath, 'utf-8');
    return JSON.parse(data);
  } catch (e) {
    console.log(e);
    await alertFromJSX(e);
    return false;
  }
};
