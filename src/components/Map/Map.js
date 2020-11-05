import './Map.css';
import React, { Component } from 'react';
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
      <div className="mapContainer">
        <div className="mapButtons">
          {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
       
          <label for="selectCountries"> Select a country to see where a shipment must travel before arriving at it's destination:</label>

          <select name="selectCountries" id="selectCountries" onChange={this.handleDropdown}>
            <option value="">None</option>
            <option value="Canada" >Canada</option>
            <option value="States">United States</option>
            <option value="Mexico">Mexico</option>
            <option value="Belize">Belize</option>
            <option value="Guatemala">Guatemala</option>
            <option value="Salvador">El Salvador</option>
            <option value="Honduras">Honduras</option>
            <option value="Nicaragua">Nicaragua</option>
            <option value="Costa">Costa Rica</option>
            <option value="Panama">Panama</option>
          </select>
        </div>
        <div className="northAmericaMap" style={{ width: 500, height: 500 }}>
          <VectorMap map={'north_america_mill'}
            backgroundColor="#bfd3e6" // color of the "water"
            ref="map"
            zoomOnScroll={false}
            regionsSelectable={false}
            containerStyle={{
              width: '100%',
              height: '100%'
            }}
            regionStyle={{
              initial: {
                fill: "#8c6bb1", // color for the default map
              },
              selected: {
                fill: "#4d004b" // color of selected country
              },
            }}
            selectedRegions={this.state}
            containerClassName="map"
            focusOn={{ // loads the map to a more specific, zoomed in area
              x: 0.5,
              y: 1,
              scale: 1.5,
              animate: false
            }}
            
          //markers={this.state.US}



          />
        </div>
















        {/* <VectorMap
            map={"north_america_mill"}
            backgroundColor="#0077be" //change it to ocean blue: #0077be
            zoomOnScroll={false}
            setFocus={{ mapData }}
            containerStyle={{
              width: "200%",
              height: "200%"
            }}
            onRegionClick={this.handleClick} //gets the country code
            containerClassName="map"
            regionStyle={{
              initial: {
                fill: "#e4e4e4",
                "fill-opacity": 0.9,
                stroke: "none",
                "stroke-width": 0,
                "stroke-opacity": 0
              },
              hover: {
                "fill-opacity": 0.8,
                cursor: "pointer"
              },
              selected: {
                fill: "#2938bc" //color for the clicked country
              },
              selectedHover: {}
            }}
            regionsSelectable={false}
            series={{
              regions: [
                {
                  values: mapData, //this is your data
                  scale: ["#146804", "#ff0000"], //your color game's here
                  normalizeFunction: "polynomial"
                }
              ]
            }}
          /> */}

      </div>
    )
  }
}

export default Map;