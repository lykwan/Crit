import React from 'react';
import Select from 'react-select';

class SpecificFriendsCondition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: '',
      friendConditions: [],
      friendsInput: []
    };
  }

  addFriends(val) {
  }

  render() {
    // if (this.props.friendConditions) {
    //   const friendOptions = this.props.friendConditions.
    // }

        // <Select
        //     value={ this.state.friendsInput }
        //     options={ this.props. }
        //     onChange={ this.addFriends.bind(this) }
        // />
    return (
      <div>
        Friends going:
      </div>
    );
  }
}

export default SpecificFriendsCondition;
