import { useState } from 'react'
import './App.css'
import Board from '../components/Board'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Board positionX={600} positionY={10} width={800} height={800} />
    </div>
  )
}

export default App
