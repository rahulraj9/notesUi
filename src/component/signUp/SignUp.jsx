import React, { useState } from "react";
import "./SignUp.css";

import { NavLink } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { signUp } from "../../Redux/action/signUpAction";

export default function SignUp() {
  const [fName,setFName] = useState('')
  const [lName,setLname] = useState('')
  const [email,setEmail] = useState('')
  const [Password,setPassword] = useState('')
  
  const [show,setShow] =useState(false)

  const showPassword = () =>{
    setShow(!show)
  }
  const payload = {
    fName,lName,email,Password
  }
  const signUpSubmit = ()=>{
    dispatch(signUp(payload))
  }
  const dispatch = useDispatch()
 
  return (
    <>
      <div className="registrationContainer">
        <div className="registrationContainerBox">
          <div className="registrationContainerHeader">
            <span className="registrationInlineTitle">
              <b>
                <font color="#1976d2">F</font>
                <font color="#e53935">u</font>
                <font color="#ffb74d">n</font>
                <font color="#1976d2">d</font>
                <font color="#388e3c">o</font>
                <font color="#e53935">o</font>
              </b>
            </span>
            <div className="registrationContainerHeaderText">
              Create your Fundoo Account
            </div>
            <div className="formContainer">
              <form className="form">
                <div className="formInput">
                  <div className="formInputField">
                    <TextField
                      name="firstName"
                      label="First Name"
                      size="small"
                      variant="outlined"
                      fullWidth
                      onChange={(e)=>setFName(e.target.value)}
                    />
                  </div>
                  <div className="formInputField">
                    <TextField
                      name="lastName"
                      label="Last Name"
                      size="small"
                      variant="outlined"
                      fullWidth
                      onChange={(e)=>setLname(e.target.value)}
                    />
                  </div>
                </div>

                <div className="formInput">
                  <div className="formInputField">
                    <TextField
                      name="email"
                      label="Email"
                      size="small"
                      variant="outlined"
                      fullWidth
                      onChange={(e)=>setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="formInput">
                  <div className="formInputField">
                    <TextField
                      name="password"
                      id="password"
                      label="Password"
                      size="small"
                      variant="outlined"
                      onChange={(e)=>setPassword(e.target.value)}
                      type={show ? "text" : "password"}
                      fullWidth
                    />
                  </div>
                  <div className="formInputField">
                    <TextField
                      name="confirmPassword"
                      label="confirm password"
                      size="small"
                      variant="outlined"
                      type={show? "text" : "password"}
                      fullWidth
                      onChange={(e)=>setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <span className="checkBoxInputs">
                  <Checkbox
                    color="primary"
                    className="showPass"
                    onClick={showPassword}
                  />
                  Show Password
                </span>

                <div className="footerButtons">
                <NavLink to='/'>
                  <div className="signInLink">
                    <Button
                      color="primary"
                     
                    >
                      <b>Sign in insted</b>
                    </Button>
                  </div>
                  </NavLink>
                  <div className="nextButton">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={signUpSubmit}
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </form>
              <div className="regImg">
                <img
                  src="https://ssl.gstatic.com/accounts/signup/glif/account.svg"
                  alt="google imge"
                />
                <p className="imgText">
                  One account. All of Fundoo working for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
