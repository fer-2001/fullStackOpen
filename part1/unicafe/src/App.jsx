/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
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


  return (
    <div>
      <h1> Give feedback </h1>
      <Button text='good' handler = {handleClickGood} />
      <Button text='neutral' handler = {handleClickNeutral} />
      <Button text='bad' handler = {handleClickBad} />
      <h2> Statistics  </h2>
      <StatisticLine text="good-in-line" value ={good} />
      <Statistics good = {good} neutral= {neutral} bad= {bad} />
    </div>
  )
}


export default App