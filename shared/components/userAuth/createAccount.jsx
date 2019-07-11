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
    <div className="light-blue">
      <div className="row">
        <div className="col s12">
          <AuthNav />
        </div>
      </div>
      <div className="col s6 offset-s3">
        <h1>Create new account</h1>
        <button onClick={() => login()}>Create Account and Login</button>
      </div>

    </div>
  );
};

export default CreateAccount;