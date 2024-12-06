import { useState } from 'react'

const Button = ({ onClick, label }) => {
  return (
    <>
      <button onClick={onClick}>{label}</button>
    </>
  )
}

const StatisticLine = (props) => {
  if (props.text === 'positive')
    return (
      <>
        <tr>
          <td>{props.text}</td>
          <td>{props.value + ' %'}</td>
        </tr>
      </>
    )

  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Title = (props) => {
  return (
    <>
      <h1>{props.text}</h1>
    </>
  )
}

const Statistics = ({ statistics }) => {
  return (
    <>
      <Title text={'statistics'} />
      {statistics.total === 0 ? <p>No feedback given</p> :
        <table>
          <tbody>
            <StatisticLine text={'good'} value={statistics.good} />
            <StatisticLine text={'neutral'} value={statistics.neutral} />
            <StatisticLine text={'bad'} value={statistics.bad} />
            <StatisticLine text={'total'} value={statistics.total} />
            <StatisticLine text={'average'} value={statistics.avg} />
            <StatisticLine text={'positive'} value={statistics.good / statistics.total * 100} />
          </tbody>
        </table>
      }
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
    bad: bad,
    total: good + bad + neutral,
    avg: (good + bad - neutral) / (good + bad + neutral)
  }

  return (
    <div>
      <Title text={'give feedback'} />
      <Button onClick={() => setGood(good + 1)} label={'good'} />
      <Button onClick={() => setNeutral(neutral + 1)} label={'neutral'} />
      <Button onClick={() => setBad(bad + 1)} label={'bad'} />
      <Statistics statistics={statistics} />
    </div>
  )

}

export default App
