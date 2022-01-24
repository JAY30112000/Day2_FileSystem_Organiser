let fs = require("fs");
let path = require("path");

function wcatFn(inputArr){
    // console.log(inputArr);
    let optionsArr = inputArr.filter((v) => v.charAt(0)=='-');
    let filesArr = inputArr.filter((v) => v.charAt(0)!='-');
    // console.log(optionsArr);
    // console.log(filesArr);

    let content = "";
    filesArr.forEach(file => {
        if(fs.existsSync(file) == false){
            console.log(`Error File ${file} not found.`);
            return;
        }
        content += fs.readFileSync(file)+"\r\n";
    });

    // console.log(content);

    let contentArr = content.split("\r\n");

    //removes the last element of the content arr i.e ''
    contentArr.splice(contentArr.length - 1);
    // console.log(contentArr);

    //options check
    if(optionsArr.includes("-b") && optionsArr.includes("-n")){
        console.log("Error -b -n options can't be used together.")
    }

    //if -s is present in the options
    if(optionsArr.includes("-s")){
        let sres = [];
        contentArr.forEach((v,i) => {
            if(v == '' && linesArray[i-1] == '');
            else sres.push(v);
        });
        console.log(sres);
        contentArr = sres;
    }

    // if -n is present in the options
    if(optionsArr.includes("-n")){
        // int 
        contentArr.forEach((v,i) =>{
            contentArr[i] = `${i+1} ${v}`;
        });
        console.log(contentArr.join('\n'));
    }

    // if -b is present in the options
    if(optionsArr.includes("-b")){
        let j = 1;
        contentArr.forEach((v,i) =>{
            if(v != "")
                contentArr[i] = `${j++} ${v}`;
        });
    }
    console.log(contentArr.join("\n"));

}
module.exports = {
    wcatKey : wcatFn
}