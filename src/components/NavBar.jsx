import { Navbar, Nav, Container } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import LogoGymTrack from "../assets/imagenes/LogoGymTrack.png";
import { useState } from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
    const [mostrarMenu, setMostrarMenu] = useState(false);

    const toggleMenu = () => {
        setMostrarMenu(!mostrarMenu)
    };

    return (
        <>
            <Navbar expand="lg" className="border p-2 position-relative">
                <Container className="d-flex justify-content-between align-items-center">
                    <Navbar.Brand href="/">
                        <img
                            src={LogoGymTrack}
                            alt="GymTrack Logo"
                            height="240"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>

                    <Nav className="d-flex gap-4 nav-links">
                        <Nav.Link href="#" className="fw-semibold text-decoration-underline">Mis Servicios</Nav.Link>
                        <Nav.Link href="#" className="fw-semibold mx-3">Entrenadores</Nav.Link>
                        <Nav.Link href="#" className="fw-semibold">Mis Pagos</Nav.Link>
                    </Nav>

                    <div className="position-relative">
                        <FaUser 
                            size={58} 
                            style={{cursor: "pointer"}} 
                            onClick={toggleMenu}
                        />

                        {mostrarMenu && (
                            <div 
                                className="position absolute bg-white border rounded shadow p-2"
                                style={{top: "100%",right: 0,zIndex: 1000,minWidth: "200px"}}
                            >
                                <ul className="list-unstyled m-0">
                                    <li><Link to="/perfil" className="dropdown-item">Ver Perfil</Link></li>
                                    <li><Link to="/pagos" className="dropdown-item">Mis Pagos</Link></li>
                                    <li><Link to="/servicios-activos" className="dropdown-item">Mis Servicios</Link></li>
                                    <li><Link to="/notificaciones" className="dropdown-item">Notificaciones</Link></li>
                                    <li><Link to="/logout" className="dropdown-item text-danger ">Cerrar Sesión</Link></li>
                                </ul>
                            <div/>
                        )}
                    </div>
                <Container/>
            <Navbar/>
        </>
);
};


export default NavBar;