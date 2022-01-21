const Database = require('../db/config')

module.exports ={
    async get(){
        const db = await Database()

         const datas = await db.all(`SELECT * FROM jobs`);


        await db.close()

        return datas.map((data)=>({
            id: data.id,
            name: data.name,
            'daily-hours': data.daily_hours,
            'total-hours': data.total_hours,
            created_at: data.created_at,
        }));
    },

   async save(newJob){
        const db = await Database()

        await db.run(`INSERT INTO jobs (
            name,
            daily_hours,
            total_hours,
            created_at
          ) VALUES (
            "${newJob.name}",
            ${newJob['daily-hours']},
            ${newJob['total-hours']},
            ${newJob.created_at}
            
          )`)
      

            await db.close();
    },

  async  updat(newJob,jobId){
        
    const db = await Database()

         db.run(`UPDATE jobs SET
         name= "${newJob.name}",
         daily_hours = ${newJob['daily-hours']},
         total_hours = ${newJob['total-hours']}
         WHERE id = ${jobId}
         `)
        
        await db.close();
    },
   
  async  delete(id){
        const db = await Database()

        await db.run(`DELETE FROM jobs WHERE id= ${id}`)

        await db.close()
    }
}