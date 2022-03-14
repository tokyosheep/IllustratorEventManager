/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, Folder*/

/*
export type ActionSet = {action: string, set: string};
export type ProcessType = 'script'|'action';

export type RegisteredEvent = {
  event:string,
  type:ProcessType,
  dispatch: ActionSet|ScriptObj
}
*/

/*
var obj = {"func":"callAction","arg":{"set":"初期設定アクション","action":"不透明度60（選択範囲）"}}
hostScript(obj);
*/
/*
var obj = {"func":"callAction","arg":{"set":"初期設定アクション","action":"不透明度60（選択範囲）"}}
hostScript(obj);
*/
function callAction(arg){
    try{
        app.doScript(arg.action,arg.set);/*action , set*/
    }catch(e){
        alert(e);
    }
}

function hostScript(obj){
    switch(obj.func){
        case 'callAction':
          callAction(obj.arg);
          break;

        default:
        break;
    }
    return true;
}