import "../Estilos/Ecomp1_1.css";



function Comp1_1() {
return (
    <>
    <nav className="navsection1">
        <div className="nav-left"> 
        <h1>GYMTRACK</h1>
        <ul className="nav-links">
            <li>ENTRENADORES</li>
            <li>SERVICIOS</li>
            <li>CONTACTANOS</li>
        </ul>
        </div>

        <div className="nav-right">
        <button className="btn">Iniciar sesión</button>
        <button className="btn">Crear cuenta</button>
        </div>
    </nav>

    <div className="divsection2">

        <div className="divsection2left">

        <h1> 
            ¿QUIÉNES SOMOS? 
        </h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, id perspiciatis eveniet quia, earum cumque possimus alias repellendus voluptas architecto nobis harum, asperiores quam. Quasi vero tenetur officiis nostrum provident!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptates quisquam at, ducimus provident veritatis commodi quaerat nostrum optio cupiditate dolorum ratione, minus totam, distinctio assumenda porro saepe recusandae expedita.
        </p>

        </div>

        <div className="divdicsec2right">
            <img src="src/Components/imagenes/LOGO.jpg" alt="IMAGEN" />
        </div>

    </div>

    <footer className="footer">

        <div className="contact-info">
            <p><strong>CONTACTANOS:</strong> 3238136445</p>
            <p>gymtrack123@gmail.com</p>
        </div>
        <div className="social-icons">
            <img src="ruta-whatsapp-icono" alt="WhatsApp" />
            <img src="ruta-facebook-icono" alt="Facebook" />
            <img src="ruta-instagram-icono" alt="Instagram" />
        </div>

    </footer>

    </>
);
}

export default Comp1_1;
