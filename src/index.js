const express = require('express');
const consultasRoutes = require('./routes/consultasRoutes');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express()
const port = process.env.PORT


mongoose.connect(process.env.MONGO_URL)

app.use(express.json())
app.use('/consultas', consultasRoutes)

app.listen(port, () => {
    console.log("Aplicação rodando...")
})