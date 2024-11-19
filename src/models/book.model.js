const mongoose = require('mongoose')

// Se crea el modelo para un libro con mongoose
const bookSchema = new mongoose.Schema(
    {
        // Los tipos son propios de mongoose
        title: String,
        author: String,
        genere: String,
        publication_date: String
    }
)

// Sintaxis para exporta un modelo de mongoose
module.exports = mongoose.model('Book', bookSchema)