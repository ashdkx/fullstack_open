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
  
  const Course = ({ courses }) => {
    return (
      <div>
        {courses.map(course =>
        <>
          <Header course={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </>
  
        )}
      </div>
    )
  }

  export default Course