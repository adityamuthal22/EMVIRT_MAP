import React from "react";
import ReactDOM from "react-dom";
import { Map } from "./components/Map";
import { MapProvider } from "./components/context";

ReactDOM.render(
  <MapProvider>
    <Map />
  </MapProvider>,
  document.getElementById("root")
);
