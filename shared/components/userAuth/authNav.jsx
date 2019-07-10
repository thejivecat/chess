import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';


const AuthNav = ({ }) => {

  return (
    <ul>
      <li>
        <Link to='/'>Log in</Link>
      </li>
      <li>
        <Link to='/create'>Create Account</Link>
      </li>
    </ul>
  );
};

export default AuthNav;