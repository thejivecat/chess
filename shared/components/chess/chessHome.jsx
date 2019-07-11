import React from 'react';
import Loader from '../loader.jsx';

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
      <div>
        <h1>Chess Home Page!</h1>
      </div>
    );
  }
}

export default ChessHome;