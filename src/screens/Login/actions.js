import { Toast } from "native-base";
import api from "../../services/auth";

import {
  AUTH_SUCCESS,
  AUTH_ATTEMPT,
  AUTH_FAILED,
  AUTH_NETWORK_ERROR
} from "./constants";

/**
 * process the login response
 * @param response
 */
export function loginError(response) {
  console.log("loginError(): " + response.data);

  if (response.data.error === "invalid_credentials") {
    Toast.show({
      text: "Login is incorrect. Please check your email and password and try again.",
      duration: 10000,
      position: "bottom",
      textStyle: { textAlign: "center" }
    });
  }

  return { type: AUTH_FAILED };
}

/**
 * Login is successful
 * @returns {{type: string, payload: *}}
 */
export function loginSuccess(response) {
  console.log("loginSuccess()");

  return {
    type: AUTH_SUCCESS,
    token: response.data
  };
}

/**
 * Network error logging in
 * @returns {{type: string}}
 */
export function loginNetworkError(response) {
  let text;

  // error occurred
  if (response.problem === "NETWORK_ERROR") {
    text = "Could not connect to the server. Please check your Internet connection and try again.";
  } else if (response.problem === "TIMEOUT_ERROR") {
    text = "Connection timed out. Please check your Internet connection and try again.";
  } else if (response.problem === "SERVER_ERROR") {
    text = "Server error occurred. Please try again in a few minutes.";
  } else {
    text = "An unexpected error occurred. We will look into this matter. Code: " + response.problem;
  }

  Toast.show({
    text: text,
    duration: 10000,
    position: "bottom",
    textStyle: { textAlign: "center" }
  });

  return {
    type: AUTH_NETWORK_ERROR,
  };
}

export function loginUser({email, password}) {
  return (dispatch) => {
    console.log("Action: loginUser()");

    dispatch({ type: AUTH_ATTEMPT, isLoading: true});

    return api.login({username: email, password: password})
      .then(response => {
        console.log("then(): " + JSON.stringify(response));

        if (response.problem === null) {
          dispatch(loginSuccess(response));
        } else if (response.problem === "CLIENT_ERROR") {
          dispatch(loginError(response));
        } else {
          dispatch(loginNetworkError(response));
        }
      }) // say login is successful
      .catch((response) => {
        console.log("ERROR: loginNetworkError exception: " + JSON.stringify(response));
      });
  };
}
