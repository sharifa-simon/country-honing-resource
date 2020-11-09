import './Map.css';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { VectorMap } from "react-jvectormap";

class Map extends Component {

  state = {
  }

  handleDropdown = (event) => {
    // when a country is selected in the dropdown menu, it provides the state with values which
    // then highlight countries in the map, on the DOM, based on user's selection
    // TO-DO: make this process more efficient - can we reduce number of functions used? method?
    switch (event.target.value) {
      case 'Canada':
        this.setState({
          CA: 1,
          US: 2,
          MX: '',
          BZ: '',
          GT: '',
          SV: '',
          HN: '',
          NI: '',
          CR: '',
          PA: ''
        });
        break;
      case 'States':
        this.setState({
          CA: '',
          US: 2,
          MX: '',
          BZ: '',
          GT: '',
          SV: '',
          HN: '',
          NI: '',
          CR: '',
          PA: ''
        });
        break;
      case 'Mexico':
        this.setState({
          CA: '',
          US: 2,
          MX: 3,
          BZ: '',
          GT: '',
          SV: '',
          HN: '',
          NI: '',
          CR: '',
          PA: ''
        });
        break;
      case 'Belize':
        this.setState({
          CA: '',
          US: 2,
          MX: 3,
          BZ: 4,
          GT: '',
          SV: '',
          HN: '',
          NI: '',
          CR: '',
          PA: ''
        });
        break;
      case 'Guatemala':
        this.setState({
          CA: '',
          US: 2,
          MX: 3,
          BZ: '',
          GT: 5,
          SV: '',
          HN: '',
          NI: '',
          CR: '',
          PA: ''
        });
        break;
      case 'Salvador':
        this.setState({
          CA: '',
          US: 2,
          MX: 3,
          BZ: '',
          GT: 5,
          SV: 6,
          HN: '',
          NI: '',
          CR: '',
          PA: ''
        });
        break;
      case 'Honduras':
        this.setState({
          CA: '',
          US: 2,
          MX: 3,
          BZ: '',
          GT: 5,
          SV: '',
          HN: 7,
          NI: '',
          CR: '',
          PA: ''
        });
        break;
      case 'Nicaragua':
        this.setState({
          CA: '',
          US: 2,
          MX: 3,
          BZ: '',
          GT: 5,
          SV: '',
          HN: 7,
          NI: 8,
          CR: '',
          PA: ''
        });
        break;
      case 'Costa':
        this.setState({
          CA: '',
          US: 2,
          MX: 3,
          BZ: '',
          GT: 5,
          SV: '',
          HN: 7,
          NI: 8,
          CR: 9,
          PA: ''
        });
        break;
      case 'Panama':
        this.setState({
          CA: '',
          US: 2,
          MX: 3,
          BZ: '',
          GT: 5,
          SV: '',
          HN: 7,
          NI: 8,
          CR: 9,
          PA: 10
        });
        break;
      default:
        this.setState({
          CA: '',
          US: '',
          MX: '',
          BZ: '',
          GT: '',
          SV: '',
          HN: '',
          NI: '',
          CR: '',
          PA: ''
        });
    }
  }


  render() {

    return (
      <Container className="mapContainer">

        <div className="mapButtons">
          {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
          <h2>Truckload</h2>
          <p>In our North American region, our trucks depart from the United States to deliver their shipments.
            <br /> To do so, they often have to travel through many countries.</p>

          <label for="selectCountries">  Where is your delivery's destination?</label>
          <br />
          <select name="selectCountries" id="selectCountries" onChange={this.handleDropdown}>
            <option value="">None</option>
            <option value="Canada" >CAN</option>
            <option value="States">USA</option>
            <option value="Mexico">MEX</option>
            <option value="Belize">BLZ</option>
            <option value="Guatemala">GTM</option>
            <option value="Salvador">SLV</option>
            <option value="Honduras">HND</option>
            <option value="Nicaragua">NIC</option>
            <option value="Costa">CRI</option>
            <option value="Panama">PAN</option>
          </select>
        </div>
        <div className="northAmericaMap">
          <VectorMap map={'north_america_mill'}
            backgroundColor="#9ecae1" // color of the "water"
            ref="map"
            zoomOnScroll={false}
            regionsSelectable={false} // if false: user can't click to highlight a country
            containerStyle={{ // sets the
              width: '100%',
              height: '500px',
            }}
            regionStyle={{
              initial: {
                fill: "#41ab5d", // color for the default map
              },
              selected: {
                fill: "#006837" // color of selected country
              },
            }}
            selectedRegions={this.state} // highlights map based on items provided from state. state is populated when user selects a country from the dropdown menu
            containerClassName="map"
            focusOn={{ // loads the map to a more specific, zoomed in area
              x: 0.5,
              y: 1,
              scale: 1.5,
              animate: false // when set to true - whenever the map changes, it re-zooms in
            }}

          //markers={this.state.US} -- stretch: have markers also populate when user selects a country from the dropdown to make map easier to navigate/read
          />
          
        </div>
        <small className="text-muted">Click and drag to explore the map. Hover over a country to see its name.</small>
        
      </Container>
    )
  }
}

export default Map;