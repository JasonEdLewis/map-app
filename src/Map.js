import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';





export default function Map(props) {
  const token = "pk.eyJ1IjoiamFzZWdhdGVzIiwiYSI6ImNrMXlmNHRyOTBqbDAzY216bGczOGsxOGsifQ.PoQ-5U96aY_pSlXHv2oEKA"
  const [viewport, setViewport] = useState({
    latitude: 41.1507,
    longitude: -73.7542,
    width: '100vw',
    height: '100vh',
    zoom: 10,
  });
 console.log("Map props:", props)
   const { schools } = props

  return (
    <div>
      <h1>Lets map it!</h1>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={token}
        mapStyle="mapbox://styles/jasegates/ck1yhrx0fauin1cqmee77wdzk"
        onViewportChange={viewport => {
          setViewport(viewport)
        }}
      >
       { schools.map(school => <Marker>
           <div key={school.system_code}><span role="img" aria-label="school-bus">🚌</span></div>
       </Marker>)
       }
      </ReactMapGL>
    </div>
  );
}