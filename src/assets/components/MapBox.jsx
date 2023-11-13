import * as React from "react";
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiZHlhcnkwMTciLCJhIjoiY2wxaDhtams2MGJrcTNqbjJ5N2s2bTh5diJ9.cidFRjA1obU6y8MoJTy3RA";

function MapBox() {
  const [selectedLocation, setSelectedLocation] = React.useState(null);

  return (
    <Map
      initialViewState={{
        longitude: 44.57,
        latitude: 35.57,
        zoom: 3.5,
        bearing: 0,
        pitch: 0,
      }}
      mapStyle="mapbox://styles/mapbox/light-v9"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      {/* Navigation Controls */}
      <FullscreenControl />
      <NavigationControl />
      <ScaleControl />
      {/* Marker */}
      <Marker
        longitude={44.57}
        latitude={35.57}
        offsetLeft={-20}
        offsetTop={-10}
      >
        <div
          onClick={() =>
            setSelectedLocation({
              longitude: 44.57,
              latitude: 35.57,
              title: "Sample Location",
            })
          }
          style={{ color: "#d00", cursor: "pointer" }}
        >
          📍
        </div>
      </Marker>

      {/* Popup */}
      {selectedLocation && (
        <Popup
          latitude={selectedLocation.latitude}
          longitude={selectedLocation.longitude}
          onClose={() => setSelectedLocation(null)}
          closeOnClick={true}
          dynamicPosition={true}
        >
          <div>
            <h4>{selectedLocation.title}</h4>
            <p>Information about this location.</p>
          </div>
        </Popup>
      )}
    </Map>
  );
}

export default MapBox;
