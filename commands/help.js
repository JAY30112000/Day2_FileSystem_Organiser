//help implemented
function helpFn(){
    // console.log("Help command implemented for ", dirPath);
    console.log(`
    List of All the commands:
                            peppy tree "directoryPath"
                            peppy main.js organize "directoryPath"
                            peppy main.js help
    `);
}
module.exports = {
    helpKey : helpFn
}