import { csInterface, extensionRoot } from './init';

export interface HostObj{
    jsx:string,
    arg?:object,
    callJsx:()=>Promise<string|boolean>,
    callHostScript:(obj:object)=>Promise<string|boolean>
}

type Return = string|boolean;

export class SendHostScript implements HostObj {
  constructor (public jsx:string = 'hostScript', public arg?:object) {
    this.jsx = jsx;
    this.arg = arg;
  }

  callJsx ():Promise<string|boolean> {
    return new Promise((resolve, reject) => {
      csInterface.evalScript(`$.evalFile("${extensionRoot}singleProcess/${this.jsx}")`, (o:Return) => {
        resolve(o);
      });
    });
  }

  callHostScript (obj):Promise<string|boolean> {
    return new Promise((resolve, reject) => {
      csInterface.evalScript(`${this.jsx}(${JSON.stringify(obj)})`, (o:Return) => {
        resolve(o);
      });
    });
  }
}
