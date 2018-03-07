import React, { Component } from 'react';
import SignUpModal from './SignUpModal.jsx'

class NavigationBar extends Component {

  constructor(props) {
    super(props)
  }
  render() {
    return (
    <div>
        <ul className="nav-bar">
          <li>CashX</li>
          <li><a href="default">oooo</a></li>
          <li><a href="about">oooo</a></li>
          <li><a href="blog">oooo</a></li>
          <li><a href="contact">oooo</a></li>
          <li><input className="auth" type="button" value="oooo" /></li>
          <li><input className="auth" type="button" value="oooo" /></li>
        </ul>
        <SignUpModal />
    </div>
    )
  }
}

export default NavigationBar;