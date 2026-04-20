import { useState } from 'react'
import './App.css'
import Board from '../components/Board'
import SnakeHead from '../components/SnakeHead'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Board positionX={400} positionY={400} width={400} height={400} />
      <SnakeHead />
    </div>
  )
}

export default App
