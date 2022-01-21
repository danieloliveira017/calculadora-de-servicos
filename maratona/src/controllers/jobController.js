const Job = require('../model/Job');
const JobUtil = require('../utils/JobUtils');
const jobProfile = require('../model/Profile');

module.exports = {

    ligar(req, res){
        
        res.render("job")
    },

   async create(req, res){
    //body: { name: 'aaaaa', 'daily-hours': '123', 'total-hours': '123' }
    await Job.save({
            name: req.body.name,
            'daily-hours': req.body['daily-hours'],
            'total-hours': req.body['total-hours'],
            created_at: Date.now()
        })

    return res.redirect('/')
    },  
   async show(req, res){
        const Jobs = await Job.get();
        const Profile =  await jobProfile.get();

        const jobId = req.params.id
        const job = Jobs.find( job =>  Number( job.id) === Number(jobId))
        
        if(!job){
        return res.send('job não visto')
        }
        job.budget = JobUtil.calculetBudget(job, Profile.valor) 
                return res.render( "job-edit", {job})
            },
            
   async updat(req, res){
        const jobId = req.params.id

        const updatJobs = {
            name: req.body.name,
            "total-hours": req.body["total-hours"], 
            "daily-hours": req.body["daily-hours"],
        }
                
               await Job.updat(updatJobs, jobId);
                
                res.redirect('/job/' + jobId)
              },
   async delete(req, res){
        
        const jobId = req.params.id
        await  Job.delete(jobId);       
        
             return  res.redirect('/')
        
              }
        
};


    
