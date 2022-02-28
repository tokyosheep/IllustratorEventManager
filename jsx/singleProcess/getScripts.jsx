(function(){
    var getPath = app.path + "/Presets.localized";
    var PresetsPath = new Folder(getPath);
    var fileList = [];
    getFilesFromPath(PresetsPath);
    return JSON.stringify(fileList);
    function getFilesFromPath(folderPath){
       if(!folderPath){
           return false;//nullだったら中止
       }
       var files = folderPath.getFiles();
       for(var i=0;i<files.length;i++){
           if(files[i].getFiles !== undefined){//フォルダーだったら繰り返す
               getFilesFromPath(files[i]);//再帰的に処理
           }else{
               var ext = decodeURI(files[i]).split(".").pop().toLowerCase();
               if(ext == "jsx"){
                   fileList.push(decodeURI(files[i]));//日本語にも対応するようにデコード
               }
           }
        }
    }
})();