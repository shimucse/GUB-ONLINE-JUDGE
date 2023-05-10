const fs = require('fs')
const path = require('path');
const {v4: uuid} = require('uuid');

const dirCodes = path.join(__dirname,"codes")

if(!fs.existsSync(dirCodes)){
     fs.mkdirSync(dirCodes, {recursive:true});
}
const generateFile =async(format,content) =>{

     const jobId = uuid();
    const filename = `${jobId}.${format}`;
     const filepath = path.join(dirCodes, filename);

     await fs.writeFileSync(filepath, content);
     return filepath;

    
};
const deleteFile = async(filepath)=>{

     fs.unlink(filepath, function(err) {
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
}


module.exports = {
     generateFile,
     deleteFile,
}