const Queue = require("bull");
const jobQueue = new Queue("job-runner-queue");
  const {executeCpp,deleteForDotOut} = require('./executeCpp');
const { executePy,deleteForDotPy} = require('./executePy');
const Job = require('./models/job');
const {deleteFile} = require('./generateFile');



const Num_WORKERS = 5;
let filepath;
const executCpp_and_executePy = async(job,item)=>{
    let output;
    if(job.language === "cpp"){
        console.log('execute cpp'+ job.filepath)
        output = await executeCpp(job.filepath,item);
        await deleteFile(job.filepath);
        await deleteForDotOut();

    }else {
        output = await executePy(job.filepath, "safwan");
        await deleteForDotPy();
    } 
    console.log("output from exectue:"+output);
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
            console.log("memory1 :"+Memoryused1);


            //execute 
            Array.isArray(job.userInput)
            ?job.userInput.map( async(item) => {
                console.log("item: "+ item)
                job['output'] = await executCpp_and_executePy(job,item);
                 
                }):( job['output'] = await executCpp_and_executePy(job,item))

            
            //Memory2
            let Memoryused2 = process.memoryUsage().heapUsed;
            console.log("memory2 :"+Memoryused2);
            console.log("total Memory used:"+(Memoryused2-Memoryused1) ); 
            let memoryUsedForCompilation =  ((((Memoryused2-Memoryused1)/ 1024 / 1024)*100)/100);
            console.log("memoryUsedForCompilationProgramm"+ memoryUsedForCompilation+"MB");           


            job['completedAt'] = new Date();
            job['status'] = "success";
            job['memorySpace'] = memoryUsedForCompilation;
            console.log("job memorySpace"+job.memorySpace);
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