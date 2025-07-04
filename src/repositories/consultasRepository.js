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
    

    async buscar(filtros) {
        const { data, medico } = filtros;
        let query = {};

        if (medico) {
            query.medico = { $regex: medico, $options: 'i' }
        }

        if (data) {
            query.data = { $regex: data, $options: 'i' }
        }

        return await Consulta.find(query);
    }
    }

module.exports = new consultasRepository();