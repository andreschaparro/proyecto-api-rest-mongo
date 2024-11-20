const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { config } = require('dotenv')

config()

// Rutas para los libros
const bookRoutes = require('./routes/book.routes')

const app = express()

// Middleware para parsear los body
app.use(bodyParser.json())

// Conexión a la base de datos
mongoose.connect(process.env.MONGO_URL, {dbName: process.env.MONGO_DB_NAME})
const db = mongoose.connection

// Middleware para usar las rutas a patir de /books
app.use('/books', bookRoutes)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`)
})