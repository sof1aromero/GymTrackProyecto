import Table from 'react-bootstrap/Table';

function DivOne() {
  return (
    <Table striped="columns">
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Monto</th>
          <th>Metodo de Pago</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>07/01/2025</td>
          <td>60.000</td>
          <td>Efectivo</td>
          <td>Pagado</td>
        </tr>
        <tr>
          <td>07/02/2025</td>
          <td>60.000</td>
          <td>Tarjeta de Credito</td>
          <td>Pagado</td>
        </tr>
        <td>07/03/2025</td>
          <td>60.000</td>
          <td>No pago</td>
          <td>Vencida</td>
        <tr>
        
        </tr>
      </tbody>
    </Table>
  );
}

export default DivOne;