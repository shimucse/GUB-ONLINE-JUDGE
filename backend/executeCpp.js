const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
let outPath;

const outputPath = path.join(__dirname, "outputs");

if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true });
}

const executeCpp = (filepath, userInput) => {
  const jobId = path.basename(filepath).split(".")[0];
  outPath = path.join(outputPath, `${jobId}.out`);
 

 
  const child = execSync(
    `g++ ${filepath} -o ${outPath} && cd ${outputPath} && ./${jobId}.out`,
    { input: userInput  }
  );

  // console.log(child.toString());
  return child.toString();
};
const deleteForDotOut = async()=>{

  fs.unlink(outPath, function(err) {
       if(err && err.code == 'ENOENT') {
           // file doens't exist
           console.info("File doesn't exist, won't remove it.");
       } else if (err) {
           // other errors, e.g. maybe we don't have enough permission
           console.error("Error occurred while trying to remove file");
       } else {
           console.info(`removed`);
       }
   });
};

module.exports ={
    executeCpp,
    deleteForDotOut,
};