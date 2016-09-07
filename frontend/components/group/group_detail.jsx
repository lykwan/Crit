import React from 'react';
import UserItem from '../profile/user_item';
import GroupFormContainer from '../group/group_form_container';

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
          <div className='group-detail-img'
               style={ { backgroundImage: `url(${this.props.group.img})`} } />
          <div className='content-body'>
            <div className='content-header'>
              <h2>{ this.props.group.title }</h2>
              <div className='content-header-buttons group-show-buttons'>
                <div className='button'>
                  <i className='fa fa-plus' aria-hidden='true'></i>
                  <span>  Member</span>
                </div>

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
              <h4>ADMINS</h4>
              <div className='user-list'>
                { admins }
              </div>
            </div>
            <div className='user-list-container'>
              <h4>MEMBERS</h4>
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
