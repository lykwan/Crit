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
    let selectedTab;
    const currentLocation = window.location.hash.slice(1);
    Object.keys(RouteConstants).forEach(section => {
      if (currentLocation.startsWith(RouteConstants[section].route)) {
        selectedTab = RouteConstants[section].route;
      }
    });

    // if this is at home page
    if (currentLocation.startsWith('/?')) {
      selectedTab = RouteConstants['EVENTS'].route;
    }

    this.setState({
      selectedTab: selectedTab
    });
  }

  render() {
    const navbarTabsLi = Object.keys(RouteConstants).map((section) => {
      let isActiveTabClass = 'inactive';
      if (this.state.selectedTab === RouteConstants[section].route) {
        isActiveTabClass = 'active';
      }


//       <div className='navbar-icon'>
//   <i className='fa fa-search' aria-hidden='true'></i>
// </div>
//
// <div className='navbar-icon'>
//   <i className="fa fa-user-plus" aria-hidden="true"></i>
// </div>
//
// <div className='navbar-icon'>
//   <i className="fa fa-bell" aria-hidden="true"></i>
// </div>
//


      return (
        <li key={ RouteConstants[section].title }
            onClick={ this.selectTab.bind(this, section) }
            className={ isActiveTabClass }>
          <div className='tab'>
            { RouteConstants[section].title }
          </div>
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
