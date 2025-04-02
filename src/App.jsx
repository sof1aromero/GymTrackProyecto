import { useState } from 'react'
import IniciarSesion from './components/IniciarSesion'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <IniciarSesion/>
    </>
  )
}

export default App
