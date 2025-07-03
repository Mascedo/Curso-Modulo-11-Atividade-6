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

}

module.exports = new consultasService()