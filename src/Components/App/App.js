import React from 'react';
import './App.css';

import Spotify from '../../util/Spotify';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth:  false,
      jamName: 'My JAM',
    };
  }

  getAccessToken() {
    Spotify.getAccessToken();
    this.setState({
      isAuth: true,
    });
  }
  
  render() {
    return (
      <div className="App">
        <Header isAuth={this.state.isAuth} connect={() => this.getAccessToken()} />
        {this.state.isAuth ? '' : <Banner />}
        {/* {this.state.isAuth ? <Cards /> : ''} */}
        <Footer isAuth={this.state.isAuth} />
      </div>
    )
  }
}

export default App;