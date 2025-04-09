import "./../Estilos/NotificacionesUsuarios.css";

function NotificacionesUsuarios() {
    return (

        
        <div className="divprincipal">


            <div className="divtitulo">
                <h1 className="Titulo">Notificación a usuarios</h1>
            </div>


            <div className="divcontenido">
                <div className="filtros">
                    <label><input type="checkbox" /> Todos</label>
                    <label><input type="checkbox" /> Pendientes</label>
                    <select>
                        <option>Por entrenador</option>
                    </select>
                    <input type="text" placeholder="Buscar por usuario" />
                </div>

                <div className="mensaje">
                    <label>Mensaje:</label>
                    <textarea placeholder="Escribe el mensaje aquí" />
                </div>

                <div className="programacion">
                    <label>Programar envío:</label>
                    <input type="date" />
                </div>

                <div className="archivo">
                    <label>Adjuntar archivo:</label>

                </div>

                <div className="prioridad">
                    <label>Prioridad:</label>
                    <select>
                        <option>Prioridad</option>
                        <option>Alta</option>
                        <option>Media</option>
                        <option>Baja</option>
                    </select>
                </div>

                <button className="boton-enviar">ENVIAR</button>

                <div className="historial">
                    <a href="#">Historial de notificaciones enviadas</a>
                </div>


            </div>


        </div>
    );
}

export default NotificacionesUsuarios;
