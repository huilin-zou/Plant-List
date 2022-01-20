import React from "react";
import { Link } from "react-router-dom";
import { InputPlants } from "./InputPlants";

export default function Nav() {
  return (
    <nav id="nav">
    
      <ul className="nav m-5 justify-content-center">
        <Link to="/" />
        <li className="nav-item">
          <a
            className="nav-link active"
            href="/ListPlants"
            style={{
              color: "white",
              fontSize:"30px",
              paddingRight: "100px",
              textDecorationLine: "underline",
              fontFamily: "Roboto"
              
            }}
          >
            Plant Collection
          </a>
          <InputPlants></InputPlants>
          
        </li>

        <Link to="/logIn" />
        <li className="nav-item">
        
          <a
            className="nav-link"
            href="Login"
            style={{
              color: "white",
              fontSize: "30px",
              paddingRight: "100px",
              textDecorationLine: "underline",
              fontFamily: "Roboto"
            }}
          >
            Log In/Sign Up
          </a>
        </li>
      </ul>
    </nav>
  );
}
