import { useState } from 'react'

const Button = ({ onClick, label }) => {
  return (
    <>
      <button onClick={onClick}>{label}</button>
    </>
  )
}

const Label = (props) => {
  if (props.text === 'positive')
    return (
      <>
        {isNaN(props.value) ? <p> {props.text} {'0 %'}</p> : <p> {props.text} {props.value + ' %'}</p>}
      </>
    )

  return (
    <>
      <p>{props.text} {props.value}</p>
    </>
  )
}

const Title = (props) => {
  return (
    <>
      <h1>{props.text}</h1>
    </>
  )
}

const Statistics = ({statistics}) => {
  return (
    <>
      <Title text={'statistics'} />
      <Label text={'good'} value={statistics.good} />
      <Label text={'neutral'} value={statistics.neutral} />
      <Label text={'bad'} value={statistics.bad} />
      <Label text={'total'} value={statistics.good + statistics.neutral + statistics.bad} />
      <Label text={'positive'} value={statistics.good / (statistics.good + statistics.neutral + statistics.bad) * 100} />
    </>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const statistics = {
    good: good,
    neutral: neutral,
    bad: bad
  }

  return (
    <div>
      <Title text={'give feedback'} />
      <Button onClick={() => setGood(good + 1)} label={'good'} />
      <Button onClick={() => setNeutral(neutral + 1)} label={'neutral'} />
      <Button onClick={() => setBad(bad + 1)} label={'bad'} />
      <Statistics statistics={statistics}/>
    </div>
  )

}

export default App
