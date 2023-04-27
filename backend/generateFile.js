const fs = require('fs')
const path = require('path');
const {v4: uuid} = require('uuid');

const dirCodes = path.join(__dirname,"codes")

if(!fs.existsSync(dirCodes)){
     fs.mkdirSync(dirCodes, {recursive:true});
}
const generateFile =async(format,content) =>{
     console.log("dircode : "+ dirCodes);

     console.log(format+content)
     const jobId = uuid();
     console.log(jobId);
    const filename = `${jobId}.${format}`;
    console.log("filename : "+filename)
     const filepath = path.join(dirCodes, filename);
     console.log("filepath :"+filepath)

     await fs.writeFileSync(filepath, content);
     return filepath;

    
};


module.exports = {
     generateFile,
}