import React, { useState } from 'react';
import ReactMapGL, { Marker,Popup } from 'react-map-gl';





export default function Map(props) {
  const token = "pk.eyJ1IjoiamFzZWdhdGVzIiwiYSI6ImNrMXlmNHRyOTBqbDAzY216bGczOGsxOGsifQ.PoQ-5U96aY_pSlXHv2oEKA"
  const [viewport, setViewport] = useState({
    latitude: 41.1507,
    longitude: -73.7542,
    width: '100vw',
    height: '100vh',
    zoom: 10,
  });
 
  const [selectedSchool, setSelectedSchool ] =useState(null)
  console.log(props)
   const { schools } = props

  return (
    <div>
      <h1 style={{textAlign:"center", backgroundColor:"#8da9f6"}}>NYC SCHOOLS</h1>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={token}
        mapStyle="mapbox://styles/jasegates/ck1yhrx0fauin1cqmee77wdzk"
        onViewportChange={viewport => {
          setViewport(viewport)
        }}
      >
       { schools.map(school => (<Marker 
       latitude={Number(school.latitude)} 
       longitude={Number(school.longitude)}
       key={school.system_code}
       >
           <div ><button onClick={(e)=> {
               e.preventDefault(); 
            //    console.log(school)
               setSelectedSchool(school)}
            }
           
                role="img" aria-label="school-bus"
                 >🚌</button></div>
       </Marker>))
       }
       {selectedSchool ? (
           <Popup latitude={Number(selectedSchool.latitude)} 
           longitude={Number(selectedSchool.longitude)}
           onClose={()=> setSelectedSchool(null)}
           >

            <div><strong>School Name:</strong> {selectedSchool.location_name}</div>
            <p><strong>Level:</strong> {selectedSchool.location_category_description}</p>
            <p><strong>Location:</strong> {selectedSchool.primary_address_line_1}</p>
           </Popup>
       ) : null}
      </ReactMapGL>
    </div>
  );
}