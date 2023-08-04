import { render } from '@testing-library/react'
import { Thought } from './thought'

test('Should test Thought component', () => {
  const thought = {
    id: 1,
    text: 'anything',
    expiresAt: 3600
  }
  render(<Thought thought = {thought} removeThought = {() => {}}  />)
})
