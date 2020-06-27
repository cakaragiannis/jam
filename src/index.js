import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './Components/Header';
import LandingPage from './Components/LandingPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
    };
  }

  render() {
    return (
      <div>
        {
          this.state.isAuth ? 
          <Header /> :
          <LandingPage />   
        }
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

