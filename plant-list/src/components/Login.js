import React, { useState, Fragment, useEffect } from "react";
import {useLocation, useNavigate} from "react-router-dom"

export const Login = () => {


  //redirect after log in successfully
  const navigate=useNavigate()
  const location=useLocation()

  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [usernameLogin, setUsernameLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const onSubmitReg = async (e) => {
    e.preventDefault();
    try {
      const body = { username: usernameReg, password: passwordReg };
     
      const response = await fetch("http://localhost:5000/userinfo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      
      window.location="/Login"
    } catch (error) {
      console.log(error.message);
    }

   
  };

  const loginValidation = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/userinfo/${usernameLogin}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password: passwordLogin }),
        }
      );
     
      window.location="/ListPlants"
    } catch (error) {
      
      console.log(error.message);
    }

 
    
    
  };
  

  return (
    <Fragment>
     
      <div className="registration" style={{ paddingLeft: "50px" }}>
        Registration<br></br>
        <input
          className=" form-control"
          style={{ width: "600px", height: "40px" }}
          placeholder="Username"
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
          value={usernameReg}
          required
        ></input>
        <br></br>
        <input
          className=" form-control"
          placeholder="Password"
          required
          type="password"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
          value={passwordReg}
          style={{ width: "600px", height: "40px", paddingTop: "10px" }}
        ></input>
        <button onClick={onSubmitReg}>Submit</button>
        <br></br>
        <br></br>
        <br></br>
      </div>

      <div className="login" style={{ paddingLeft: "50px" }}>
        Login<br></br>
        <label>Username</label>
        <input
          style={{ width: "600px", height: "40px" }}
          className=" form-control"
          required
          type="text"
          onChange={(e) => {
            setUsernameLogin(e.target.value);
          }}
          value={usernameLogin}
        ></input>
        <label>Password</label>
        <input
          style={{ width: "600px", height: "40px" }}
          className=" form-control"
          required
          type="password"
          onChange={(e) => {
            setPasswordLogin(e.target.value);
          }}
          value={passwordLogin}
        ></input>
        <button variant="outline-secondary" onClick={loginValidation}>
          Submit
        </button>
      </div>
    </Fragment>
  );
};
