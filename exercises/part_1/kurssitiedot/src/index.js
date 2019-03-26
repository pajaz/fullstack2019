import React from 'react'
import ReactDOM from 'react-dom'

const Header = props => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = props => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Part = props => {
  return (
    <p>{props.part.name} {props.part.exercises} </p>
  )
}

const Total = props => <p>Tehtäviä yhteensä {props.total[0].exercises
                          + props.total[1].exercises
                          + props.total[2].exercises}</p>

const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const parts = [
                  {
                    name: "Reactin perusteet",
                    exercises: 10
                  },
                  {
                    name: "Tiedonvälitys propseilla",
                    exercises: 7
                  },
                  {
                    name: "Komponenttien tila",
                    exercises: 14
                  }

  ]
  
  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total total={parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))