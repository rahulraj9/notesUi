import React from "react";
import "./SignIn.css";

import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

export default function SignIn() {
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
                    fullWidth
                  />
                </div>
              </div>

              <span className="checkBoxInputs">
                <Checkbox color="primary" className="showPass" />
                Show Password
              </span>

              <div className="footerButtons">
                <div className="signInLink">
                  <Button color="primary">
                    <b>Forget Password</b>
                  </Button>
                </div>
              </div>
              <div className="footerButtonsSign">
                <div className="signInLink">
                  <Button color="primary">
                    <b>Create Account</b>
                  </Button>
                </div>
                <div className="nextButton">
                  <Button variant="contained" color="primary">
                    Submit
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
