import React, { useState, Fragment, useEffect } from "react";

export const Login = () => {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [usernameLogin, setUsernameLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const onSubmitReg = async (e) => {
    e.preventDefault();
    try {

      const body = { username:usernameReg,password: passwordReg };
     // console.log("password",passwordReg)
      const response = await fetch("http://localhost:5000/userinfo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location="/Login"
    } catch (error) {
      console.log(error.message);
    }
  };

  const loginValidation=async(e)=>{
      e.preventDefault()
      try {
        
        const response = await fetch("http://localhost:5000/userinfo", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        //  body: JSON.stringify(body)
        });
       // console.log("loginValidation ",Oneuser)
  
        window.location="/Login"
      } catch (error) {
        console.log(error.message);
      }
  }

  return (
    <Fragment>
      <div className="registration"
      style={{paddingLeft:"50px"}}
     >
        Registration<br></br>
        
        <input
         style={{width:"600px",height:"40px"}}
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
        required
          type="password"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
          value={passwordReg}
          style={{width:"600px",height:"40px",paddingTop:"10px"}}
        ></input>
        <button onClick={onSubmitReg}>Submit</button>
        <br></br>
        <br></br>
        <br></br>
      </div>

      <div className="login">
        Login<br></br>
        <label>Username</label>
        <input
        required
          type="text"
          onChange={(e) => {
            setUsernameLogin(e.target.value);
          }}
          value={usernameLogin}
        ></input>
        <label>Password</label>
        <input
        required
          type="password"
          onChange={(e) => {
            setPasswordLogin(e.target.value);
          }}
          value={passwordLogin}
        ></input>
        <button onClick={loginValidation}>Submit</button>
      </div>
    </Fragment>
  );
};