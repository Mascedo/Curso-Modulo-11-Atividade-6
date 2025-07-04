const consultasRepository = require("../repositories/consultasRepository")

class consultasService{

    async mostrar(){
        return await consultasRepository.mostrar()
    }

    async criar(medico, paciente, data, horario){
        if(!(medico&&paciente&&data&&horario)){
            throw new Error("Todos os campos são necessarios!")
        }

        const novaConsulta = ({medico, paciente, data, horario})

        return await consultasRepository.criar(novaConsulta)
    }

    async atualizar(id, medico, paciente, data, horario){
        if(!(id&&medico&&paciente&&data&&horario)){
            throw new Error("Todos os campos são necessarios!")
        }

        const dadosAtualizados = ({medico, paciente, data, horario})

        return await consultasRepository.atualizar(id, dadosAtualizados)
    }

    async deletar(id){
        if(!(id)){
            throw new Error("Sem id de remoção!")
        }

        return await consultasRepository.deletar(id)
    }

    async buscar(query) {
        const filtros = {};

        if (typeof query.data === 'string' && query.data !== '') {
            filtros.data = query.data
        }

        if (typeof query.medico === 'string' && query.medico !== '') {
            filtros.medico = query.medico
        }

        if (Object.keys(filtros).length === 0) {
            return await consultasRepository.mostrar();
        }
      
        if((query.data||query.medico) === undefined){
            throw new Error("Filtro invalido")
        }

        return await consultasRepository.buscar(query)
      }

}

module.exports = new consultasService()