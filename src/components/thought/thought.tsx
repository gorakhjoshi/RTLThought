import { useEffect } from 'react'
import { IThought } from '../../types/thought'

interface IProp {
  thought: IThought
  removeThought: (id: number) => void
}

export function Thought({ thought, removeThought }: IProp) {
  const handleRemoveClick = () => {
    removeThought(thought.id)
  }

  useEffect(() => {
    const timesUp = setTimeout(() => {
      removeThought(thought.id)
    }, thought.expiresAt - Date.now())

    // Clean up function
    return () => {
      clearTimeout(timesUp)
    }
  }, [thought])

  return (
    <li className="Thought">
      <button aria-label="Remove thought" className="remove-button" onClick={handleRemoveClick}>
        &times;
      </button>
      <div className="text">{thought.text}</div>
    </li>
  )
}
