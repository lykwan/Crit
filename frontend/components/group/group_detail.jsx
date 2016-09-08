import React from 'react';
import UserItem from '../profile/user_item';
import GroupFormContainer from '../group/group_form_container';
import GroupMembershipForm from './group_membership_form';

class GroupDetail extends React.Component {
  render() {
    if (this.props.group) {
      const admins = this.props.group.admins.map(admin => {
        return (
          <UserItem key={ admin.id } user={ admin }/>
        );
      });

      const regularMembers = this.props.group.regular_members.map(member => {
        return (
          <UserItem key={ member.id } user={ member } />
        );
      });

      return (
        <section className='content detail-content'>
          <div className='detail-img'
               style={ { backgroundImage: `url(${this.props.group.img})`} } />
          <div className='content-body'>
            <div className='content-header'>
              <h2>{ this.props.group.title }</h2>
              <div className='content-header-buttons group-show-buttons'>
                <GroupMembershipForm groupId={ this.props.group.id }
                   createGroupMembership={ this.props.createGroupMembership }
                   errors={ this.props.errors }/>
                <div>
                  <GroupFormContainer isEditForm={ true }
                                      group={ this.props.group }/>
                </div>
              </div>
            </div>

            <div className='group-description'>
              <p>{ this.props.group.description }</p>
            </div>

            <div className='user-list-container'>
              <h4>Admins</h4>
              <div className='user-list'>
                { admins }
              </div>
            </div>
            <div className='user-list-container'>
              <h4>Members</h4>
              <div className='user-list'>
                { regularMembers }
              </div>
            </div>
          </div>
        </section>
      );
    }

    return (
      <div>loading... </div>
    );
  }
}

export default GroupDetail;
