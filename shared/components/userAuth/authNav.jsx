import React from 'react';
import { Link } from 'react-router-dom';


const AuthNav = ({ }) => {

  return (
    <nav className="light-blue">
      <ul id="" className="right">
        <i className="cm cm-w-queen brand-logo" aria-hidden="true"></i>
        <li>
          <Link to='/'>Log in</Link>
        </li>
        <li>
          <Link to='/create'>Create Account</Link>
        </li>
      </ul>
    </nav>
  );
};

export default AuthNav;