import { useState } from 'react'
import './App.css'
import AgregarServicio from './components/AgregarServicio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AgregarServicio/>
    </>
  )
}

export default App
