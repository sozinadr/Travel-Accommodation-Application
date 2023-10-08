import * as React from "react";
import Map from "react-map-gl";

function MapBox() {
  return (
    <Map
      mapStyle="mapbox://styles/mapbox/light-v9"
      mapboxAccessToken="pk.eyJ1IjoiZHlhcnkwMTciLCJhIjoiY2wxaDhtams2MGJrcTNqbjJ5N2s2bTh5diJ9.cidFRjA1obU6y8MoJTy3RA"
      initialViewState={{
        longitude: 44.57,
        latitude: 35.57,
        zoom: 6.5,
        height: "100vh",
        width: "100%",
      }}
      style={{ width: 1200, height: 300, border: "2px solid black" }}
    />
  );
}

export default MapBox;
