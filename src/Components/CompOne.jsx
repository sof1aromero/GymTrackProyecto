import React, { useState } from 'react';

function CompOne() {
  const [activeTab, setActiveTab] = useState('mis-pagos');
  const [filter, setFilter] = useState('Todas');
  const [payments, setPayments] = useState([
    { fecha: '07/01/2025', monto: '60.000', metodoPago: 'Efectivo', estado: 'Pagado' },
    { fecha: '07/01/2025', monto: '60.000', metodoPago: 'Tarjeta de crédito', estado: 'Pagado' },
    { fecha: '07/01/2025', monto: '60.000', metodoPago: 'Elegir Metodo', estado: 'Vencida' },
    { fecha: '08/01/2025', monto: '75.000', metodoPago: 'Transferencia', estado: 'Pendiente' },
    { fecha: '15/01/2025', monto: '60.000', metodoPago: 'Efectivo', estado: 'Pagado' },
  ]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    console.log(`Simulando apertura de pestaña: ${tabName}`);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    console.log(`Filtrando por: ${event.target.value}`);
  };

  const handlePagarAhora = (index) => {
    alert(`Simulando el pago de la factura con fecha: ${payments[index].fecha}`);
  };

  const filteredPayments = payments.filter(payment => {
    if (filter === 'Todas') return true;
    if (filter === 'Pagos' && payment.estado === 'Pagado') return true;
    if (filter === 'Alertas' && payment.estado === 'Vencida') return true;
    return false;
  });

  return (
    <div className="gym-track-app">
      <header className="main-header">
        <div className="logo">
          <img src="logo.png" alt="GymTrack Logo" /> {/* Reemplaza con la ruta de tu logo */}
          <span>GYM TRACK</span>
        </div>
        <nav>
          <button onClick={() => handleTabClick('notificaciones')}>Notificaciones</button>
          <button onClick={() => handleTabClick('alertas')}>🔔</button>
          <button onClick={() => handleTabClick('ayuda')}>?</button>
          <button onClick={() => handleTabClick('perfil')}>👤</button>
        </nav>
      </header>

      <main className="mis-pagos-section">
        <h1>MIS PAGOS</h1>

        <div className="filters-container">
          <div className="filter-dropdown">
            <label htmlFor="filter">Filtrar por:</label>
            <select id="filter" value={filter} onChange={handleFilterChange}>
              <option value="Todas">Todas</option>
              <option value="Pagos">Pagos</option>
              <option value="Alertas">Alertas</option>
              <option value="Mantenimiento o incidencia">Mantenimiento o incidencia</option>
              <option value="Marcar todas como leídas">Marcar todas como leídas</option>
            </select>
          </div>
          <button className="filter-button">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm2-2h14v2H5V4zm6 10v2h-4v-2h4zm7 2v-2h-4v2h4zm2-6v2h-4V8h4z" />
            </svg>
          </button>
        </div>

        <table className="payments-table">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Monto</th>
              <th>MetodoPago</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredPayments.map((payment, index) => (
              <tr key={index}>
                <td>{payment.fecha}</td>
                <td>{payment.monto}</td>
                <td>{payment.metodoPago}</td>
                <td>{payment.estado}</td>
                <td>
                  {payment.estado === 'Vencida' || payment.estado === 'Pendiente' ? (
                    <button className="pagar-ahora-button" onClick={() => handlePagarAhora(index)}>
                      Pagar Ahora
                    </button>
                  ) : (
                    <span>Pagado</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {activeTab !== 'mis-pagos' && (
          <div className="other-tab-content">
            <h2>Contenido de la pestaña: {activeTab}</h2>
            <p>Este es un placeholder para el contenido de la pestaña "{activeTab}".</p>
            <button onClick={() => setActiveTab('mis-pagos')}>Volver a Mis Pagos</button>
          </div>
        )}
      </main>

      <footer>
        {/* Aquí iría el footer */}
      </footer>
    </div>
  );
}

export default CompOne;