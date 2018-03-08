import React from 'react';

class SignUpModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
      modalStyle: {display: 'show'},
      firstName: 'First name',
      lastName:'Last name',
      username: 'Pick your username',
      password:'Choose your password',
      mobile:'Mobile Number',
      email:'Email'
    }

    this.displayModal = this.displayModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
    this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this)
  }


  onClickEmptyPlaceholder(event) {
    event.target.placeholder = ""
  }


  displayModal() {
    this.setState({modalStyle: {display: 'block'}})
  }

  hideModal(event) {
    if(event.target.className === 'modal' || event.target.className === 'close') {
      this.setState({modalStyle: {display: 'none'}})
    }
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
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        mobile: this.state.mobile
      })
    }

    fetch('http://localhost:4000/api/signup', requestObject).then(() => {
      document.getElementById("signup-form").reset();
    })
  }


  handleSignUpInput(event, field) {
    let returnObj = {};
    returnObj[field] = event.target.value
    this.setState(returnObj)
  }

  render() {
    return (
      <div id="myModal" className="modal" style={this.state.modalStyle} onClick={this.hideModal}>
        <div className="model-content">
          <div className="modal-body">
            <form id="signup-form" onSubmit={this.handleSignUpSubmit}>
              <input placeholder={this.state.firstName} onFocus={this.onClickEmptyPlaceholder}  onBlur={(e) => e.target.placeholder = "First name"} onChange={(event)=>this.handleSignUpInput(event, 'firstName')} />
              <input placeholder="Last name" onFocus={this.onClickEmptyPlaceholder}  onBlur={(e) => e.target.placeholder = "Last name"} onChange={(event)=>this.handleSignUpInput(event, 'lastName')} />
              <input placeholder="Pick a Username" onFocus={this.onClickEmptyPlaceholder}  onBlur={(e) => e.target.placeholder = "Pick a username"} onChange={(event)=>this.handleSignUpInput(event, 'username')} />
              <input placeholder="Email" onFocus={this.onClickEmptyPlaceholder}  onBlur={(e) => e.target.placeholder = "Email"} onChange={(event)=>this.handleSignUpInput(event, 'email')} />
              <input type="password" placeholder="Choose your password" onFocus={this.onClickEmptyPlaceholder}  onBlur={(e) => e.target.placeholder = "Choose your password"} onChange={(event)=>this.handleSignUpInput(event, 'password')} />
              <input placeholder="Mobile Number" onFocus={this.onClickEmptyPlaceholder}  onBlur={(e) => e.target.placeholder = "Mobile Number"} onChange={(event)=>this.handleSignUpInput(event, 'mobile')} />
              <input className="submit-button" type="submit" value="Submit" />
            </form>
          </div>
          <span className="close" onClick={this.hideModal} >&times;</span>
        </div>
      </div>
    )
  }
}

export default SignUpModal;