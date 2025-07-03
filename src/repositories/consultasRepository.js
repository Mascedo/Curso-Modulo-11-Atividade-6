const Consulta = require('../models/consultasModel')


class consultasRepository {
    async mostrar(){
        return await Consulta.find()
    }

    async criar(consultas){
        return  await Consulta.create(consultas)
    }

    async atualizar(id, consultas){
        return await Consulta.findByIdAndUpdate(id, consultas, {new:true})
    }

    async deletar(id){
        return await Consulta.findByIdAndDelete(id)
    }
    
    }

module.exports = new consultasRepository();