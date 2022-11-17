import { useMemo } from "react";
import "./Map.css";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const mapOptions = {
  fullscreenControl: false,
  streetViewControl: false,
  zoomControl: false,
  mapTypeControl: false,
  scrollwheel: false,
  draggable: false,
};

function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  return (
    <>
      <GoogleMap
        zoom={3}
        center={center}
        mapContainerClassName="map-container"
        options={mapOptions}
        >
        <Marker position={{ lat: 44, lng: -80 }} />
      </GoogleMap>
    </>
  );
}

export default function ShowMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC_lcR30C7ExXrZgEJGqOjKZvQ4dySnp88",
  });
  
  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}