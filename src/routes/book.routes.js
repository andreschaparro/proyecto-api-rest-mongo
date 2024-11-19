const express = require('express')
const router = express.Router()
// Sintaxis para importar un modelo de moongose utilizando su name
const Book = require('../models/book.model')

// Obtener todos los libros
router.get('/', async (req, res) => {
    try {
        // Trae todos los libros
        const books = await Book.find()
        console.log(books)

        if (books.length === 0) {
            // Devuelve un array vacío con el código 204 indicando que no hay libros
            res.status(204).json([])
        }

        // Devuelve los libros con el código 200
        res(books)

    } catch (error) {
        // Devuelve el mensaje de error con el código 500
        res.status(500).json({ message: error.message })
    }
})