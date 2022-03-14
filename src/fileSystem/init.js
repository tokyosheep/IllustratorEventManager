import fs from "fs";
import path from "path";
export const csInterface = new CSInterface();
export const extensionId = csInterface.getExtensionID();
export const extFolder = csInterface.getSystemPath(SystemPath.EXTENSION);
export const extensionRoot = csInterface.getSystemPath(SystemPath.EXTENSION) +`/jsx/`;
export const saveJsonRoot = csInterface.getSystemPath(SystemPath.USER_DATA) +`/`;
console.log(saveJsonRoot);

const dir_home = process.env[process.platform == `win32` ? `USERPROFILE` : `HOME`];
export const dirDesktop = path.join(dir_home, `Desktop`);//デスクトップパス

/*
const jsxParts = `${extensionRoot}/jsxParts`;
const polyFillFolder = `${extensionRoot}/polyFill`;
*/

export const hostAppPath = csInterface.getSystemPath(SystemPath.HOST_APPLICATION);
const debug = false;

export const writeDebugData = obj =>{
    if(!debug)return;
    fs.writeFileSync(`${extensionRoot}/data.json`,JSON.stringify(obj));
}

/*

const readDirFiles = (path) =>{
    return new Promise((resolve,reject)=>{
        fs.readdir(path,(err,files)=>{
            if(err)reject(err);
            resolve(files);
        })
    });
}

const loadJsx = async(jsxFolder) =>{
    const parts = await readDirFiles(jsxFolder).catch(e=>console.log(e));
    const jsxes = parts.filter(f => path.extname(f) === ".jsx");
    jsxes.forEach(jsx =>  csInterface.evalScript(`$.evalFile("${jsxFolder}/${jsx}")`));
}
*/
export const reload = () =>{
    csInterface.addEventListener("com.adobe.csxs.events.WindowVisibilityChanged",()=>{location.reload(true)},false);
}

export const init = async() =>{
    // reload();
    csInterface.evalScript(`$.evalFile("${extensionRoot}json2.js")`);//json2読み込み
    //await loadJsx(jsxParts);
    //await loadJsx(polyFillFolder);
}

export const alertFromJSX = msg => {
    return new Promise(resolve => {
        csInterface.evalScript(`$.evalFile(alert("${msg}"))`,() => {
            resolve();
        });
    })
}

export const justCallJsxOutside = jsxPath => {
    return new Promise(resolve => {
        csInterface.evalScript(`$.evalFile("${jsxPath}")`, (o) => {
            resolve(o);
        });
    });
}

export const callDialog = () => cep.fs.showOpenDialog(true,false,`open`,dirDesktop,['jsx']);