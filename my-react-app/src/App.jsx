import { useState } from 'react'
import './App.css'
import Board from '../components/Board'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Board positionX={400} positionY={400} width={400} height={400} />
    </div>
  )
}

export default App
