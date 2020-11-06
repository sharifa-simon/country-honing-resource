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
            <div className="title">At C.H. Robinson, we deal with international logistics across all modes of transportation.
                <p>To view examples of our supply chains, select your form of shipment:</p>
            </div>
            <CardDeck>
                <Card>
                    <Card.Body>
                        <Card.Title>AIR FREIGHT</Card.Title>
                        <Container className="shipImages">
                            <FlightTakeoffIcon style={{ fontSize: 80 }} />

                        </Container>
                        <Card.Text>
                            Air Gateways
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="secondary" size="sm" disabled>
                            Coming 2021
                        </Button>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Body>
                        <Card.Title>TRUCKLOAD</Card.Title>
                        <Container className="shipImages">
                            <LocalShippingIcon style={{ fontSize: 80 }} />
                        </Container>
                        <Card.Text>
                            North American Routes
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button href="/map" variant="secondary" size="sm">
                            Get Started
                        </Button>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Body>
                        <Card.Title>OCEAN SHIPPING</Card.Title>
                        <Container className="shipImages">
                            <DirectionsBoatIcon style={{ fontSize: 80 }} />
                        </Container>
                        <Card.Text>
                            Global Waterways
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="secondary" size="sm" disabled>
                            Coming 2022
                        </Button>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </Container>
        //   <div className="containerShip">
        //     This is the SelectShip view.

        //   </div>

    );
}

export default SelectShip;