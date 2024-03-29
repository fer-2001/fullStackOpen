/* eslint-disable react/prop-types */
const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => {
    const sum = parts.reduce((total, part) => total + part.exercises, 0);
    
    return (
        <>
            {parts.map(part => 
                <Part key={part.id} part={part}/>
            )}
            <Total sum={sum}/>
        </>
    );
}

const Course = ({course}) => {
    return(
        <>
        <Header course={course.name}/>     
        <Content parts={course.parts}/>
        </>
    )
}
// Entiendo que lo que busca es: tener dentro de app un componente Course, que a su vez, Course use un Header y un Content y
// Que Content use a su vez, varios componentes Part

const App = () => {
    const course = {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
            name: 'Redux',
            exercises: 11,
            id: 4
          }
      ]
    }
  
    return <Course course={course} />
  }
  
  export default App