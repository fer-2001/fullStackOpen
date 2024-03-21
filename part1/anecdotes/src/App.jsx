/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react'

const App = () => {


  // Anecdotes
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]


  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array.from({ length: anecdotes.length }, () => 0))

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const handleClickAnecdote = () =>{
    let newSelected = getRandomInt(anecdotes.length)
      setSelected(newSelected)
  }

  
  const handleVote = () =>{
    const copy = [...points]
    copy[selected] = copy[selected] + 1
    setPoints(copy)
  }

  function mostVotedAnecdote(points){
    let indexMostVoted = 0
    for(let i=0; i<points.length; i++){
      if(points[indexMostVoted] < points[i]){
        indexMostVoted = i
      }
    }
    return indexMostVoted
  }

  return (
    <div>
      <h2> Anecdote of the day </h2>
      <p>{anecdotes[selected]}</p>
      <p>Has {points[selected]} votes </p>
      <button onClick={handleVote}> Vote </button>
      <button onClick={handleClickAnecdote}> next anecdotes</button>
      <h2> Anecdote with most votes </h2>
      <p>{anecdotes[mostVotedAnecdote(points)]}</p>
    </div>
  )
}


export default App