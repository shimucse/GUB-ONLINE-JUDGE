const {exec} = require("child_process");
const fs = require('fs');
const path = require('path')

const outputPath = path.join(__dirname, "outputs");

if(!fs.existsSync(outputPath)){
    fs.mkdirSync(outputPath, {recursive:true})

}


const executeCpp = (filepath)=> {
        //C:\Files\ShimaWork\Mearn\ONLINE-COMPILLER\backend\codes\25608d1b-64c4-441f-822a-a07c03b59554.cpp
         const jobId = path.basename(filepath).split('.')[0];
         const outPath = path.join(outputPath, `${jobId}.exe`)
         const dotOut = " .out";
        
        return new Promise((resolve, reject) =>{
             exec(
                
                `g++ ${filepath} -o ${outPath} && cd ${outputPath} && ${jobId} ${dotOut}`,
                  (error, stdout, stderr) => {
                    
                    if(error) {
                        reject({error, stderr});
                    }
                    if(stderr){                      
                        reject(stderr);
                    }
                    resolve(stdout);
                  }
                  );
       
        });
};

module.exports ={
    executeCpp
}