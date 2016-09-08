import React from 'react';
import { withRouter } from 'react-router';
import RouteConstants from '../../util/route_constants';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: null
    };
  }

  selectTab(section) {
    this.setState({ selectedTab: RouteConstants[section].route });
    this.props.router.push(RouteConstants[section].route);
  }

  handleClick() {
    this.props.logout();
  }

  componentWillMount() {
    this.setState({
      selectedTab: this.context.location.pathname
    });
  }

  render() {
    const navbarTabsLi = Object.keys(RouteConstants).map((section) => {
      let isActiveTabClass = '';
      if (this.state.selectedTab === RouteConstants[section].route) {
        isActiveTabClass = 'active';
      }

      return (
        <li key={ RouteConstants[section].title }
            onClick={ this.selectTab.bind(this, section) }
            className={ isActiveTabClass }>
          { RouteConstants[section].title }
        </li>
      );
    });

    return (
      <nav className='navbar'>
        <ul className='navbar-tabs'>
          { navbarTabsLi }
        </ul>

        <div className='navbar-icons'>
          <div className='navbar-icon'>
            <i className='fa fa-search' aria-hidden='true'></i>
          </div>

          <div className='navbar-icon'>
            <i className="fa fa-user-plus" aria-hidden="true"></i>
          </div>

          <div className='navbar-icon'>
            <i className="fa fa-bell" aria-hidden="true"></i>
          </div>

          <div className='navbar-icon'>
            <i className='fa fa-cog' aria-hidden='true'></i>
            <div className='navbar-dropdown'
                 onClick={ this.handleClick.bind(this) }>
              <i className="fa fa-sign-out" aria-hidden="true"></i>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.contextTypes = {
  location: React.PropTypes.object
};

export default withRouter(Navbar);
