import React from 'react';
import { Redirect } from 'react-router-dom';
import AuthNav from './authNav.jsx';

const Login = ({ location, redirectToReferrer, login }) => {

  const { from } = location.state || { from: { pathname: '/chess' } };

  console.log(login, redirectToReferrer);
  if (redirectToReferrer) {
    return (
      <Redirect to={from} />
    )
  }

  return (
    <div className="light-blue">
      <div className="row">
        <div className="col s12">
          <AuthNav />
        </div>
      </div>
      <div className="col s6 offset-s3">
        <h1>Sign in</h1>
        <button onClick={() => login()}>Login</button>
      </div>

    </div>
  );
};

export default Login;