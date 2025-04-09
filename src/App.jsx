import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Registro from "./components/Registro";
import RecuperarContrasena from "./components/RecuperarContrasena";
import IniciarSesion from "./components/IniciarSesion";
import CambiarContrasena from "./components/CambiarContrasena";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<IniciarSesion />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/recuperar-contrasena" element={<RecuperarContrasena />} />
        <Route path="/iniciar-sesion" element={<IniciarSesion />} />
        <Route path="/cambiar-contrasena" element={<CambiarContrasena />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
