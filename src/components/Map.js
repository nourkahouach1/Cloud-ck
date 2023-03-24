import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = ({ center, zoom }) => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'api key ' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <AnyReactComponent lat={center.lat} lng={center.lng} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;