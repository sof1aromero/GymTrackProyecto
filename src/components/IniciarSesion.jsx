import "../Estilos/IniciarSesion.css";

function IniciarSesion() {
  return (
    <div className="contenedor">
      <header className="titulo">
        <h1>GYMTRACK</h1>
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
      </section>
        <section>
            <p>¿No tienes cuenta?</p>
            
            <p>Olvidé mi contraseña</p>
        </section>
      <footer>¿Quiénes somos?</footer>
    </div>
  );
}

export default IniciarSesion;
