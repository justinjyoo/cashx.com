import React, { Component } from 'react';
import '../css/main.css';
import NavigationBar from './NavigationBar.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
      </div>
    );
  }
}

export default App;
