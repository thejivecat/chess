import React from "react";
import { Redirect, Link } from "react-router-dom";
import styled from 'styled-components';
import Pieces from '../styled-components/piecesStyledComponents.jsx';

const LandingH4 = styled.h4`
  &&&&& {
    text-shadow: 0 0.125rem 0.125rem rgba(0,0,0,0.4);
  }
`;

const GreenSpan = styled.span`
  color: #00c853;
  text-shadow: none;
`;

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/chess' } };
    const { redirectToReferrer } = this.props;
    if (redirectToReferrer) {
      return (
        <Redirect to={from} />
      )
    }
    return (
      <div style={{ height: "100vh" }} className=" valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <LandingH4>
              <Pieces.WhiteRook style={{ 'fontSize': '2.5rem', 'color': '#333' }} className=""></Pieces.WhiteRook>
              <b>
                <GreenSpan>Chess</GreenSpan>
              </b> App
            </LandingH4>
            <p className="flow-text grey-text text-darken-1">
              Play chess online against others or the computer
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/create"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable green accent-4"
              >
                Create Account
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable white black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;