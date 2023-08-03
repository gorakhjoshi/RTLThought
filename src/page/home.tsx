import { useState } from 'react'
import { generateId, getNewExpirationTime } from '../utils/utils'
import { AddThoughtForm } from '../components/add-thought'
import { Thought } from '../components/thought'
import './home.css'
import { IThought } from '../types/thought'

const App = () => {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: 'This is a place for your passing thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ])

  const addThought = (thought: IThought) => {
    setThoughts((thoughts) => [thought, ...thoughts])
  }

  const removeThought = (thoughtIdToRemove: number) => {
    setThoughts((thoughts) => thoughts.filter((thought) => thought.id !== thoughtIdToRemove))
  }

  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>

      <main>
        <AddThoughtForm addThought={addThought} />
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought removeThought={removeThought} key={thought.id} thought={thought} />
          ))}
        </ul>
      </main>
    </div>
  )
}

export default App