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

  componentDidMount() {
  }

  displayModal() {
    this.setState({modalStyle: {display: 'block'}})
    console.log('displayModal', this.state.modalStyle)
  }

  hideModal(event) {
    if(event.target.className === 'modal' || event.target.className === 'close') {
      this.setState({modalStyle: {display: 'none'}})
      console.log('hideModal', this.state.modalStyle)
    }
  }

  handleSignUpInput(event, field) {
    let returnObj = {};
    returnObj[field] = event.target.value
    console.log(returnObj)
    this.setState(returnObj)
  }

  handleSignUpSubmit(event) {
    event.preventDefault();
    const request = {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        password: this.state.password,
        mobile: this.state.mobile,
        email: this.state.email
      })
    }
    console.log(fetch('/api/signup', request))

    console.log(event.target)
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