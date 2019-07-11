import React from 'react';
import styled from 'styled-components';
import ChessFont from '../styled-components/global.jsx';
import MainRouter from './router/mainRouter.jsx';

const PageHeight100Div = styled.div`
  min-height: 100vh;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectToReferrer: false
    };

    this.handleAuthentication = this.handleAuthentication.bind(this);
  }

  handleAuthentication() {
    this.setState({
      redirectToReferrer: true
    })
  }

  render() {

    return (
      <PageHeight100Div>
        <ChessFont />
        <MainRouter
          login={this.handleAuthentication}
          redirectToReferrer={this.state.redirectToReferrer}
        />
      </PageHeight100Div>
    );
  }
}

// export default App;
export default App;