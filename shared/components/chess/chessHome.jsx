import React from 'react';

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
    console.log(this.props.location);
    return (
      <div>
        <h1>Chess Home Page!</h1>
      </div>
    );
  }
}

export default ChessHome;