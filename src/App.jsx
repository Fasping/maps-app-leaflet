import "./App.css";
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

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

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/186/186250.png",
    iconSize: [38, 38], // size of the icon
  });

  return (
    <MapContainer center={[48.8566, 2.3522]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.opentreetmap.org/copyright">OpenStreetMap</a>contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup>
        {markers.map((marker) => (
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}

export default App;
