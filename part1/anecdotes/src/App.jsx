import { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Heading = ({text}) => {
  return(
    <h1>{text}</h1>
  )
}

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [mostVoted, setMostVoted] = useState(0)

  const randAnecdoteNumber = () => {
    const randNum = Math.floor(Math.random() * anecdotes.length)
    setSelected(randNum)
  }

  const vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    console.log(mostVoted, 'mostVoted')
    votes[mostVoted] < copy[selected] ? setMostVoted(selected) : setMostVoted(mostVoted)
    setVotes(copy)
  }

  return (
    <div>
      <Heading text={'Anecdote of the day'}/>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handleClick={vote} text={'vote'} />
      <Button handleClick={randAnecdoteNumber} text={'next anecdote'} />
      <Heading text={'Anecdote with the most votes'}/>
      <p>{anecdotes[mostVoted]}</p>
      <p>has {votes[mostVoted]} votes</p>

    </div>
  )
}

export default App
