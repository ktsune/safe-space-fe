import React, { useState, useEffect } from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import GoogleMapReact from "google-map-react";
import Pin from "../Pin/Pin";
import "./Map.css";

const GET_CENTERS = gql`
  query {
    centers {
      name
      addressPrint
      lat
      lng
      phone
      website
      email
      id
    }
  }
`;

const Map = ({ selectCenter }) => {
  const [lat, updateLat] = useState(39.7392);
  const [lng, updateLng] = useState(-104.9903);
  const [zoom, updateZoom] = useState(13);
  const { loading, error, data } = useQuery(GET_CENTERS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  if (data) {
    var centersList = data.centers.map((center, index) => {
      return (
        <Pin
          center={center}
          lat={center.lat}
          lng={center.lng}
          text="My Marker"
          key={index}
          selectCenter={selectCenter}
        />
      );
    });
  }

  return (
    <div className="Map_container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyALUB8zfqw0qQveLHNvUcrwPpjarP4laIE" }}
        defaultCenter={{
          lat,
          lng
        }}
        defaultZoom={zoom}
      >
        {centersList}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
