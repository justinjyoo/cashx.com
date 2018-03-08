import React, { Component } from 'react';
import '../css/main.css';
import NavigationBar from './NavigationBar.jsx'
import SignUpModal from './SignUpModal.jsx'


class Home extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <SignUpModal />
      </div>
    );
  }
}

export default Home;
