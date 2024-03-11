import axios from "axios";

export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "Sign In Failure";
export const SIGNUP_REQUEST = "SIGNUP_REQUEST";

export const signUp = (payload) => {
  return async (dispatch) => {
    dispatch({ type: SIGNUP_REQUEST });

    try {
      let body = {
        email: payload.email,
        password: payload.Password,
        firstName:payload.fName,
        lastName:payload.lName
      };
      const res = await axios.post('https://fundoonote.onrender.com/user/registration', body);

      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: SIGNUP_FAILURE, error: error.message });
    }
  };
};
