import { useState } from 'react'
import './App.css'
import Board from '../components/Board'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Board positionX={100} positionY={100} width={400} height={400} />
    </div>
  )
}

export default App
