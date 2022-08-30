import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';

import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home isLoggedIn={isLoggedIn} />}></Route>
        <Route path='/auth/login' element={<LogIn setIsLoggedIn={setLoggedIn} />} />
        <Route path='/auth/register' element={<Register />} />

      </Routes>

    </div>
  );
}

export default App;
