import React from "react";
import GoogleMapReact from 'google-map-react';
import { MapPinIcon } from '@heroicons/react/24/solid'

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 32.986961,
      lng: -96.753738
    },
    zoom: 12
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '684px', width: '100%', "border-radius": "8px", overflow: "hidden"}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDQyZztRaq_LgKMsgIY0A2rBfQkVqJ0Jhw" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <MapPinIcon className="h-10 w-10 text-black" lat={32.986961} lng={-96.753738}/>
      </GoogleMapReact>
    </div>
  );
}