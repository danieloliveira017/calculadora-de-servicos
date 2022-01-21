module.exports = {
    reaminingDay(job){
        const raminigDays = ( job[ 'total-hours']/ job['daily-hours']).toFixed()
        const creatDate = new Date(job.created_at)
        const dueDay =  creatDate.getDate() + Number(raminigDays)
        const dueDateInms = creatDate.setDate(dueDay)
        const timeDiffnms = dueDateInms - Date.now()
    
        const dayInMs = 1000 * 60 * 60 * 24
        const dayDiff = (timeDiffnms / dayInMs).toFixed()
        // restão x dias
        return dayDiff;
    
    },
    calculetBudget:(job, valor)=> valor * job["total-hours"],

    setIndex(horasDia){

        horasDia = horasDia <= 0 ? `Sem horas livre` : `Você tem ${horasDia} horas livres no seu dia`
        
        return horasDia;
    },
    prazo(reamining){
        reamining = reamining == 1 ? `${reamining} dia para entrega` : `${reamining} dias para entrega`

        return reamining;
    }
}