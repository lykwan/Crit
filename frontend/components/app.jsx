import React from 'react';
import HeaderContainer from './header/header_container';

class App extends React.Component {
  getChildContext() {
    return {
      location: this.props.location
    };
  }

  render() {
    return (
      <div className='app'>
        <HeaderContainer />
        { this.props.children }
      </div>
    );
  }
}

App.childContextTypes = {
  location: React.PropTypes.object
};

export default App;
