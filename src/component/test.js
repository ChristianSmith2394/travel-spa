import React from "react";
import { GoogleMap, useLoadScript, MarkerF, Polyline } from "@react-google-maps/api";
import mapStyles from "./mapStyles.json";
import { red } from "@mui/material/colors";

const mapContainerStyle = {
  width: "100vw",
  height: "25vh",
};

const coords = [
    { lat: 50.1008, lng: 14.26 },
    { lat: 44.882, lng: -93.221802 }
];

// const pathCoords = [
//     ...coords,
//     {
//         lat: (coords[0].lat + coords[1].lat) / 2 * 1.1,
//         lng: (coords[0].lng + coords[1].lng) / 2,
//     },
// ];

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
                zoom={window.innerWidth < 800 ? 2 : window.innerWidth > 800 && window.innerWidth < 1600 ? 3 : 4}

                center={center}
                options={options}
            >
                {coords.map((coord) => (
                    <MarkerF
                        key={coord.lat}
                        position={{ lat: coord.lat, lng: coord.lng }}
                    />
                ))}

                /* draw a red line that follows the curve of the earth between the coordinates in coords */ 
                <Polyline
                    path={coords}
                    options={{
   
                              geodesic: true,
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


