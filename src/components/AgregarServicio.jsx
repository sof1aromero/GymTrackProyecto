import LogoGymTrack from './../assets/imagenes/LogoGymTrack.png'
import { Container, Row, Col } from "react-bootstrap";

function AgregarServicio() {
    return (
        <>
        <body>
            <header>
            <Container className="justify-content-center col-border">
                {/* Stack the columns on mobile by making one full-width and the other half-width */}
                <Row>
                    <Col xs={12} md={8} className="text-center col-border">
                    xs=12 md=8
                    <img src={LogoGymTrack} alt="img" />
                    </Col>
                    <Col xs={6} md={4} className="text-center col-border">
                    xs=6 md=4 columna 1
                    </Col>
                </Row>
                    {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                <Row>
                    <Col xs={6} md={4} className="text-center col-border">
                    xs=6 md=4 columna 2
                    </Col>
                    <Col xs={6} md={4} className="text-center col-border">
                    xs=6 md=4 columna 3
                    </Col>
                    <Col xs={6} md={4} className="text-center col-border">
                    xs=6 md=4 columna 4
                    </Col>
                </Row>
                    {/* Columns are always 50% wide, on mobile and desktop */}
                <Row>
                    <Col xs={6} className="text-center col-border">xs=6 columna 5</Col>
                    <Col xs={6} className="text-center col-border">xs=6 columna 6</Col>
                </Row>
            </Container>
            </header>
        </body>
        </>
    );
    
}

export default AgregarServicio;