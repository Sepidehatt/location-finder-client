import axios from 'axios';
import { useNavigate,Link } from "react-router-dom";
import { useState } from 'react';

const Register = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errrorMessage, setErrorMessage] = useState('')
  let navigate = useNavigate();
  
  
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { name,email, password};
   
  
    axios
    .post("http://localhost:3001/auth/register", requestBody)
    .then(response => {
      navigate('/auth/login')
    })
    .catch(error => {
      setErrorMessage(error.response.data.message)
    })
  }
  
  
  
  return (
    <div className="wrapper fadeInDown">
    <div id="formContent">
      <h2>Register</h2>

      {errrorMessage && <p className="error-message">{errrorMessage}</p>}
      <div className="login-Title">
        <h1>Location Finder</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="login-form">
          <div className="login-form-top">
            <input
              id="name"
              placeholder="name ..."
              className="fadeIn first"
              type="name"
              name="name"
              value={name}
              required={true}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="login-form-center">
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
              type="password"
              placeholder="Password ..."
              id="password"
              name="password"
              value={password}
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button className="login-btn fadeIn fourth" type="submit">Sign Up</button>
      </form>
      <div id="formFooter" >
        <p>Already have account?</p>
        <Link to={"/auth/login"}>Login </Link>
      </div>

    </div>
  </div>
  )
}

export default Register