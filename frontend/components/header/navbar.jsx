import React from 'react';
import { withRouter } from 'react-router';
import RouteConstants from '../../util/route_constants';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: RouteConstants.EVENTS
    };
  }

  selectTab(route) {
    this.setState({ selectedTab: RouteConstants[route] });
    this.props.router.push(RouteConstants[route].route);
  }

  handleClick() {
    this.props.logout();
  }

  render() {
    const navbarTabsLi = Object.keys(RouteConstants).map((route) => {
      let isActiveTabClass = '';
      if (this.state.selectedTab === RouteConstants[route]) {
        isActiveTabClass = 'active';
      }

      return (
        <li key={ RouteConstants[route].title }
            onClick={ this.selectTab.bind(this, route) }
            className={ isActiveTabClass }>
          { RouteConstants[route].title }
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
            <ul className='navbar-dropdown'>
              <li onClick={this.handleClick.bind(this)}>
                <i className="fa fa-sign-out" aria-hidden="true"></i>
                <span>Logout</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
