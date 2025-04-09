import "../Estilos/IniciarSesion.css";
import { Link } from "react-router-dom";

function IniciarSesion() {
  return (
    <div className="contenedor">
      <header className="titulo">
        <img
          src="src/imgs/Logo.jpeg"
          alt="GYMTRACK Logo"
          className="logo"/>
      </header>

      <section className="formulario">
        <h2>Iniciar Sesión</h2>

        <div className="campoDoc">
          <label htmlFor="documento">N° Documento</label>
          <input
            type="text"
            id="documento"
            name="documento"
            placeholder="Ingrese su documento"
          />
        </div>

        <div className="campoPass">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            minLength="8"
            placeholder="Mínimo 8 caracteres"
            required
          />
        </div>

        <button className="btnIniciarSesion">Ingresar</button>

        <section className="opciones">
          <p>
            ¿No tienes cuenta? <Link to="/registro">Regístrate aquí</Link>
          </p>
          <p>
            <Link to="/recuperar-contrasena">Olvidé mi contraseña</Link>
          </p>
        </section>
      </section>

      <footer className="footer">¿Quiénes somos?</footer>
    </div>
  );
}

export default IniciarSesion;
