import React, { Component } from 'react';
import './NavigationBar.css'

class NavigationBar extends Component {

  constructor(props){
    super(props)
    this.state = {
      signedIn: false,
      modalStyle: {display: 'block'}
    }

    this.displayModal = this.displayModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
  }

  componentDidMount () {
  }

  displayModal() {
    this.setState({modalStyle: {display: 'block'}})
    console.log('displayModal', this.state.modalStyle)
  }

  hideModal() {
    this.setState({modalStyle: {display: 'none'}})
    console.log('hideModal', this.state.modalStyle)
  }

  onClickEmptyPlaceholder(e) {
    e.target.placeholder = ""
  }

  render(){
    return (
      <div className="App">
        <ul>
            <li><a href="default">Home</a></li>
            <li><a href="about">About</a></li>
            <li><a href="blog">Blog</a></li>
            <li><a href="contact">Contact</a></li>
            <input class="auth" type="button" value="Sign Up" onClick={this.displayModal}/ >
            <input class="auth" type="button" value="Sign In" />
            <div id="myModal" className="modal" style={this.state.modalStyle}>
              <div className="model-content">
                <div className="modal-body">
                  <input placeholder="First Name" onFocus={this.onClickEmptyPlaceholder}  onBlur={(e) => e.target.placeholder = "First Name"} />
                  <input placeholder="Last Name" onFocus={this.onClickEmptyPlaceholder}  onBlur={(e) => e.target.placeholder = "Last Name"} />
                  <input placeholder="Email" onFocus={this.onClickEmptyPlaceholder}  onBlur={(e) => e.target.placeholder = "Email"} />
                  <input placeholder="Mobile Number" onFocus={this.onClickEmptyPlaceholder}  onBlur={(e) => e.target.placeholder = "Mobile Number"} />
                  <input placeholder="New Password" onFocus={this.onClickEmptyPlaceholder}  onBlur={(e) => e.target.placeholder = "New Password"} />
                  <input class="submit-button" type="submit" value="Submit" />
                </div>
                <span className="close" onClick={this.hideModal} >&times;</span>
              </div>
            </div>
        </ul>
      </div>
    )
  }
}

export default NavigationBar