import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import GoogleMapReact from 'google-map-react';
import Pin from '../Pin/Pin';

const GET_CENTERS = gql`
  query {
    centers {
      address
      lat
      lng
    }
  }
`;

const Map = ({ selectPin }) => {
  const [lat, updateLat] = useState(39.7392);
  const [lng, updateLng] = useState(-104.9903);
  const [zoom, updateZoom] = useState(9);

  const { loading, error, data } = useQuery(GET_CENTERS);
      
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

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
      <Pin
        lat={39.7392}
        lng={-104.9903}
        text="My Marker"
        selectPin={selectPin}
      /> 
      </GoogleMapReact>
    </div>
  )
}

export default Map;