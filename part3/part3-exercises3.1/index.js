const express = require('express')
const app = express()

let persons = [
    [
        { 
          "id": 1,
          "name": "Arto Hellas", 
          "number": "040-123456"
        },
        { 
          "id": 2,
          "name": "Ada Lovelace", 
          "number": "39-44-5323523"
        },
        { 
          "id": 3,
          "name": "Dan Abramov", 
          "number": "12-43-234345"
        },
        { 
          "id": 4,
          "name": "Mary Poppendieck", 
          "number": "39-23-6423122"
        }
    ]
  ]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const persona = persons[0].find(person => person.id === id)
    if (persona) {
      response.json(persona)
    } else {
      response.status(404).end()
    }
  })

app.get('/info', (request, response) => {
    let mensaje = "Phone book has info for " + persons[0].length + " people"
    let currentTime = new Date();
    console.log(mensaje)
    
    response.send(`<p>${mensaje}</p>` + `<p> ${currentTime} </p>`)
  })


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})