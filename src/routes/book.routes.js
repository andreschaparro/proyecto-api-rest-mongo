const express = require('express')
const router = express.Router()
// Sintaxis para importar un modelo de moongose utilizando el name del export
const Book = require('../models/book.model')

// Obtener todos los libros
router.get('/', async (req, res) => {
    try {
        // Trae todos los libros
        const books = await Book.find()
        console.log(books)

        if (books.length === 0) {
            // Devuelve un array vacío con el código 204 indicando que no hay libros
            return res.status(204).json([])
        }

        // Devuelve los libros con el código 200
        res.json(books)

    } catch (error) {
        // Devuelve el mensaje de error con el código 500
        res.status(500).json({ message: error.message })
    }
})

// Crear un libro nuevo, también llamado recurso
router.post('/', async (req, res) => {
    const { title, author, genre, publication_date } = req?.body

    if (!title || !author || !genre || !publication_date) {
        return res.status(400).json({
            message: 'Los campos título, autor, género, y fecha son obligatorios'
        })
    }

    const book = new Book(
        {
            title,
            author,
            genre,
            publication_date
        }
    )

    try {
        const newBook = await book.save()
        console.log(newBook)

        res.status(201).json(newBook)

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Middleware propio
const getBook = async (req, res, next) => {
    let book
    const { id } = req.params

    // Expresión regular para los id de Mongo DB
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(404).json({ message: 'El ID del libro no es válido' })
    }

    try {
        book = await Book.findById(id)

        if (!book) {
            return res.status(404).json({ message: 'El libro no fue encontrado' })
        }

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

    // Se modifica la res agregando el libro
    res.book = book;

    // Como es un Middleware se indica que continue luego de modificar la res
    next()
}

// Uso del Middleware para obtener un libro
router.get('/:id', getBook, async (req, res) => {
    res.json(res.book)
})

// Modificar un libro
router.put('/:id', getBook, async (req, res) => {
    try {
        const book = res.book

        book.title = req.body.title || book.title
        book.author = req.body.author || book.author
        book.genre = req.body.genre || book.genre
        book.publication_date = req.body.publication_date || book.publication_date

        const bookUpdate = await book.save()

        res.json(bookUpdate)

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Modificar un atributo de un libro
router.patch('/:id', getBook, async (req, res) => {

    if (!req.body.title && !req.body.author && !req.body.genre && !req.body.publication_date) {
        return res.status(400).json({ message: 'Al menos uno de estos campos debe ser enviado: Título, Autor, Género o fecha de publicación' })
    }

    try {
        const book = res.book

        book.title = req.body.title || book.title
        book.author = req.body.author || book.author
        book.genre = req.body.genre || book.genre
        book.publication_date = req.body.publication_date || book.publication_date

        const bookUpdate = await book.save()

        res.json(bookUpdate)

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Borrar un libro
router.patch('/:id', getBook, async (req, res) => {

    if (!req.body.title && !req.body.author && !req.body.genre && !req.body.publication_date) {
        return res.status(400).json({ message: 'Al menos uno de estos campos debe ser enviado: Título, Autor, Género o fecha de publicación' })
    }

    try {
        const book = res.book

        book.title = req.body.title || book.title
        book.author = req.body.author || book.author
        book.genre = req.body.genre || book.genre
        book.publication_date = req.body.publication_date || book.publication_date

        const bookUpdate = await book.save()

        res.json(bookUpdate)

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.delete('/:id', getBook, async (req, res) => {
    try {
        const book = res.book

        await book.deleteOne({
            _id: book._id
        })

        res.json({ message: `El libro ${book.title} fue eliminado correctamente` })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router