require('dotenv').config()
const express = require('express')
const { response } = require('express')
const app = express()
const cors = require('cors')
const Person = require('./models/person')
var morgan = require('morgan')

morgan.token('body', (req, res) => {
    return JSON.stringify(req.body)
})

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(morgan('tiny', {
    skip: (req, res) => req.method === 'POST'
}))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body', {
    skip: (req, res) => req.method !== 'POST'
}))

app.get('/api/persons', (req, res, next) => {
    Person.find({})
        .then(people => {
            res.json(people)
        })
        .catch(error => next(error))
})

app.get('/api/persons/:id', (req, res, next) => {
    Person.findById(req.params.id)
        .then(person => {
            res.json(person)
        })
        .catch(error => next(error))
})

app.delete('/api/persons/:id', (req, res, next) => {
    Person.findByIdAndRemove(req.params.id)
        .then(result => {
            res.status(204).end()
        })
        .catch(error => next(error))
})

app.post('/api/persons', (req, res, next) => {
    const body = req.body

    if (body.name === '') {
        var e = new Error('Name missing')
        e.name = 'NameError'
        return next(e)
    }
    else if (body.number === '') {
        var e = new Error('Number missing')
        e.name = 'NumberError'
        return next(e)
    }
    else {
        const person = new Person({
            name: body.name,
            number: body.number,
        })
    
        person.save()
            .then(savedPerson => {
                res.json(savedPerson)
            })
            .catch(error => next(error))
    }
    
})

app.put('/api/persons/:id', (req, res, next) => {
    const body = req.body

    const person = {
        name: body.name,
        number: body.number,
    }

    Person.findByIdAndUpdate(req.params.id, person, { new: true })
        .then(updatedPerson => {
            res.json(updatedPerson)
        })
        .catch(error => next(error))
})

app.get('/info', (req, res, next) => {
    Person.countDocuments()
        .then(result => {
            res.send(
                `<p>Phonebook has info for ${result} people</p>
                <p>${Date().toString()}</p>`
            )
        })
        .catch(error => next(error))
})

const errorHandler = (error, request, response, next) => {

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    }
    else if (error.name === 'NameError') {
        return response.status(400).send({ error: 'no name' })
    }
    else if (error.name === 'NumberError') {
        return response.status(400).send({ error: 'no number'}).end()
    }
    else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    }

    next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})