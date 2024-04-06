const express = require('express')
const app = express()
app.use(express.json())


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
    response.send(`<p>${mensaje}</p>` + `<p> ${currentTime} </p>`)
  })

app.delete('/api/persons/:id', (request, response) => {
  let personDelete = persons[0].find(person => person.id === Number(request.params.id))
  persons[0] = persons[0].filter(person => person.id !== Number(request.params.id))
  response.status(204).end()
})

const generateId = () => {
  const maxId = persons[0].length > 0
    ? Math.max(...persons[0].map(n => n.id))
    : 0
  return maxId + 1
}


app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({ 
      error: 'name or number missing' 
    })
  }


  const person = {
    id: generateId(),
    name: body.name,
    number: body.number,
  }

  persons[0].push(person) // Usando push para agregar al final del arreglo

  response.json(person)
})


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})