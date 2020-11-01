import './Map.css';
import React, { Component } from 'react';
import { VectorMap } from "react-jvectormap";

class Map extends Component {

  state = {

  }

  componentDidUpdate() {

  }


  addCanada = (event) => {
    console.log('Clicking Canada Button!', event.target.value)
    this.setState({
      CA: 1,
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
    console.log('Testing state', this.state)
  }

  addUSA = (event) => {
    console.log('Clicking USA Button!', event.target.value)
    this.setState({
      ...this.state,
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
    console.log('Testing state', this.state)
  }

  addMexico = (event) => {
    console.log('Clicking Mexico Button!', event.target.value)
    this.setState({
      CA: 1,
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
    console.log('Testing state', this.state)
  }

  addBelize = (event) => {
    console.log('Clicking Belize Button!', event.target.value)
    this.setState({
      CA: 1,
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
    console.log('Testing state', this.state)
  }

  addGuatemala = (event) => {
    console.log('Clicking Guatemala Button!', event.target.value)
    this.setState({
      CA: 1,
      US: 2,
      MX: 3,
      BZ: 4,
      GT: 5,
      SV: '',
      HN: '',
      NI: '',
      CR: '',
      PA: ''
    });
    console.log('Testing state', this.state)
  }




  render() {
    let mapData = {
      CA: 100000,
      US: 9900,
      MX: 86,
      BZ: 70,
      GT: 20,
      SV: 20,
      HN: 20,
      NI: 20,
      CR: 20,
      PA: 20
    };

    return (
      <div className="Maps">
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        Select a country to see where a shipment must travel before arriving at it's destination:
        <br /> <button value='1' onClick={this.addCanada}>Canada</button> <span />
        <button value='2' onClick={this.addUSA}>United States</button> <span />
        <button value='3' onClick={this.addMexico}>Mexico</button> <span />
        <button value='4' onClick={this.addBelize}>Belize</button> <span />
        <button value='5' onClick={this.addGuatemala}>Guatemala</button>

        <div style={{ width: 500, height: 500 }}>
          <VectorMap map={'north_america_mill'}
            backgroundColor="#3b96ce"
            ref="map"
            zoomOnScroll={false}
            regionsSelectable={false}
            containerStyle={{
              width: '150%',
              height: '150%'
            }}
            selectedRegions={this.state}
            containerClassName="map"
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