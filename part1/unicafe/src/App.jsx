import { useState } from 'react'

const Button = ({ onClick, label }) => {
  return (
    <>
      <button onClick={onClick}>{label}</button>
    </>
  )
}

const Label = (props) => {
  return (
    <>
      <p>{props.text} {props.value}</p>
    </>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} label={'good'} />
      <Button onClick={() => setNeutral(neutral + 1)} label={'neutral'} />
      <Button onClick={() => setBad(bad + 1)} label={'bad'} />
      <h1>statistics</h1>
      <Label text={'good'} value={good} />
      <Label text={'neutral'} value={neutral} />
      <Label text={'bad'} value={bad} />
    </div>
  )

}

export default App
