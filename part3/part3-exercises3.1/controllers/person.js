const personsRouter = require('express').Router()
const Person = require('../models/person')


  
personsRouter.get('/', (request, response) => {
    Person.find({}).then(persons => {
      response.json(persons)
    })
});
  
personsRouter.get('/:id', (request, response, next) => {
  Person.findById(request.params.id).then(person => {
    if(person){
      response.json(person)
    }
    else{
      response.status(404).end();
    }
  })
  .catch(error => next(error))
});

personsRouter.delete('/:id', (request, response) => {
  Person.findByIdAndDelete(request.params.id)
    .then(result => {
      if (result) {
        response.status(204).end();
      } else {
        response.status(404).end();
      }
    })
    .catch(error => next(error));
});

personsRouter.put('/:id', (request, response, next) => {
  const { name , number } = request.body

  Person.findByIdAndUpdate(request.params.id,{ name , number },
    { new: true, runValidators: true, context: 'query' }
  )
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

// este debe ser el último middleware cargado
personsRouter.use(errorHandler)


personsRouter.get('/info', (request, response) => {
    let mensaje = "Phone book has info for " + persons.length + " people";
    let currentTime = new Date();    
    response.send(`<p>${mensaje}</p>` + `<p> ${currentTime} </p>`);
});


personsRouter.post('/', (request, response) => {
  const body = request.body;

  if (!body.name || !body.number) {
    return response.status(400).json({ 
      error: 'name or number missing' 
    });
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  })

  person.save().then(savedPerson => {
    response.json(savedPerson)
  })
});


module.exports = personsRouter