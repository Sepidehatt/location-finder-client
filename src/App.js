import { useState } from "react";
import './App.css';
import axios from 'axios'

function App() {
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoordinates, showError)
    } else {
      alert('Geolocation is not supported by this browser')
    }
  }

  const getCoordinates = (position) => {
    setLatitude(position.coords.latitude)
    setLongitude(position.coords.longitude)

  }


  const handleSubmit = (e) => {
    e.preventDefault()
    getLocation()
    if (latitude !== null && longitude !== null) {
      axios
        .post("http://localhost:3001/create-location", { latitude, langitude: longitude })
        .then(response => {
          console.log(response.data)
        })
    }
  }

  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.")
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.")
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.")
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.")
        break;
      default:
        alert("An unknown error occurred.")

    }
  }


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <button onClick={getLocation}>Get Coordinate</button>
      </form>
      <h4>Latitude : {latitude}</h4>
      <h4>longitude : {longitude}</h4>
    </div>
  );
}

export default App;
