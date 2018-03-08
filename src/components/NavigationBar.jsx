import React, { Component } from 'react';

class NavigationBar extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div>
        <ul className="nav-bar">
          <li id={"logo"} >CashX</li>
          <li><a href="default">Home</a></li>
          <li><a href="about">About Us</a></li>
          <li><a href="blog">Blog</a></li>
          <li><a href="contact">Currency Data</a></li>
        </ul>
    </div>
    )
  }
}

export default NavigationBar;