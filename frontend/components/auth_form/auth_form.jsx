import React from 'react';
import { withRouter } from 'react-router';
import AuthHeader from './auth_header';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
              username: '',
              password: '',
              name: ''
            },
      selectedTab: 'LOGIN'
    };

    this.tabs = {
      'LOGIN': this.props.login,
      'SIGNUP': this.props.signup
    };
  }

  changeTab(title) {
    this.setState({ selectedTab: title });
  }

  handleInputChange(field, e) {
    const user = Object.assign({},
                               this.state.user,
                               { [field]: e.currentTarget.value });
    this.setState({ user: user });
  }

  handleClick() {
    const action = this.tabs[this.state.selectedTab];
    action(this.state.user);
  }

  componentWillUpdate(nextProps) {
    this.redirectIfLoggedIn(nextProps.loggedIn);
  }

  redirectIfLoggedIn(isLoggedIn) {
    if (isLoggedIn) {
      this.props.router.push("/events");
    }
  }

  render() {
    let signupInput;
    if (this.state.selectedTab === 'SIGNUP') {
      signupInput = (
        <label>name
          <input type='text'
                 value={ this.state.user.name }
                 onChange={ this.handleInputChange.bind(this, 'name') } />
        </label>
      );
    }

    const errors = this.props.errors.map((error, idx) => {
      return <li key={idx}>{ error }</li>;
    });

    return (
      <div className='auth-form'>
        { signupInput }
        { errors }

        <AuthHeader selectedTab={ this.state.selectedTab }
                    tabs={this.tabs}
                    onTabChosen={this.changeTab.bind(this)} />

        <label>Username
          <input type='text'
                 value={ this.state.user.username }
                 onChange={ this.handleInputChange.bind(this, 'username') }/>
        </label>

        <label>Password
          <input type='text'
                 value={ this.state.user.password }
                 onChange={ this.handleInputChange.bind(this, 'password') }/>
        </label>

        <button onClick={this.handleClick.bind(this)}>
          Login
        </button>
      </div>
    );
  }
}

export default withRouter(AuthForm);
