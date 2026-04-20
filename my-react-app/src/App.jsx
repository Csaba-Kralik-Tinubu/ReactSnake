import { useState } from 'react'
import './App.css'
import Board from '../components/Board'
import SnakeHead from '../components/SnakeHead'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Board positionX={600} positionY={10} width={800} height={800} />
      <SnakeHead />
    </div>
  )
}

export default App
