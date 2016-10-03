import React from 'react';
import { withRouter } from 'react-router';
import NavbarContainer from './navbar_container';

class Header extends React.Component {
  componentWillUpdate(nextProps) {
    this.redirectIfLoggedIn(nextProps.isLoggedIn);
  }

  redirectIfLoggedIn(isLoggedIn) {
    if (!isLoggedIn) {
      this.props.router.push('/');
    }
  }

  render() {
    if (this.props.isLoggedIn) {
      return (
        <header className='header'>
          <h1>Crit</h1>
          <NavbarContainer location={ this.props.location }/>
        </header>
      );
    } else {
      return (
        <h1 className='splash-header'>Crit</h1>
      );
    }
  }
}

export default withRouter(Header);
