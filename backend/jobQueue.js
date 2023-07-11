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
          //  console.log("problemId : "+ job.problemId);
            /*?job.userInput.map( async(item) => {
                console.log("item: "+ item)
                job['output'] = await executCpp_and_executePy(job,item);
                 
                }):( job['output'] = await executCpp_and_executePy(job,item))*/
                let deleteFileSet = true;
                //console.log("submitType:" +job.submitType);
               // console.log("run Input: "+job.input)

                if(job.submitType === 'submit'){

                  deleteFileSet = false;
                  let counter = -1;

                  let testcaseLength = job.problemSetterAllInputOutputTestCase.length;
                  testcaseLength = testcaseLength-1;
                  let result =true;
                  let resTemp;

                 // job['output'] = await executCpp_and_executePy(job,job.input,deleteFileSet)   

                  Array.isArray(job.problemSetterAllInputOutputTestCase)
                            ?job.problemSetterAllInputOutputTestCase.forEach(async(obj,index)=>{


                               // console.log(`input: ${obj.setterInput}`),
                                //console.log(`output: ${obj.setterOutput}`),"
                                let len = obj.setterOutput.length;
                                console.log("setter output length"+ len);
                                if(result === true){
                                   console.log("step :"+counter)
                                    counter++;

                                    console.log('counter: '+counter+'testcaseLength: '+testcaseLength);
    
                                                if(counter===testcaseLength){
                
                                                    deleteFileSet=true;
                                                    resTemp =  await executCpp_and_executePy(job,obj.setterInput,deleteFileSet);
                                                    console.log("result when at end of the loop:"+resTemp);
                                                    if(resTemp!==obj.setterOutput){
                                                        result=false;
                                                        job['output']='Wrong Answer';
                                                        console.log("setter output and user output not same at end loop")

                                                    } 
                                                    else{
                                                        job['output']='Accepted';
                                                    }
                
                                                }
                                                else{
                                                    resTemp =  await executCpp_and_executePy(job,obj.setterInput,deleteFileSet);
                                                    //console.log(`output: ${obj.setterOutput}`);
                                                    //console.log('result'+resTemp +"end result");
                                                    console.log("stter output and user output same")
                                                    if(resTemp!==obj.setterOutput){
                                                        result=false;
                                                        console.log("stter output and user output same")

                                                    } 
                                                    
                                                }
    
    
                                }
                                else{
                                        job['output']='Wrong Answer';
                                        console.log("wrong answer");
                                }
                               
                            }                 
                        ):console.log("not found setter input output")
                     
                   

                    
               
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