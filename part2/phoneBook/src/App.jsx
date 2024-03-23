import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showPersons, setShowPersons] = useState('') 
  const addPerson = (event) =>{
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber
    }
    const found = persons.find((element) => element.name === personObject.name); 
    if(found){
      alert(`${personObject.name} is already in the phoneBook`)
    }
    else{
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNewName = (event) =>{
    setNewName(event.target.value)
  }
  const handleNewNumber = (event) =>{
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    const inputValue = event.target.value;
    setShowPersons(inputValue);
  };
  

  const filteredPersons = showPersons
  ? persons.filter((person) =>
      person.name.toLowerCase().includes(showPersons.toLowerCase())
    )
  : persons;


  return (
    <div>

      <div>filter shown with: <input value={showPersons} onChange={handleFilter}/> </div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
          <div>name: <input value={newName} onChange={handleNewName}/> </div>
          <div>number: <input  value={newNumber} onChange={handleNewNumber}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map((person, index) => (
            <li key={index}>
              {person.name} {person.number}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default App
