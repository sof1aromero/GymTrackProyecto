import { useState } from 'react'
import Comp1_1 from './Components/Comp1_1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Comp1_1></Comp1_1>
    </>
  )
}

export default App;
