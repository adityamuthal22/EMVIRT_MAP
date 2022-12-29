import { useState } from "react";
import { Marker } from "react-map-gl";
import { useStateMap } from "./context";
import Box from '@mui/material/Box';

export const Markers = () => {
  const { markers } = useStateMap();

  return (
    <Box>

      {markers.map((marker, index) => (
        <Marker
          key={index}
          latitude={marker[1]}
          longitude={marker[0]}
        >
          <img src={require("../logo/marker.png")} alt="" style={{height:"30px"}} />
        </Marker>
      ))}
    </Box>
  );
};
