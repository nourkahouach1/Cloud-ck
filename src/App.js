import Map from "./components/Map";
import './App.css'
function App() {
  const center = { lat: 37.7749, lng: -122.4194 };
  const zoom = 10;

  return (
    <div className="App">
      <Map center={center} zoom={zoom} />
    </div>
  );
}

export default App;
