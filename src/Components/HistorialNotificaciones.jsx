import React from 'react';
import "./../Estilos/HistorialNotificaciones.css";

const Notificaciones = () => {
return (
    <div className="notificaciones-container">
    <div className="filtros">
        <label><input type="checkbox" /> Todos</label>
        <label><input type="checkbox" /> Pendientes</label>
        <select>
        <option>Por entrenador</option>
        </select>
        <input type="text" placeholder="Buscar por usuario" />
    </div>

    <table className="tabla-notificaciones">
        <thead>
        <tr>
            <th>Fecha</th>
            <th>Asunto</th>
            <th>Destinatario</th>
            <th>Estado</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>11/03/2025</td>
            <td>Recordatorio de pago</td>
            <td>Usuarios con pagos pendientes</td>
            <td>Enviado</td>
        </tr>
        <tr>
            <td>10/03/2025</td>
            <td>Bienvenido al sistema</td>
            <td>usuario específico (Carlos)</td>
            <td>Enviado</td>
        </tr>
        <tr>
            <td>08/03/2025</td>
            <td>Renovación de plan</td>
            <td>Usuarios tipo mensual</td>
            <td>Programado</td>
        </tr>
        </tbody>
    </table>

    <button className="btn-volver">◀ Volver a Notificación usuarios</button>
    </div>
);
};

export default Notificaciones;
