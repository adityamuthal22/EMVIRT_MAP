import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import { Markers } from "./marker";
import "./style/Map.css"
import { useDispatchMap,useStateMap } from "./context";
import Box from '@mui/material/Box';

 export const Map = () => {
  const mapDispatch = useDispatchMap();
  const { markers } = useStateMap();


  const [mapViewport, setMapViewport] = useState({
    marginTop:"80px",
    margin:"auto",
    height: "80vh",
    width: "100%",
    longitude: 73.78,
    latitude: 19.99,
    zoom:10
  });

  return (
    <Box className="map-container">
        <Box id="navbar">
            <p id="navbar_Text">EMVIRT GOOGLE MAP</p>
        </Box>
   
   
    <ReactMapGL
      {...mapViewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
      onViewportChange={setMapViewport}
      mapStyle="mapbox://styles/ernebuta/ck6l5q6me1dmn1ip74713pndm"
      
      onClick={x => {
        x.srcEvent.which === 1 &&
          mapDispatch({ type: "ADD_MARKER", payload: { marker: x.lngLat } });
      }}
    >
      <Markers />
    </ReactMapGL>
    </Box>
  );
};