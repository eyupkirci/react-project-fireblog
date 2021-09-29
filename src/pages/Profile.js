import React, { useState, useContext } from "react";
import { continueWithGoogle, logIn } from './../helpers/firebase';
import { useHistory } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { Redirect } from "react-router";


export default function Profile() {

  const { currentUser } = useContext(AuthContext);
  
  
  if (currentUser) {
      
      return (
        <div className="register" style={{textAlign: 'center'}}>
          
          <div className="register-form">
            <h1 className="form-title display-3">--PROFILE--</h1>
            <form id="register">
            <i className="fas fa-user"></i>
            <div className="mb-3" style={{marginTop:'3rem', textAlign: 'center'}}>
                <p>{currentUser.email}</p>
            </div>

            </form>
    
          </div>
          
        </div>
      );
      
    }
    return <Redirect to="/" />;

};

