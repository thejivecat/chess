import React from 'react';
import styled from 'styled-components';
import ChessFont from '../styled-components/global.jsx';
import MainRouter from './router/mainRouter.jsx';
import Loader from './loader.jsx'

const PageHeight100Div = styled.div`
  min-height: 100vh;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      redirectToReferrer: false
    };

    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.setIsLoading = this.setIsLoading.bind(this);
  }

  setIsLoading(bool) {
    this.setState({
      isLoading: bool
    });
  }

  handleAuthentication() {
    this.setState({
      redirectToReferrer: true,
      isLoading: true,
    })
  }

  render() {

    if (this.state.isLoading) {
      setTimeout(() => this.setIsLoading(false), 1000);
      return (
        <Loader />
      );
    }


    return (
      <PageHeight100Div>
        <ChessFont />
        <MainRouter
          isLoading={this.state.isLoading}
          setIsLoading={this.setIsLoading}
          login={this.handleAuthentication}
          redirectToReferrer={this.state.redirectToReferrer}
        />
      </PageHeight100Div>
    );
  }
}

// export default App;
export default App;