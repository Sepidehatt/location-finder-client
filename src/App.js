import { useState } from "react";
import './App.css';
import axios from 'axios'

function App() {
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoordinates)
    } else {
      alert('Geolocation is not supported by this browser')
    }
  }

  const getCoordinates = (position) => {
    setLatitude(position.coords.latitude)
    setLongitude(position.coords.longitude)

  }


  


  return (
    <div className="App">
      <form >
        <button onClick={getLocation}>Get Coordinate</button>
      </form>
      <h4>Latitude : {latitude}</h4>
      <h4>longitude : {longitude}</h4>
    </div>
  );
}

export default App;
