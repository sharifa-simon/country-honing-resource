import './SelectShip.css';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat';
import Button from 'react-bootstrap/Button';

function SelectShip() {
    return (

        <Container className="shipContainer">
            <div className="title"><h2>Services</h2>At C.H. Robinson, we deal with international logistics across all modes of transportation.
                <br />To view examples of our supply chains, select your form of shipment:
            </div>
            <CardDeck>
                <Card>
                    <Card.Body>
                        <Card.Title>AIR FREIGHT</Card.Title>
                        <Container className="shipImages">
                            <FlightTakeoffIcon style={{ fontSize: 80, color: '#3f007d' }} />

                        </Container>
                        <Card.Text>
                            Air Gateways
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer style={{ backgroundColor: '#efedf5' }}>
                        <Button variant="secondary" size="sm" disabled>
                            Coming 2021
                        </Button>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Body>
                        <Card.Title>TRUCKLOAD</Card.Title>
                        <Container className="shipImages">
                            <LocalShippingIcon style={{ fontSize: 80, color: '#3f007d' }} />
                        </Container>
                        <Card.Text>
                            North American Routes
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer style={{ backgroundColor: '#efedf5' }}>
                        <Button href="/map" variant="secondary" size="sm">
                            Get Started
                        </Button>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Body>
                        <Card.Title>OCEAN SHIPPING</Card.Title>
                        <Container className="shipImages">
                            <DirectionsBoatIcon style={{ fontSize: 80, color: '#3f007d' }} />
                        </Container>
                        <Card.Text>
                            Global Waterways
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer style={{ backgroundColor: '#efedf5' }}>
                        <Button variant="secondary" size="sm" disabled>
                            Coming 2021
                        </Button>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </Container>
    );
}

export default SelectShip;