import React, { useEffect } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "../estilos/facturadescargable.css";

function facturadescargable() {
  useEffect(() => {
    const button = document.querySelector(".download-button");

    const handleDownload = () => {
      const factura = document.getElementById("factura");
      if (!factura) return;

      html2canvas(factura, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "pt",
          format: "a4",
        });
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("factura-gymtrack.pdf");
      });
    };

    if (button) {
      button.addEventListener("click", handleDownload);
    }

    return () => {
      if (button) {
        button.removeEventListener("click", handleDownload);
      }
    };
  }, []);

  return (
    <div>
      <header className="nav">
        <div className="logo">GYMTRACK</div>
        <nav>
          <a href="#">MÉTODO DE PAGO</a>
          <a href="#">FACTURAS</a>
          <a href="#">NOTIFICACIONES</a>
        </nav>
      </header>

      <div className="container">
        <div className="search-bar">
          <input type="text" placeholder="Buscar factura" />
          <button className="blue-button">Buscar</button>
        </div>

        <div className="factura-box" id="factura">
          <div className="form-row">
            <label>Número de documento:</label>
            <label>Tipo de documento:</label>
            <label>Fecha de facturación:</label>
          </div>
          <div className="form-row">
            <input type="text" placeholder="123456" />
            <input type="text" placeholder="CC o NIT" />
            <input type="date" />
          </div>

          <div className="form-row">
            <label>Nombre del cliente:</label>
          </div>
          <input type="text" className="full-width" placeholder="Nombre completo" />

          <div className="form-row">
            <label>Domicilio:</label>
          </div>
          <input type="text" className="full-width" placeholder="Dirección del cliente" />

          <div className="form-row">
            <label>Ciudad o estado:</label>
            <label>Teléfono:</label>
          </div>
          <div className="form-row">
            <input type="text" placeholder="Ciudad" />
            <input type="text" placeholder="Número de teléfono" />
          </div>

          <table>
            <thead>
              <tr>
                <th>Nombre <br /> <small>(Puesto)</small></th>
                <th>Edad</th>
                <th>Apodo</th>
                <th>Empleado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Juan Pérez</td>
                <td>30</td>
                <td>JP</td>
                <td>Sí</td>
              </tr>
              <tr>
                <td>Ana Torres</td>
                <td>28</td>
                <td>Anita</td>
                <td>No</td>
              </tr>
            </tbody>
          </table>

          <div className="download">
            <button className="blue-button download-button">
              Descargar factura
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default facturadescargable;
