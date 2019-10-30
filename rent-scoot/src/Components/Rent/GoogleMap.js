import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';

function InitMap(){
    return(
        <GoogleMap defaultZoom={10} defaultCenter={{lat: 41.994010, lng: 21.435920}}/>
    );
}
const WrappedMap = withScriptjs(withGoogleMap(InitMap));

function Map(){
    const AppKey = "AIzaSyBGI_9xb6dvPVQbi391CJpzQKzmwAeJWiY";
    return(
        <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places$key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}  
        />
    );
}
export default Map;