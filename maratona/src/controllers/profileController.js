const profile = require('../model/Profile')

module.exports ={
   async index(req, res){
     return res.render( "profile", {profile:await profile.get()})
    },
   async updat(req, res){
        const data = req.body
        const semanaAno = 52
        const semanaTrab = (semanaAno - data["vacation-per-year"]) / 12
        const horasSemana = data["hours-per-day"] * data["days-per-week"]
        const traMensal = horasSemana * semanaTrab
        const valorHoras = data["monthly-budget"] / traMensal

 

     await profile.updat({
        ...await profile.get(),
        ...req.body,
        valor: valorHoras
     })
    
        return res.redirect('profile')
    }
   }