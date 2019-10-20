import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';



export default function App() {
  const token = "pk.eyJ1IjoiamFzZWdhdGVzIiwiYSI6ImNrMXlmNHRyOTBqbDAzY216bGczOGsxOGsifQ.PoQ-5U96aY_pSlXHv2oEKA"
  const [viewport, setViewport] = useState({
    latitude: 41.1507,
    longitude: -73.7542,
    width: '100vw',
    height: '100vh',
    zoom: 10,
  });

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
        Markers here
    </ReactMapGL>
    </div>
  );
}

