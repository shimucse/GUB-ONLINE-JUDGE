const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");
let filePath;


const executePy = (filepath, userInput) => {
  filePath = filepath;
  const child = execSync(`python3 ${filepath}`, { input: userInput });

  return child.toString();
};

const deleteForDotPy= async()=>{

  fs.unlink(filePath, function(err) {
       if(err && err.code == 'ENOENT') {
           // file doens't exist
           console.log("filePath"+filePath);
           console.info("File doesn't exist, won't remove it.");
       } else if (err) {
           // other errors, e.g. maybe we don't have enough permission
           console.error("Error occurred while trying to remove file");
       } else {
           console.info(`removed Py`);
       }
   });
};

module.exports = {
  executePy,
  deleteForDotPy
};