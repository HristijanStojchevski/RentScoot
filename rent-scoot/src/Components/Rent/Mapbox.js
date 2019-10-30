import React,{useState} from 'react';
import ReactMap,{Marker} from 'react-map-gl';
import * as PointData from '../../Data/vehicle-locations.json';
export default function Map(){
    const[viewport, setViewport] = useState({
        latitude: 41.994010,
        longitude: 21.435920,
        width: '50vw',
        height: '50vh',
        zoom: 10
    });
    return <div>
        <ReactMap {...viewport}
         mapboxApiAccessToken="pk.eyJ1IjoiaHJpc3RpamFuc3JtIiwiYSI6ImNrMmNmdGhnejA0aXgzYm8wbXlzcGdjcXcifQ.u48U8MvhK5IPyoiyci6jXw"
         mapStyle = "mapbox://styles/hristijansrm/ck2cwqhel0fta1co4nkwkadlz"
         onViewportChange ={(viewport)=>{setViewport(viewport);}}
         >
             {PointData.features.map((point)=>(
                 <Marker key={point.properties.Loc_ID}
                    latitude={point.properties.Coordinates[0]}  longitude={point.properties.Coordinates[1]}>
                     <div> Scoot</div>
                 </Marker>
             ))}
         </ReactMap>
    </div>
}