import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import Pieces from '../../styled-components/piecesStyledComponents.jsx';
import AuthNav from './authNav.jsx';

const PageHeight100Div = styled.div`
  min-height: 100vh;
`;

const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  height: 250px;
  width: 400px;
  margin: auto;
  margin-top: 1rem;
  box-shadow: 0 2rem 2rem rgba(0,0,0,0.4);
  border-radius: 1rem;
  color: #f5f5f5;  
`;

const LoginTitleH4 = styled.h4`
  text-align: center;
  text-shadow: 0 0.125rem 0.125rem rgba(0,0,0,0.4);
  color: #f5f5f5;
  margin: auto;
  margin-top: 5rem;
`;

const LoginButton = styled.button`
  font-size: 1.05rem;
  padding: 0.25rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.4);

  ::active {
    outline: none;
  }
`;

const Login = ({ location, redirectToReferrer, login }) => {

  const { from } = location.state || { from: { pathname: '/chess' } };

  console.log(login, redirectToReferrer);
  if (redirectToReferrer) {
    return (
      <Redirect to={from} />
    )
  }

  return (
    <PageHeight100Div className="grey darken-1">
      <AuthNav />
      <div className="">
        <div className="">
          <LoginTitleH4 className="brand-logo">
            <Pieces.WhiteRook style={{ 'fontSize': '2.5rem', 'marginLeft': '-5rem', 'marginTop': '0.25rem' }} className=""></Pieces.WhiteRook>
            Chess
          </LoginTitleH4>
        </div>
      </div>
      <div className="">
        <LoginDiv className="grey lighten-3">
          <h4>Sign in</h4>
          <LoginButton className="green" onClick={() => login()}>Login</LoginButton>
        </LoginDiv>
      </div>

    </PageHeight100Div>
  );
};

export default Login;