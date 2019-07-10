import React from 'react';
import { Redirect } from 'react-router-dom';
import AuthNav from './authNav.jsx';

const Login = ({ location, redirectToReferrer, login }) => {

  const { from } = location.state || { from: { pathname: '/chess' } };

  console.log('from', location);
  if (redirectToReferrer) {
    return (
      <Redirect to={from} />
    )
  }

  return (
    <div>
      <AuthNav />
      <h1>Sign in</h1>
      <button onClick={() => login()}>Login</button>
    </div>
  );
};

export default Login;