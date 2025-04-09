import { Routes, Route } from "react-router-dom";
import Registro from "./components/Registro";
import RecuperarContrasena from "./components/RecuperarContrasena";
import IniciarSesion from "./components/IniciarSesion";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IniciarSesion />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/recuperar-contrasena" element={<RecuperarContrasena />} />
      <Route path="/iniciar-sesion" element={<IniciarSesion />} />
    </Routes>
  );
}

export default App;
