import { useState } from 'react'
import './App.css'
import MisServicios from './components/MisServicios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from "./components/NavBar";
import Perfil from './pages/Perfil';
import CentroNotificaciones from './pages/CentroNotificaciones';
import MenuNotificaciones from './components/MenuNotificaciones';
import AgregarServicio from './components/AgregarServicio';
import Footer from './components/Footer';
import "./estilos/LAYOUTT.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="layout-container">
        <Router>
          <NavBar/>
          <main className="main-content">
            <Routes>
              <Route path='/perfil' element={<Perfil/>}/>
              <Route path='/mis-servicios' element={<MisServicios/>}/>
              <Route path='/agregar-servicio' element={<AgregarServicio/>}/>
              <Route path='/menuNotificaciones' element={<MenuNotificaciones/>}/>
                <Route path='/notificaciones' element={<CentroNotificaciones/>}/>
            </Routes>
          </main>
          <Footer/>
      </Router>
    </div> 
    </>
  )
}

export default App
