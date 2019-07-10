import React from 'react';
import MainRouter from './router/mainRouter.jsx';

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
      <MainRouter
        login={this.handleAuthentication}
        redirectToReferrer={this.state.redirectToReferrer}
      />
    );
  }
}

export default App;