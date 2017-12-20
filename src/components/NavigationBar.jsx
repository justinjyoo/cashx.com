import React, { Component } from 'react';
import './NavigationBar.css'

class NavigationBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
      modalStyle: {display: 'none'},
      firstName:'',
      lastName:'',
      password:'',
      mobile:'',
      email:''
    }

    this.displayModal = this.displayModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
    this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this)
  }

  displayModal() {
    this.setState({modalStyle: {display: 'block'}})
  }

  hideModal(event) {
    if(event.target.className === 'modal' || event.target.className === 'close') {
      this.setState({modalStyle: {display: 'none'}})
    }
  }

  handleSignUpInput(event, field) {
    let returnObj = {};
    returnObj[field] = event.target.value
    this.setState(returnObj)
  }

  handleSignUpSubmit(event) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    event.preventDefault();
    const requestObject = {
      method: 'post',
      headers: myHeaders,
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        password: this.state.password,
        mobile: this.state.mobile,
        email: this.state.email
      })    }
    fetch('http://localhost:4000/api/signup', requestObject)

    console.log(requestObject)

  }

  onClickEmptyPlaceholder(event) {
    event.target.placeholder = ""
  }

  render() {
    return (
    <div>
      <div className="nav-bar">
        <ul>
          <li><a href="default">Home</a></li>
          <li><a href="about">About</a></li>
          <li><a href="blog">Blog</a></li>
          <li><a href="contact">Contact</a></li>
        </ul>
        <input className="auth" type="button" value="Sign Up" onClick={this.displayModal} />
        <input className="auth" type="button" value="Sign In" />
      </div>
      <div id="myModal" className="modal" style={this.state.modalStyle} onClick={this.hideModal}>
        <div className="model-content">
          <div className="modal-body">
            <form onSubmit={this.handleSignUpSubmit}>
              <input placeholder="First Name" onFocus={this.onClickEmptyPlaceholder}  onBlur={(e) => e.target.placeholder = "First Name"} onChange={(event)=>this.handleSignUpInput(event, 'firstName')} />
              <input placeholder="Last Name" onFocus={this.onClickEmptyPlaceholder}  onBlur={(e) => e.target.placeholder = "Last Name"} onChange={(event)=>this.handleSignUpInput(event, 'lastName')} />
              <input placeholder="Email" onFocus={this.onClickEmptyPlaceholder}  onBlur={(e) => e.target.placeholder = "Email"} onChange={(event)=>this.handleSignUpInput(event, 'email')} />
              <input placeholder="Mobile Number" onFocus={this.onClickEmptyPlaceholder}  onBlur={(e) => e.target.placeholder = "Mobile Number"} onChange={(event)=>this.handleSignUpInput(event, 'mobile')} />
              <input type="password" placeholder="New Password" onFocus={this.onClickEmptyPlaceholder}  onBlur={(e) => e.target.placeholder = "New Password"} onChange={(event)=>this.handleSignUpInput(event, 'password')} />
              <input className="submit-button" type="submit" value="Submit" />
            </form>
          </div>
          <span className="close" onClick={this.hideModal} >&times;</span>
        </div>
      </div>
    </div>
    )
  }
}

export default NavigationBar;