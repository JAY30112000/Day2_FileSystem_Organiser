let utilityObj = require("./utility");
let types = utilityObj.types;
let fs = require("fs");
let path = require("path");

//organize implemented
function organizeFn(dirPath){
    // console.log("Organize command implemented for", dirPath);

    // 1. input -> dir path given;
    if(dirPath == undefined){
        // console.log("Kindly enter the path.");
        organizeFn(process.cwd());
        return;
    }else if(fs.existsSync(dirPath) == false){
        console.log("Please enter the correct path.")
        return;
    }
    // 2. create -> organized_files -> dir
    let destPath = path.join(dirPath,"organized_files");
    if(fs.existsSync(destPath) == false)  fs.mkdirSync(destPath);
    
    // for rest of the job we call a function
    organizeHelper(dirPath,destPath);
    // 3. identify categories of all files present in the dir
    // 4. copy/ cut files to that organozed dir inside any of categoryFolder
}
function organizeHelper(src,dest){
    // 3. identify categories of all files present in the dir
    let childNames = fs.readdirSync(src);
    // console.log(childNames);
    for(let i = 0 ; i < childNames.length ; i++){
        let childAddress = path.join(src,childNames[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        if(isFile){
            // console.log(childNames[i]);
            // 4. copy/ cut files to that organized dir inside any of categoryFolder
            let category = getCategory(childNames[i]);
            // console.log(category);
            // for copying files we call other function
            sendFiles(childAddress,dest,category);
        }
    }
}
function sendFiles(srcFilePath,dest,category){
    let categoryPath = path.join(dest,category);
    // console.log(categoryPath);
    if(!fs.existsSync(categoryPath)) fs.mkdirSync(categoryPath);
    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(categoryPath,fileName);
    fs.copyFileSync(srcFilePath,destFilePath);
}
function getCategory(fileName){
    let ext = path.extname(fileName);
    // console.log(ext);
    ext = ext.slice(1);
    for(let type in types){
        // console.log(type);
        let typeArr = types[type];
        for(let i in typeArr){
            // console.log(typeArr[i]);
            if(typeArr[i]==ext){
                return type;
            } 
        }
    }
    return 'other';
}

module.exports = {
    organizeKey : organizeFn
}