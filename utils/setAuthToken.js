import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    // apply auth token to every request if logged in
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    // Delete auth token
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;