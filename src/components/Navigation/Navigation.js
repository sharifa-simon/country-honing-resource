import './Navigation.css';
import './earth-globe.svg';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';

function Navigation() {
    return (
        <>
            <Navbar fixed="top" bg="dark" variant="dark">
                <Container fluid>
                    <Row>
                        <Col>
                            <Navbar.Brand href="/">
                                <img
                                    alt=""
                                    src="/earth-globe.svg"
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                />{' '}
      Country Honing Resource

                    </Navbar.Brand>
                        </Col>
                        <Col>
                            <Nav className="justify-content-end">
                                <Nav.Item>
                                    <Nav.Link href="/">Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/about">About</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link href="/map">Map</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>

                </Container>
            </Navbar>
        </>

    );
}

export default Navigation;
