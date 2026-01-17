const consultasRepository = require("../repositories/consultasRepository")

class consultasService{

    async mostrar(){
        return await consultasRepository.mostrar()
    }

    async criar(medico, paciente, data, horario){
        if(!(medico&&paciente&&data&&horario)){
            throw new Error("Todos os campos são necessarios!")
        }

        const horas = [
        "00","01","02","03","04","05","06","07","08","09",
        "10","11","12","13","14","15","16","17","18","19",
        "20","21","22","23","24"
        ]

        const minutos = [
        "00","01","02","03","04","05","06","07","08","09",
        "10","11","12","13","14","15","16","17","18","19",
        "20","21","22","23","24","25","26","27","28","29",
        "30","31","32","33","34","35","36","37","38","39",
        "40","41","42","43","44","45","46","47","48","49",
        "50","51","52","53","54","55","56","57","58","59"
        ]

        if(!(horas.includes(horario.slice(0, 2))) || !(minutos.includes(horario.slice(3,5))) || (horario.slice(2, 3) !== ":") || (horario.length !== 5)){
            throw new Error("O horario deve estar no formato HH:MM!")
        }

        const novaConsulta = ({medico, paciente, data, horario})

        return await consultasRepository.criar(novaConsulta)
    }

    async atualizar(id, medico, paciente, data, horario){
        if(!(id&&medico&&paciente&&data&&horario)){
            throw new Error("Todos os campos são necessarios!")
        }

        const horas = [
        "00","01","02","03","04","05","06","07","08","09",
        "10","11","12","13","14","15","16","17","18","19",
        "20","21","22","23","24"
        ]

        const minutos = [
        "00","01","02","03","04","05","06","07","08","09",
        "10","11","12","13","14","15","16","17","18","19",
        "20","21","22","23","24","25","26","27","28","29",
        "30","31","32","33","34","35","36","37","38","39",
        "40","41","42","43","44","45","46","47","48","49",
        "50","51","52","53","54","55","56","57","58","59"
        ]

        if(!(horas.includes(horario.slice(0, 2))) || !(minutos.includes(horario.slice(3,5))) || (horario.slice(2, 3) !== ":") || (horario.length !== 5)){
            console.log("O horario deve estar no formato HH:MM!")
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

        return await consultasRepository.buscar(filtros)
      }

}

module.exports = new consultasService()