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
    let navbar;
    if (this.props.isLoggedIn) {
      navbar = (<NavbarContainer />);
    }

    return (
      <header className='header'>
        <h1>Crit</h1>
        { navbar }
      </header>
    );
  }
}

export default withRouter(Header);
