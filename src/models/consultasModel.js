const mongoose = require('mongoose');

const Consulta = mongoose.model('Consulta', {
    medico: String,
    paciente: String,
    data: String,
    horario: String
})

module.exports = Consulta