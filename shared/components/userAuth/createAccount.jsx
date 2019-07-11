import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import AuthNav from './authNav.jsx';

const PageHeight100Div = styled.div`
  min-height: 100vh;
`;

const CreateAccount = ({ location, redirectToReferrer, login }) => {

  const { from } = location.state || { from: { pathname: '/' } };

  if (redirectToReferrer) {
    return (
      <Redirect to={from} />
    )
  }

  return (
    <PageHeight100Div className="grey lighten-2">
      <AuthNav />
      <div className="col s6 offset-s3">
        <h1>Create new account</h1>
        <button onClick={() => login()}>Create Account and Login</button>
      </div>
    </PageHeight100Div>

  );
};

export default CreateAccount;