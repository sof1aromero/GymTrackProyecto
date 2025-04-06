import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Servicios from './components/servicios'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from "./components/NavBar";
import Perfil from "./pages/Perfil";
import Pagos from "./pages/Pagos";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/perfil' element={<Perfil />} />
          <Route path='/pagos' element={<Pagos />} />
        </Routes>
        <Servicios/>
      </Router>
    </>
  )
}

export default App
