import React from "react";
import { GoogleMap, useLoadScript, MarkerF, PolylineF } from "@react-google-maps/api";
import mapStyles from "./mapStyles.json";
import { red } from "@mui/material/colors";
import items from "../data/airports.json";

const mapContainerStyle = {
  width: "100vw",
  height: "25vh",
};

function getCoords(airportCode) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].code === airportCode) {
      return { lat: parseInt(items[i].lat), lng: parseInt(items[i].lng) };
    }
  }
}

const code1 = "MSP";
const code2 = "LAX";

const coords = [getCoords(code1), getCoords(code2)];
console.log("Auto Coordinates",coords);

const center = ({
    lat: (coords[0].lat + coords[1].lat) / 2,
    lng: (coords[0].lng + coords[1].lng) / 2
});


const options = {
    fullscreenControl: false,
    streetViewControl: false,
    zoomControl: false,
    mapTypeControl: false,
    scrollwheel: false,
    draggable: false,
    styles: mapStyles

    };

function Map() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyARgEWVzXfMVGVtrXFmZHJwdL5yqxYFL_k",
    });

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";

    return (
        <div>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={window.innerWidth < 800 ? 2 : window.innerWidth > 800 && window.innerWidth < 1400 ? 3 : 4}
                
                center={center}
                options={options}
            >
                {coords.map((coord) => (
                    <MarkerF
                        key={coord.lat}
                        position={{ lat: coord.lat, lng: coord.lng }}
                    />
                ))}
   
                <PolylineF
                    path={coords}
                    options={{
                        geodesic: false, // set to true to draw a curved line -- need to adjust zoom level to account for this
                        strokeOpacity: 0,
                        strokeWeight: 2,
                        strokeColor: red[500],
                        icons: [
                          {
                            icon: {
                              path: 'M 0,0 0,1',
                              strokeOpacity: 1,
                              strokeWeight: 2,
                              scale: 3,
                            },
                            repeat: '10px',
                          },
                        ],
                    }}
                />
            </GoogleMap>
        </div>
    );
}

export default Map;


