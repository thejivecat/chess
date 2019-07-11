import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
;

const AuthNav = ({ }) => {

  return (
    <div className="">
      <div className="col s12">
        <nav className="grey darken-2">
          <ul id="" className="right">
            <li>
              <Link style={{ 'textShadow': '0 0.125rem 0.125rem rgba(0,0,0,0.4)' }} to='/'>Log in</Link>
            </li>
            <li>
              <Link style={{ 'textShadow': '0 0.125rem 0.125rem rgba(0,0,0,0.4)' }} to='/create'>Create Account</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div >
  );
};

export default AuthNav;