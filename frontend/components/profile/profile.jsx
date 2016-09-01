import React from 'react';
import { withRouter } from 'react-router';


class Profile extends React.Component {
  render() {
    const user = this.props.user ? this.props.user.username : '';

    return (
      <div>
        { user }
      </div>
    );
  }
}

export default withRouter(Profile);
