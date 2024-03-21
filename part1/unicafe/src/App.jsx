/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// This file contains code from exercise 1.0 to 1.14. Some of the code is commented or directly unused in the component App
import { useState } from 'react'

const Statistics = (props) => {
  let good = props.good
  let bad = props.bad
  let neutral = props.neutral
  if(good + bad + neutral === 0){
    return(
      <p>No feedback given</p>
    )
  }
  return(
    <div>
      <table>
        <tbody>
          <tr><td>good:</td><td>{good}</td></tr>
          <tr><td>neutral:</td><td>{neutral}</td></tr>
          <tr><td>bad:</td><td>{bad}</td></tr>
          <tr><td>all:</td><td>{good + bad + neutral}</td></tr>
          <tr><td>average:</td><td>{(good + neutral + bad === 0) ? 0 : (good + neutral * 0 + bad * -1) / (good + neutral + bad)}</td></tr>
          <tr><td>positive:</td><td>{(good + neutral + bad === 0) ? 0 : (good / (good + neutral + bad)) * 100}%</td></tr>
        </tbody>
      </table>
    </div>
  )
}

const StatisticLine = (props) => {
  return(
    <p> {props.text} {props.value} </p>
  )
} 


const Button = (props) => {
  return(
    <button onClick={props.handler} > {props.text} </button>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () =>{
    let newGood = good + 1
    setGood(newGood)

  }
  const handleClickBad = () =>{
    let newBad = bad + 1
    setBad(newBad)

  }
  const handleClickNeutral = () =>{
    let newNeutral = neutral + 1
    setNeutral(newNeutral)
  }

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
      {/* 
      Code of exercices 1.0 to 1.11
      <h1> Give feedback </h1>
      <Button text='good' handler = {handleClickGood} />
      <Button text='neutral' handler = {handleClickNeutral} />
      <Button text='bad' handler = {handleClickBad} />
      <h2> Statistics  </h2>
      <StatisticLine text="good-in-line" value ={good} />
      <Statistics good = {good} neutral= {neutral} bad= {bad} />
      */}
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