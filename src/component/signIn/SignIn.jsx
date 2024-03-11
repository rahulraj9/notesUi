import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./SignIn.css";

import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import { signIn } from "../../Redux/action/signInAction";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);


  const dispatch = useDispatch();
  let payload = { email, password };

  const sigin = () => {
    setOpen(true)
    dispatch(signIn(payload));
  };

  const clickShowPass = () => {
    setShowPassword(!showPassword);
  };

const data = useSelector((state)=>state.signInReducer)
useEffect(()=>{
  if(data.loading === false){
    setOpen(false)
  }
},[data.loading])

  return (
    <div className="loginContainer">
      <div className="loginContainerBox">
        <div className="loginContainerHeader">
          <span className="loginInlineTitle">
            <b>
              <font color="#1976d2">F</font>
              <font color="#e53935">u</font>
              <font color="#ffb74d">n</font>
              <font color="#1976d2">d</font>
              <font color="#388e3c">o</font>
              <font color="#e53935">o</font>
            </b>
          </span>
          <div className="loginContainerHeaderText">Sign In</div>
          <div className="loginContainerHeaderText1">
            Use your Fundoo Account
          </div>
          <div className="formContainer">
            <form className="form">
              <div className="formInput">
                <div className="formInputField">
                  <TextField
                    name="email"
                    label="Email"
                    size="small"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? "text" : "password"}
                    fullWidth
                  />
                </div>
              </div>

              <span className="checkBoxInputs">
                <Checkbox
                  color="primary"
                  className="showPass"
                  onClick={clickShowPass}
                />
                Show Password
              </span>

              <div className="footerButtons">
              <NavLink  to ='/forget'>
                <div className="signInLink">
                  <Button color="primary">
                    <b>Forget Password</b>
                  </Button>
                </div>
                </NavLink>
              </div>
              <div className="footerButtonsSign">
              <NavLink to='/signUp'>
                <div className="signInLink">
                  <Button color="primary">
                    <b>Create Account</b>
                  </Button>
                </div>
                </NavLink>
                <div className="nextButton">
                  <Button variant="contained" color="primary" onClick={sigin}>
                    Submit
                  </Button>
                  <Backdrop
                    sx={{
                      color: "#fff",
                      zIndex: (theme) => theme.zIndex.drawer + 1,
                    }}
                    open={open}
                    // onClick={handleClose}
                  >
                    <CircularProgress color="inherit" />
                  </Backdrop>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
