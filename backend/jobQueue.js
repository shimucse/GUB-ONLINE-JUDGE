const Queue = require("bull");
const jobQueue = new Queue("job-runner-queue");
  const {executeCpp,deleteForDotOut} = require('./executeCpp');
const { executePy,deleteForDotPy} = require('./executePy');
const Job = require('./models/job');
const {deleteFile} = require('./generateFile');



const Num_WORKERS = 5;
let filepath;
const executCpp_and_executePy = async(job,item,deleteFileSet)=>{
    let output;
    if(job.language === "cpp"){
        output = await executeCpp(job.filepath,item);
        if(deleteFileSet){
            await deleteFile(job.filepath);
            await deleteForDotOut();
        }
        

    }else {
        output = await executePy(job.filepath, item);
        if(deleteFileSet) await deleteForDotPy();
    } 
   // console.log("output from exectue:"+output);
    return output;
}
jobQueue.process(Num_WORKERS, async({data})=>{

   // console.log(data);
    const{id:jobId}= data;
    const job = await Job.findById(jobId);

    if(job === undefined){
        throw Error("job not found")
    } 
    try{
        let output;
            job["startedAt"]= new Date();
            
            
            //Memory1
            let Memoryused1 = process.memoryUsage().heapUsed; 
           // console.log("memory1 :"+Memoryused1);


            //execute 
            console.log("problemId : "+ job.problemId);
            /*?job.userInput.map( async(item) => {
                console.log("item: "+ item)
                job['output'] = await executCpp_and_executePy(job,item);
                 
                }):( job['output'] = await executCpp_and_executePy(job,item))*/
                let deleteFileSet = true;

                if(job.submitType === 'submit'){

                    deleteFileSet = false;
                    const setterOutput = job.problemStterOutput
                    const outputLength =(setterOutput.split('\n')).length;
                    console.log('outputLength: '+outputLength); 


                    let jobinput = job.input;    
                  //  console.log("setterinput"+ jobinput);              
                  
                    
                    const linesnum =(jobinput.split("\n")).length;  
                    console.log("linesum"+ linesnum);

                    let inputTestCaseAmount = (linesnum/outputLength);
                    console.log("inputTestCaseAmount"+ inputTestCaseAmount);

                    let endindex = (outputLength-1);
                       let setterOuputIndex=0;
                       let userOutput;
                        for(let i=0; i<linesnum;  i=i+inputTestCaseAmount)
                        {
                            let newStr;
                            let inputStr="";

                                for(let j =i; j<i+inputTestCaseAmount; j++)
                                {
                                    
                                    newStr=  ((jobinput.split('\n')[j]).trim());
                                    if(j!==(inputTestCaseAmount+i-1)){

                                        newStr = newStr.concat('\n');    

                                    }
                                    inputStr = inputStr.concat(newStr);                     
                                }
                             //  console.log('newStr :  '+inputStr);                   
                                if(i===(linesnum-2))  {
                                  // console.log("last stage");
                                    deleteFileSet = true;

                                    //job['output'] = 'Accepted'
                                }
                                // match user output with setter output
                                console.log('setterOuputIndex'+setterOuputIndex)
                                userOutput=  await executCpp_and_executePy(job,inputStr,deleteFileSet)
                                let setterOutputtemp  =  ((setterOutput.split('\n')[setterOuputIndex]).trim());
                               
                               // console.log("typeOfUser" + typeof(userOutput));
                               // console.log("typeOfSetter" + typeof(setterOutputtemp));
                               
                                /*if((userOutput.localeCompare(setterOutputtemp)) ){
                                    //forcely terminate the program;
                                    //job['output'] = 'Accepted'
                                    console.log("userOutput : "+ userOutput +"setteroutput: "+setterOutputtemp)

                                    console.log("matched")
                                    job['output'] = 'Accepted'

                                }
                                else{
                                    job['output'] = 'Wrong'

                                }*/

                                 //console.log("userInt"+ Number.isInteger(userOutput) ) 
                               
                                setterOuputIndex++;


                         }

                }else{                   

                    job['output'] = await executCpp_and_executePy(job,job.input,deleteFileSet)   

                }

            
            //Memory2
            let Memoryused2 = process.memoryUsage().heapUsed;
           //  console.log("memory2 :"+Memoryused2);
            //console.log("total Memory used:"+(Memoryused2-Memoryused1) ); 
            let memoryUsedForCompilation =  ((((Memoryused2-Memoryused1)/ 1024 / 1024)*100)/100);
          //  console.log("memoryUsedForCompilationProgramm"+ memoryUsedForCompilation+"MB");           


            job['completedAt'] = new Date();
            job['status'] = "success";
            job['memorySpace'] = memoryUsedForCompilation;
          //  console.log("job memorySpace"+job.memorySpace);
            await job.save();  
            
    }catch(err){
            job['completedAt'] = new Date();
            job['status'] = "error";
            //job['output'] = JSON.stringify(err);
            job['output'] = err;

            
            await job.save();     

        }
});
jobQueue.on('failed',(error)=>{

     console.log(error.data.id, "failed", error.failedReason);
})


const addJobToQueue = async(jobId, filePath) =>{
   filepath = filePath;
    await jobQueue.add({
        id: jobId,
    });

};

module.exports = {

    addJobToQueue

}