import axios from 'axios'
import { useState } from "react";
import { Navigate } from "react-router-dom";

const Home = ({ isLoggedIn }) => {
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
    getLocation()
    e.preventDefault()
    if (latitude !== null && longitude !== null) {
      axios
        .post(`${process.env.REACT_APP_API_URL}/locations`, { latitude, longitude })
        .then(response => {
          alert('Your Location Saved Successfully!')
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

  let token = localStorage.getItem('token')


  return (
    <div
      style={{
        margin: '15px auto',
        borderRadius: '10px',
        background: '#fff',
        padding: '30px',
        width: '90%',
        maxWidth: '450px',
        boxShadow: '0 30px 60px 0 rgba(0,0,0,0.3)',
        textAlign: 'center',
      }}
    >
      {isLoggedIn || token ?
        <div>
          <form onSubmit={handleSubmit}>
            <button
              onClick={getLocation}
              style={{
                padding: '10px 15px',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: 'darkcyan',
                color: 'white'
              }}
            >{!latitude && !longitude ? 'Get Coordinate' : 'Save Location'}</button>
          </form>
          <h4>Latitude : {latitude}</h4>
          <h4>Longitude : {longitude}</h4>
        </div>
        :
        <Navigate to="/auth/login" />
      }
    </div>
  )
}

export default Home