import React from 'react';
import Select from 'react-select';

const ASYNC_DELAY = 500;


class UserSearch extends React.Component {
  getUserOptions(input, callback) {
    this.props.fetchUsers(input);
    setTimeout(() => {
      const options = this.props.users.map(user => {
        return {
          value: user.id,
          label: user.name
        };
      });
      callback(null, { options });
    }, ASYNC_DELAY);
  }

  render() {
    return (
      <Select.Async
        multi={ true }
        placeholder='Invite People'
        value={ this.props.membersInput }
        loadOptions={ this.getUserOptions.bind(this) }
        onChange={ this.props.setMembersInput }
      />
    );
  }
}

export default UserSearch;
