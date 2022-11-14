import { useMemo } from "react";
import "./Map.css";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function ShowMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey:REACT_APP_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (
    <>
      <GoogleMap
        zoom={3}
        center={center}
        mapContainerClassName="map-container"
      >
        <Marker position={{lat: 44, lng: -80}} />
      </GoogleMap>
    </>
  );
}
