import React from 'react';
import HeaderContainer from './header/header_container';

class App extends React.Component {
  getChildContext() {
    return {
      location: this.props.location
    };
  }

  render() {
    console.log(this.context.location);

    return (
      <div className='app'>
        <HeaderContainer location={ location } />
        { this.props.children }
      </div>
    );
  }
}

App.childContextTypes = {
  location: React.PropTypes.object
};

export default App;
