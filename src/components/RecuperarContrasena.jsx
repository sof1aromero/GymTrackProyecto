import "../Estilos/RecuperarContrasena.css";
import { Link } from "react-router-dom";

function RecuperarContrasena() {
  return (
    <div className="contenedor">
      <header className="titulo">
        <img
          src="src/imgs/Logo.jpeg"
          alt="GYMTRACK Logo"
          className="logo"/>
      </header>

      <section className="formulario">
        <h2>Recuperar contraseña</h2>

        <div className="campo">
          <label htmlFor="correorecuperar">Ingresar el correo electrónico con el que se registro</label>
          <input type="text" id="primerNombre" name="primerNombre" placeholder="Correo electrónico" required />
        </div>

        <button className="btnConfirmar">Confirmar</button>

        <div className="campo">
          <label htmlFor="codigorecuperar">Código enviado al correo</label>
          <input type="text" id="codigorecuperar" name="codigorecuperar" placeholder="" />
        </div>

        <button className="btnReestablecer">Reestablecer contraseña</button>

        <section className="opciones">
          <p>
            ¿Ya tienes cuenta? <Link to="/iniciar-sesion">Inicia sesión aquí</Link>
          </p>
        </section>
      </section>

      <footer className="footer">¿Quiénes somos?</footer>
    </div>
  );
}

export default RecuperarContrasena;