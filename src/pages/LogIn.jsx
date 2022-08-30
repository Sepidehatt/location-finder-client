import { useNavigate, Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';



const LogIn = ({ setIsLoggedIn }) => {
  const [errrorMessage, setErrorMessage] = useState('')
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();


  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };
    axios
      .post("http://localhost:3001/auth/login", requestBody)
      .then(response => {
        localStorage.setItem('token', response.data.token);
        setIsLoggedIn(true)
        navigate('/')
      })
      .catch(error => {
        setErrorMessage(error.response.data.message)
      })
  }

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <h2>Login</h2>

        {errrorMessage && <p className="error-message">{errrorMessage}</p>}
        <div className="login-Title">
          <h1>Location Finder</h1>
        </div>
        <form onSubmit={handleLoginSubmit}>
          <div className="login-form">
            <div className="login-form-top">
              <input
                id="login"
                placeholder="Email ..."
                className="fadeIn second"
                type="email"
                name="email"
                value={email}
                required={true}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="login-form-bottom">
              <input
                className="fadeIn third"
                placeholder="Password ..."
                type="password"
                name="password"
                value={password}
                required={true}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button className="login-btn fadeIn fourth" type="submit">Login</button>
        </form>

        <div id="formFooter" >
          <p>Don't have an account yet?</p>
          <Link to={"/auth/register"}> Register</Link>
        </div>
      </div>
    </div>
  )
}

export default LogIn