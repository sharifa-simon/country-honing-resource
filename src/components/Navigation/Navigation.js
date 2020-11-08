import './Navigation.css';
import './earth-globe.svg';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function Navigation() {
    return (
        <>
            <Container fluid>
                <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark" style={{ backgroundColor: '#3f007d' }} >
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src="/earth-globe.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}Country Honing Resource</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link eventKey={2} href="/about">
                                About
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>

        </>

    );
}

export default Navigation;
