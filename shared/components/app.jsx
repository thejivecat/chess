import React from 'react';
import io from 'socket.io-client';
import styled from 'styled-components';
import { USER_CONNECTED, USER_LOGOUT } from '../../server/socketEvents.js';
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
      isLoading: false,
      redirectToReferrer: false,
      socket: null,
      user: null
    };

    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.setIsLoading = this.setIsLoading.bind(this);
    this.initSocket = this.initSocket.bind(this);
  }

  componentDidMount() {
    this.initSocket();
  }

  initSocket() {
    const { url } = this.props;
    const socket = io(url);

    socket.on('connect', () => console.log('User connected!'));

    this.setState({
      socket
    });
  }

  // 
  // SETS this.state.user TO param
  // @param user: { id:number, name:string }
  //
  setUser(user) {
    const { socket } = this.state;
    socket.emit(USER_CONNECTED, user);
    this.setState({
      user
    });
  }

  // 
  // Sets this.state.user TO null
  // 
  logout() {
    const { socket } = this.state;
    socket.emit(USER_LOGOUT);
    this.setState({
      user: null
    });
  }

  // 
  // CHANGES BOOLEAN VALUE OF this.state.isLoading
  // 
  setIsLoading(bool) {
    this.setState({
      isLoading: bool
    });
  }

  handleAuthentication(user) {
    console.log(user, 'user')
    if (users.password2) {
      fetch(`${window.location.host}/api/users/create`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));

    }
    // this.setState({
    //   redirectToReferrer: true,
    //   isLoading: true,
    // })
  }

  render() {

    // 
    // LOADER ANIMATION DISPLAYS FOR ONE SECOND ON PAGE LOAD
    // 
    // if (this.state.isLoading) {
    //   setTimeout(() => this.setIsLoading(false), 1000);
    //   return (
    //     <Loader />
    //   );
    // }


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