import "./App.css";
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Marker } from "react-leaflet";

function App() {
  const markers = [
    {
      geocode: [48.86, 2.3522],
      popUp: "Hello im a pop up 1",
    },
    {
      geocode: [48.85, 2.3522],
      popUp: "Hello im a pop up 2",
    },
    {
      geocode: [48.855, 2.34],
      popUp: "Hello im a pop up 3",
    },
  ];

  return (
    <MapContainer center={[48.8566, 2.3522]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.opentreetmap.org/copyright">OpenStreetMap</a>contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {markers.map((marker) => (
        <Marker position={marker.geocode}></Marker>
      ))}
    </MapContainer>
  );
}

export default App;
