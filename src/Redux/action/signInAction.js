import axios from "axios";

export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const SIGNIN_FAILURE = "Sign In Failure";
export const SIGNIN_REQUEST = "SIGNIN_REQUEST";

export const signIn = (payload) => {
  return async (dispatch) => {
    dispatch({ type: SIGNIN_REQUEST });

    try {
      let body = {
        email: payload.email,
        password: payload.password
      };
      const res = await axios.post('https://fundoonote.onrender.com/user/login', body);

      dispatch({ type: SIGNIN_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: SIGNIN_FAILURE, error: error.message });
    }
  };
};
