import React from 'react';
import { withRouter } from 'react-router';
import NavbarContainer from './navbar_container';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyIsScrolled: false,
      splashIsScrolled: false
    };
  }

  componentWillUpdate(nextProps) {
    this.redirectIfLoggedIn(nextProps.isLoggedIn);
  }

  handleScroll(e) {
    let scrollTop = e.srcElement.body.scrollTop;
    if (this.props.isLoggedIn) {
      let bodyIsScrolled = (scrollTop > 0) ? true : false;
      this.setState({ bodyIsScrolled: bodyIsScrolled });
    } else {
      let splashIsScrolled = (scrollTop > 0) ? true : false;
      this.setState({ splashIsScrolled: splashIsScrolled });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  redirectIfLoggedIn(isLoggedIn) {
    if (!isLoggedIn && !window.location.hash.slice(1).startsWith('/?')) {
      this.props.router.push('/');
    }
  }

  render() {
    let bodyIsScrolledClass = this.state.bodyIsScrolled ? 'body-scrolled' : '';
    let splashIsScrolledClass = this.state.splashIsScrolled ?
                                  'splash-scrolled' : '';

    if (this.props.isLoggedIn) {
      return (
        <header className={ `header ${ bodyIsScrolledClass }` }>
          <h1>Crit</h1>
          <NavbarContainer location={ this.props.location }/>
        </header>
      );
    } else {
      return (
        <header className={ `header splash-sticky
                            ${ splashIsScrolledClass }` }>
          <h1>Crit</h1>
        </header>
      );
    }
  }
}

export default withRouter(Header);
