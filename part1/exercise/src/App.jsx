const Header = (props) => {
  return (
    <>
      <h1> {props.course} </h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.part}  {props.exercise}
      </p>
    </>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <>
      <Part part={props.parts[0].name} exercise={props.parts[0].exercises}/>
      <Part part={props.parts[1].name} exercise={props.parts[1].exercises}/>
      <Part part={props.parts[2].name} exercise={props.parts[2].exercises}/>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>
        Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </>
  )
}

const App = () => {
  const course = {
    course: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    { 
      name: 'State of a component',
      exercises:14 
    }
  ]
}

  return (
    <div>
      <Header course = {course.course}/>
      <Content parts = {course.parts}/>
      <Total exercises1={course.parts[0].exercises} exercises2={course.parts[1].exercises} exercises3={course.parts[2].exercises}/>
    </div>
  )
}

export default App
