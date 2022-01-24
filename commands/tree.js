//tree implemented
function treeFn(dirPath){
    //console.log("Tree command implemented for", dirPath);
    if(dirPath == undefined){
        // console.log("Kindly enter the path.");
        treeFn(process.cwd());
        return;
    }else if(fs.existsSync(dirPath) == false){
        console.log("Please enter the correct path.")
        return;
    }
    // console.log(dirPath);
    treeHelper(dirPath,"");
}

function treeHelper(dirPath, indent){
    // console.log(dirPath);
    if(fs.lstatSync(dirPath).isFile() == true){
        console.log(indent+"├──"+path.basename(dirPath));
        return;
    }
    
    let childNames = fs.readdirSync(dirPath);
    // console
    for(let i = 0 ; i < childNames.length ; i++){
        let child = childNames[i];
        let childPath = path.join(dirPath,child);
        let isDirectory = fs.lstatSync(childPath).isDirectory();

        // console.log(indent+"⊢"+child);

        if(isDirectory){
            console.log(indent+"└──"+child);
            treeHelper(childPath,"\t"+indent);
        }else 
            console.log(indent+"├──"+child);
    }
} 

module.exports = {
    treeKey : treeFn
}