const consultasService = require("../services/consultasService")


exports.mostrarConsultas = async (req, res) => {
    try{
        const consultas = await consultasService.mostrar()

        const consultasFormatados = consultas.map(consultas  => {
            return {
                ...consultas.toObject(),
                id: consultas._id,
                _id: undefined
            }
        })

        res.status(200).json(consultasFormatados)
    } catch (erro){
        res.status(500).json({erro: "Erro ao mostrar consultas", detalhes: erro.message})
    }
}  

exports.criarConsulta = async (req, res) => {
    try{
        const {medico, paciente, data, horario} = req.body
        const novaConsulta = await consultasService.criar(medico, paciente, data, horario)
        res.status(201).json(novaConsulta)
    }catch(erro){
        res.status(500).json({erro: erro.message})
    }
}

exports.atualizarConsulta = async (req, res) => {
    try{
        const {medico, paciente, data, horario} = req.body
        const id = req.params.id   
        const novaConsulta = await consultasService.atualizar(id, medico, paciente, data, horario)
        res.status(201).json(novaConsulta)
    }catch(erro){
        res.status(500).json({erro: erro.message})
    }
}

exports.deletarConsulta = async (req, res) => {
    try{
        const id = req.params.id
        await consultasService.deletar(id)
        res.status(201).json("Consulta removida!")
    }catch(erro){
        res.status(500).json({erro: erro.message})
    }
}

exports.buscarConsulta = async (req, res) => {
    try{
        const response = await consultasService.buscar(req.query)
        res.status(200).json(response)
    }catch(erro){
        res.status(500).json({erro: erro.message})
    }
}
