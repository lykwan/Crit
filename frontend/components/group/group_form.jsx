import React from 'react';
import { withRouter } from 'react-router';

const formFields = {
  TITLE: 'title',
  DESCRIPTION: 'description',
  FRIENDS_SEARCH: 'friends_search',
};

class GroupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      group: {
        title: '',
        description: '',
        friends_search: '',
        group_memberships_attributes: []
      },
      toggleDropDown: false
    };
  }

  _handleSubmit(e) {
    e.preventDefault();
    if (!this.state.toggleDropDown) {
      this.props.createGroup(this.state.group);
    }
  }

  _handleInputChange(field, e) {
    const group = Object.assign({},
                                this.state.group,
                                { [field]: e.currentTarget.value }
                               );
    this.setState({ group: group });
  }

  _handleKeyPress(e) {
    if (e.key === '~') {
      const membership = { member_user_id: e.currentTarget.value };
      const updatedMembershipsAttr =
        [...this.state.group.group_memberships_attributes, membership];

      const group =
        Object.assign({},
                      this.state.group,
                      { group_memberships_attributes:updatedMembershipsAttr,
                        friends_search: ''
                      }
                     );
      this.setState({ group: group });
    }
  }

  componentWillUpdate(nextProps) {
    this._redirectIfSuccessSubmit(nextProps.successSubmitGroupId);
  }

  _redirectIfSuccessSubmit(groupId) {
    if (groupId) {
      this.props.router.push(`/groups/${groupId}`);
    }
  }

  render() {
    const groupMemberships =
      this.state.group.group_memberships_attributes.map(m => {
        return (
          <li key={ m.member_user_id }>{ m.member_user_id }</li>
        );
      });

    return (
      <form className='group-form'
            onSubmit={ this._handleSubmit.bind(this) }>

        <label>Group Name
          <input type='text'
                 value={ this.state.group.title }
                 onChange={
                   this._handleInputChange.bind(this, formFields.TITLE)
                 } />
        </label>

        <label>Description
          <textarea cols='30' rows='10'
                    value={ this.state.group.description }
                    onChange={
                      this._handleInputChange.bind(this, formFields.DESCRIPTION)
                    } />
        </label>

        <div className='group-form-invite'>
          <label>Invite People
            <div>
              <i className="fa fa-search" aria-hidden="true"></i>
              <input type='text'
                     value={ this.state.group.friends_search }
                     onChange={
                       this._handleInputChange.bind(this,
                                                    formFields.FRIENDS_SEARCH)
                     }
                     onKeyPress={ this._handleKeyPress.bind(this) } />
            </div>
          </label>
          <div className='group-form-invite-friends'>
            { groupMemberships }
          </div>
        </div>

        <button className='button'>Submit Form</button>
      </form>
    );
  }
}

export default withRouter(GroupForm);
