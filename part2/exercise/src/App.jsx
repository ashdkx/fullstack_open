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

const Content = ({ parts }) => {
  return (
    <>
      {parts.map(part =>
        <Part part={part.name} exercise={part.exercises} />
      )}
    </>
  )
}

const Total = ({ parts }) => {
  return (
    <>
      <p>
        total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises
      </p>
    </>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
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
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App
