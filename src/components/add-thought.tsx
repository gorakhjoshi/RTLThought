import { ChangeEvent, FormEvent, useState } from 'react'
import { generateId, getNewExpirationTime } from '../utils/utils'
import { IThought } from '../types/thought'

interface IProps {
  addThought: (thought: IThought) => void
}

export function AddThoughtForm({ addThought }: IProps) {
  const [text, setText] = useState('')
  const handleTextChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target
    setText(value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (text.length) {
      const thought = {
        id: generateId(),
        text: text,
        expiresAt: getNewExpirationTime(),
      }
      addThought(thought)
      setText('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="AddThoughtForm">
      <input type="text" aria-label="What's on your mind?" placeholder="What's on your mind?" value={text} onChange={handleTextChange} />
      <input type="submit" value="Add" />
    </form>
  )
}
