import React, {useState} from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {

const [isMenuClicked, setisMenuClicked] = useState(false)

return (
    <div className="navbar-container">
      <div className="container-logo">


      <img className="logo" src="https://media-exp1.licdn.com/dms/image/D4D35AQGS2EuoiomlMA/profile-framedphoto-shrink_400_400/0/1631403664545?e=1632002400&v=beta&t=8WcILVGX5Zc9h-UPf4TxZIQajutv4-nVuQMOuxOeB2g" alt="cw_logo"/>
      </div>
      <div className="container-name">
        <a href="/" className="navbar-link">
          <h1>BLOG</h1>
        </a>
      </div>


      <div className="container-login-btn" onClick={() => {setisMenuClicked(!isMenuClicked); }}> 
      
      <i className="fas fa-user-circle"></i>
      
      </div>

        {isMenuClicked && (
        <div className={"menu"}>
          <Link className="navbar-link" to="/login"><p>Login</p></Link>
          <Link className="navbar-link" to="/register"><p>Register</p></Link>
        </div>
      )}


    </div>
  );

      }
export default Navbar
