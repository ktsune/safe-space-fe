import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import GoogleMapReact from 'google-map-react';
import Pin from '../Pin/Pin';

const GET_CENTERS = gql`
  query {
    centers {
      addressPrint
      lat
      lng
      phone
      website
      email
    }
  }
`;

const Map = ({ selectPin }) => {
  const [lat, updateLat] = useState(39.7392);
  const [lng, updateLng] = useState(-104.9903);
  const [zoom, updateZoom] = useState(11);

  const { loading, error, data } = useQuery(GET_CENTERS);
      
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  if (data) {
    var centersList = data.centers.map(center => {
      return <Pin lat={center.lat} lng={center.lng} text="My Marker" selectPin={selectPin} key={center.lat}/>
    })
  }

  console.log(data)
  return(
    <div style={{ height: '50vh', width: '100%'}}>
      <GoogleMapReact 
        bootstrapURLKeys={{key: 'AIzaSyALUB8zfqw0qQveLHNvUcrwPpjarP4laIE'}}
        defaultCenter={{
          lat,
          lng
        }}
        defaultZoom={zoom}
      >
        { centersList }
      </GoogleMapReact>
    </div>
  )
}

export default Map;