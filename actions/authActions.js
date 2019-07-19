import axios from "axios";
import jwtDecode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken.js";
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING
} from "./types.js";

// Create new User
export const createUser = (userData, history) => dispatch => {
  axios.post('/api/users/create', userData)
    .then(res => history.push('/login')) // re-direct to login on successful creation
    .catch(error => dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    }));
};

// Login User - get user token
export const userLogin = userData => dispatch => {
  axios.post('/api/users/login', userData)
    .then(res => {
      // Save to local storage

      // Set token to local storage
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      // Set token to auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwtDecode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(error => {
      dispatch({
        GET_ERRORS,
        payload: error.response.data
      })
    })
};

// Set Logged In User
export const setCurrentUser = decoded => {
  return {
    SET_CURRENT_USER,
    payload: decoded
  };
};

// User is Loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  };
};

// Logout User
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set currentuser to empty object which sets isAuthenticated to false
  dispatch(setCurrentUser({}));
};