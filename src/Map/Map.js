import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Pin from '../Pin/Pin';

class Map extends Component {
  constructor() {
    super();
    this.state = {
      center: {
        lat: 39.7392,
        lng: -104.9903
      },
      zoom: 9

    }
  }

  render() {
    return(
      <div style={{ height: '50vh', width: '100%'}}>
        <GoogleMapReact 
          bootstrapURLKeys={{key: 'AIzaSyALUB8zfqw0qQveLHNvUcrwPpjarP4laIE'}}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
        <Pin
          lat={39.7392}
          lng={-104.9903}
          text="My Marker"
        /> 
        </GoogleMapReact>
        

      </div>
    )
  }
}

export default Map;