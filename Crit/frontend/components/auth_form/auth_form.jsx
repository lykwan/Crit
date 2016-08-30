import React from 'react';

class AuthForm extends React.Component {


  handleClick(action) {
    if (action === 'login') {
      this.props.login({user: {username: 'timmy', password: 'password'}});
    } else if (action === 'logout') {
      this.props.logout();
    }
  }

  loggedInGreeting() {
    return (
      <div>
        <div>Hello {this.props.currentUser.username}</div>
        <button onClick={this.handleClick.bind(this, 'logout')}>
          Log out
        </button>
      </div>
    );
  }

  loggedOutGreeting() {
    return (
      <div>
        <label>Username
          <input type="text"/>
        </label>

        <label>Password
          <input type="text"/>
        </label>

        <button onClick={this.handleClick.bind(this, 'login')}>
          Login
        </button>
      </div>
    );
  }

  render() {
    if (this.props.currentUser) {
      return this.loggedInGreeting();
    } else {
      return this.loggedOutGreeting();
    }
  }
}

export default AuthForm;
