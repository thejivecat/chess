import Login from '../userAuth/login.jsx';
import CreateAccount from '../userAuth/createAccount.jsx';
import ChessHome from '../chess/chessHome.jsx';
import ErrorPage from './errorPage.jsx';

const routes = [
  {
    path: '/',
    exact: true,
    component: Login
  },
  {
    path: '/create',
    component: CreateAccount
  },
  {
    path: '/chess',
    component: ChessHome
  },
  {
    path: '*',
    component: ErrorPage
  }
];
export default routes;