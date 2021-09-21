import React, { useContext, useState } from "react";
// import logo from "./../images/logo.jpeg";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { logOut } from "./../helpers/firebase";
// import alertify from "alertifyjs";


export default function Navbar() {
  const [showToggle, setShowToggle] = useState(false);
  const { currentUser } = useContext(AuthContext)

  return (
    <div className="navbar-container">
      <div className="container-logo">
      <img className="logo" src="https://media-exp1.licdn.com/dms/image/D4D35AQGS2EuoiomlMA/profile-framedphoto-shrink_400_400/0/1631403664545?e=1632002400&v=beta&t=8WcILVGX5Zc9h-UPf4TxZIQajutv4-nVuQMOuxOeB2g" alt="cw_logo"/>
      </div>
      <div className="container-name">
        <a href="/" className="navbar-link">
          <h1>My Blog</h1>
        </a>
      </div>
      <div
        className="containre-login-btn"

        onClick={() => {
          setShowToggle(!showToggle);
        }}
      >
        <i className="fas fa-user-circle"></i>
      </div>


      {showToggle && (
        <div className={"menu"}>
          {!currentUser ?
            <>
              <Link className="navbar-link" to="/login" ><p onClick={() => setShowToggle(false)}>Login</p></Link>
              <Link className="navbar-link" to="/register" ><p onClick={() => setShowToggle(false)}>Register</p></Link>

            </>
            :
            <>
              <Link className="navbar-link" to="/profile" ><p onClick={() => { setShowToggle(false) }}>Profile</p></Link>
              <Link className="navbar-link" to="/new" ><p onClick={() => { setShowToggle(false)}}>New</p></Link>
              <Link className="navbar-link" to="/login" ><p onClick={() => { setShowToggle(false); logOut() }}>Logout</p></Link>
            </>

          }
        </div>
      )}


    </div>
  );
}
