import React from 'react';
import styled from 'styled-components';
import Loader from '../loader.jsx';

const SideNavUl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  align-items: center;
  justify-content: flex-start;
  height: 10rem;
  min-width: 100%;
  padding: 0;
`;

const SideNavLi = styled.li`
  color: #f5f5f5;
  text-align: center;
  min-width: 100%;
  padding: 2rem 4rem;
  border-bottom: 1px solid #f5f5f5;
`;

const SideNavI = styled.i`
  font-size: 2rem;

`;

class ChessHome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: [],
      isWhitesMove: true,
      isCheck: false,
      isCheckMate: false
    };
  }

  render() {
    let { isLoading, setIsLoading } = this.props;

    if (isLoading) {
      setTimeout(() => setIsLoading(false), 5000);
      return (
        <Loader />
      );
    }

    console.log(this.props.location);
    return (
      <div style={{ 'height': '100vh', marginBottom: '0' }}>
        <div className="row">
          <div style={{ 'height': '100vh' }} className=" col s1 grey darken-4">
            <SideNavUl>
              <SideNavLi>
                <SideNavI className="material-icons">account_box</SideNavI>
              </SideNavLi>
              <SideNavLi>
                <SideNavI className="material-icons">show_chart</SideNavI>
              </SideNavLi>
              <SideNavLi>
                <SideNavI className="material-icons">settings</SideNavI>
              </SideNavLi>
            </SideNavUl>
          </div>
          <div style={{ 'height': '100vh' }} className="col s8 grey lighten-4">
            <h1>Chess Board Page!</h1>
          </div>
          <div style={{ 'height': '100vh' }} className="col s3 grey lighten-3">

            <h5 style={{ marginBottom: '2rem' }} className="center">Move History</h5>
            <table className="highlight responsive-table center">
              <thead>
                <tr>
                  <th>#</th>
                  <th>White</th>
                  <th>Black</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ChessHome;