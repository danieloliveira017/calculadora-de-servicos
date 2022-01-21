const Job = require('../model/Job');
const jobProfile = require('../model/Profile')
const JobUtil = require('../utils/JobUtils')
module.exports = {

async index(req, res) {
    
    const Jobs = await Job.get();
    const Profile =  await jobProfile.get();
   
   
    let statusIndex ={
        progress:0,
        done: 0,
        total: Jobs.length,
    }

    let dataHoras = 0;
   

    const updatJobs = Jobs.map((job)=>{
 
    let reamining = JobUtil.reaminingDay(job)
    const status = reamining <= 0 ? 'done' : 'progress'
    
    statusIndex[status]+=1;

    if(status == 'progress'){
        dataHoras += Number( job['daily-hours'])
    };

    reamining = JobUtil.prazo(reamining);

    return { 
         ...job,
         reamining,
         status,
         budget: JobUtil.calculetBudget(job, Profile.valor)  
     }
    })

    let horasDia = Number( Profile['hours-per-day']) - dataHoras;
   
    horasDia = JobUtil.setIndex(horasDia);
 

    return res.render("index", {jobs: updatJobs, profile: Profile, views: statusIndex, horas: horasDia})
 }
}