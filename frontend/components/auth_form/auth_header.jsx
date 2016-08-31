import React from 'react';

class AuthHeader extends React.Component {
  render() {
    const tabs = Object.keys(this.props.tabs).map((title) => {
      const isSelectedTab = this.props.selectedTab === title ? 'selected' : '';

      return <li key={title}
                 className={ isSelectedTab }
                 onClick={ this.props.onTabChosen.bind(null, title) }>
              { title }
            </li>;
    });

    return (
      <ul>
        { tabs }
      </ul>
    );
  }

}

export default AuthHeader;
