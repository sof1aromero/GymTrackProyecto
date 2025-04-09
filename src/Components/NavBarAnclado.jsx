import "./../Estilos/EstilosNavBar.css"

function NavBarAnclado() {
    return (
        <nav className="navsection1">
            <div className="nav-left"> 
                <h1>GYMTRACK</h1>
                <ul className="nav-links">
                    <li>ENTRENADORES</li>
                    <li>SERVICIOS</li>
                </ul>
            </div>

            <div className="nav-right">
            <button className="btn">Iniciar Sesion</button>
            <button className="btn">Crear cuenta</button>
            </div>
        </nav>
    )
}

export default NavBarAnclado;