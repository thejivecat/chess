import React from 'react';
import { Redirect } from 'react-router-dom';
import AuthNav from './authNav.jsx';

const CreateAccount = ({ location, redirectToReferrer, login }) => {

  const { from } = location.state || { from: { pathname: '/' } };

  if (redirectToReferrer) {
    return (
      <Redirect to={from} />
    )
  }

  return (
    <div>
      <AuthNav />
      <h1>Create new account</h1>
      <button onClick={() => login()}>Create Account and Login</button>

    </div>
  );
};

export default CreateAccount;