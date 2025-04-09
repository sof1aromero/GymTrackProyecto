import React from "react";
import NotificacionUsuario from "./NotificacionUsuario.css";


function App() {
  return (
    <div>
      <h1>Notificaciones de Usuario</h1>
      <NotificacionUsuario />
    </div>
  );
}


import React, { useState, useEffect } from "react";

import "./NotificacionUsuario.css"; // Importar los estilos


const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    socket.on("notificacionUsuario", (data) => {
      setNotifications(data);
    });

    return () => {
      socket.off("notificacionUsuario");
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button onClick={() => setShow(!show)} className="button">
        {show ? "Ocultar Notificaciones" : "Ver Notificaciones"}
      </button>

      {show && (
        <div className="notifications-container">
          <h3 className="notifications-title">Notificaciones</h3>

          {notifications.length > 0 ? (
            notifications.map((notif) => (
              <div key={notif.id} className="notification-item">
                <strong className="notification-type">{notif.type}:</strong>{" "}
                {notif.message}
              </div>
            ))
          ) : (
            <p className="notification-item">No hay notificaciones</p>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificacionUsuario;