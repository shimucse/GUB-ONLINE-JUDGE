const Queue = require("bull");
const jobQueue = new Queue('job-queue');

const {executeCpp} = require('./executeCpp');
const { executePy } = require('./executePy');
const Job = require('./models/job');


const Num_WORKERS = 5;

jobQueue.process(Num_WORKERS, async({data})=>{
   // console.log(data);
    const{id:jobId}= data;
    const job = await Job.findById(jobId);
    if(job === undefined){
        throw Error("job not found")
    }
    console.log("Fetched Job", job);
    job['startedAt'] = new Date();

try{
        job["startedAt"]= new Date();
        if(job.language === "cpp"){
        output = await executeCpp(job.filepath,'222');
        }else{
        output = await executePy(job.filepath, "shima");
        }

        
        job['completedAt'] = new Date();
        job['status'] = "success";
        job['output'] = output;
        await job.save();    
   }catch(err){
        job['completedAt'] = new Date();
        job['status'] = "error";
        job['output'] = JSON.stringify(err);
        await job.save;
}});
jobQueue.on('failed',(error)=>{

     console.log(error.data.id, "failed", error.failedReason);
})


const addJobToQueue = async(jobId) =>{
    await jobQueue.add({id: jobId});

};

module.exports = {

    addJobToQueue

}