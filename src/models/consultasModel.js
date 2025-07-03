const mongoose = require('mongoose');

const Funcionario = mongoose.model('Funcionario', {
    medico: String,
    paciente: String,
    data: String,
    horario: String
})

module.exports = Funcionario