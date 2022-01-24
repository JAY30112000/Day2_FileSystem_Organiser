//help implemented
function helpFn(){
    // console.log("Help command implemented for ", dirPath);
    console.log(`
    List of All the commands:
                            peppy tree "directoryPath"
<<<<<<< HEAD
                            peppy main.js organize "directoryPath"
                            peppy main.js help
=======
                            peppy organize "directoryPath"
                            peppy help
>>>>>>> a244abc636bbe695c5a9abd81b6b797de77df201
    `);
}
module.exports = {
    helpKey : helpFn
}
