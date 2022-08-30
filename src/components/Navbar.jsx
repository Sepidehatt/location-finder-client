import { NavLink, useNavigate } from 'react-router-dom';
import profileImagePH from './../assets/profileImagePH.png'


const Navbar = () => {

  const navigate = useNavigate();

  const isAuthenticated = localStorage.getItem("token")

  const logOutUser = () => {
    localStorage.removeItem("token");
    navigate("/auth/login")
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'lightblue',
        padding: '5px'
      }}>
      <h3 style={{ margin: '0 15px' }}>Location finder</h3>
      {isAuthenticated
        ? <div
          style={{
            display: "flex",
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '0 15px'
          }}>
          <button
            style={{
              backgroundColor: 'lightblue',
              border: 'none',
              fontWeight: '600',
              fontSize: '14px',
              cursor: 'pointer'
            }}
            onClick={logOutUser}
          >Log out</button>
          <img
            style={{
              width: "35px",
              borderRadius: '50%',
              marginLeft: '8px'
            }}
            src={profileImagePH}
            alt='profile'
          />
        </div>
        :
        <NavLink
          to="/auth/login"
          style={{
            textDecoration: 'none',
            color: 'black',
            fontWeight: '600',
            fontSize: '18px',
            marginRight: '15px'
          }}
        >Login</NavLink>
      }
    </div>
  )
}

export default Navbar