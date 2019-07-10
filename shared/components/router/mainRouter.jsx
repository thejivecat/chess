import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './privateRoute.jsx';
import Login from '../userAuth/login.jsx';
import CreateAccount from '../userAuth/createAccount.jsx';
import ChessHome from '../chess/chessHome.jsx';
import ErrorPage from './errorPage.jsx';

const MainRouter = ({ login, redirectToReferrer }) => {

  return (
    <Switch>
      <Route exact path='/' render={props => (<Login {...props} login={login} redirectToReferrer={redirectToReferrer} />)}></Route>
      <Route exact path='/create' render={props => (<CreateAccount {...props} login={login} redirectToReferrer={redirectToReferrer} />)}></Route>
      <PrivateRoute path='/chess' component={ChessHome} isAuthenticated={redirectToReferrer} />
      <Route component={ErrorPage}></Route>
    </Switch>
  );
};

export default MainRouter;