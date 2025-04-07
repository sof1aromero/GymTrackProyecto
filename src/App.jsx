import { useState } from 'react'
import './App.css'
import Servicios from './components/servicios'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from "./components/NavBar";
import Perfil from './pages/Perfil';
import CentroNotificaciones from './pages/CentroNotificaciones';
import MenuNotificaciones from './components/MenuNotificaciones';
import { useLocation } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/perfil' element={<Perfil/>}/>
            <Route path='/servicios-activos' element={<Servicios/>}/>
            <Route path='/menuNotificaciones' element={<MenuNotificaciones/>}/>
              <Route path='/notificaciones' element={<CentroNotificaciones/>}/>
          </Routes>
          {location.pathname !== "/notificaciones" && <Servicios />}
      </Router>
    
    </>
  )
}

export default App
