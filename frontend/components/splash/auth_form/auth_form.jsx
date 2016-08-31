import React from 'react';
import { withRouter } from 'react-router';
import AuthHeader from './auth_header';
import RouteConstants from '../../../util/route_constants';

const LOGIN = 'LOGIN';
const SIGNUP = 'SIGNUP';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
              username: '',
              password: '',
              name: ''
            },
      selectedTab: LOGIN
    };

    this.tabs = {
      [LOGIN]: this.props.login,
      [SIGNUP]: this.props.signup
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
    this.redirectIfLoggedIn(nextProps.isLoggedIn);
  }

  redirectIfLoggedIn(isLoggedIn) {
    if (isLoggedIn) {
      this.props.router.push(RouteConstants.EVENTS.route);
    }
  }

  render() {
    let signupInput;
    if (this.state.selectedTab === SIGNUP) {
      signupInput = (
          <input type='text'
                 value={ this.state.user.name }
                 placeholder="Name"
                 onChange={ this.handleInputChange.bind(this, 'name') } />
      );
    }

    const errors = this.props.errors.map((error, idx) => {
      return <li key={idx}>{ error }</li>;
    });

    return (
      <div className='auth-form'>

        <ul className='auth-form-errors'>
          { errors }
        </ul>

        <AuthHeader selectedTab={ this.state.selectedTab }
                    tabs={ this.tabs }
                    onTabChosen={this.changeTab.bind(this)} />

        { signupInput }
        <input type='text'
               placeholder='Username'
               value={ this.state.user.username }
               onChange={ this.handleInputChange.bind(this, 'username') }/>

        <input type='password'
               placeholder='Password'
               value={ this.state.user.password }
               onChange={ this.handleInputChange.bind(this, 'password') }/>

        <button onClick={this.handleClick.bind(this)}>
          { this.state.selectedTab }
        </button>
      </div>
    );
  }
}

export default withRouter(AuthForm);
