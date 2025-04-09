import React, { useState } from "react";

const serviciosUsuario = [
    { id: 1, nombre: "Servicio 1", descripcion: "Gym All" },
    { id: 2, nombre: "Servicio 2", descripcion: "Gym Pilates" },
];

const todosLosServicios = [
    { id: 1, nombre: "Servicio 1", descripcion: "Gym All" },
    { id: 2, nombre: "Servicio 2", descripcion: "Gym Pilates" },
    { id: 3, nombre: "Servicio 3", descripcion: "Gym Boxeo" },
];

const MisServicios = () => {
    const [mostrarTodos, setMostrarTodos] = useState(false);

    const handleMostrarServicios = () => {
        setMostrarTodos(true);
    };

    return (
        <div className="container mt-4">
            <h2>Mis Servicios</h2>

            <div className="d-flex flex-wrap gap-3 my-4">
                {serviciosUsuario.map((servicio) => (
                <div key={servicio.id} className="card p-3" style={{ width: "250px" }}>
                    <h5>{servicio.nombre}</h5>
                    <p className="text-muted">{servicio.descripcion}</p>
                    {/* Aquí podrías poner más detalles si lo deseas */}
                </div>
                ))}
            </div>

            {!mostrarTodos && (
                <button className="btn btn-dark" onClick={handleMostrarServicios}>
                Agregar un nuevo servicio
                </button>
            )}

            {mostrarTodos && (
                <div className="mt-5">
                    <h3>Elige el servicio que desees!</h3>
                    <div className="d-flex flex-wrap gap-4 mt-3">
                        {todosLosServicios.map((servicio) => (
                            <div key={servicio.id} className="card p-3" style={{ width: "250px" }}>
                                <h5>{servicio.nombre}</h5>
                                <p className="text-muted">{servicio.descripcion}</p>
                                <button className="btn btn-dark">Agregar +</button>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-4">
                        <button className="btn btn-dark">Ver más servicios</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MisServicios;
