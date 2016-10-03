import React from 'react';
import UserItem from '../profile/user_item';
import GroupFormContainer from '../group/group_form_container';
import GroupMembershipForm from './group_membership_form';

class GroupDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  postImage(image) {
    let group = { img: image.url };
    this.props.updateGroup(this.props.group.id, group);
  }

  upload(e) {
    e.preventDefault();
    window.cloudinary.openUploadWidget(window.CLOUDINARY_OPTIONS,
      (error, results) => {
      if(!error){
        this.postImage(results[0]);
      }
    });
  }

  render() {
    if (this.props.group) {
      const admins = this.props.group.admins.map(admin => {
        return (
          <UserItem key={ admin.id } user={ admin } />
        );
      });

      const isAdmin = this.props.group.admins.some(admin => {
        return admin.id === this.props.currentUser.id;
      });

      const handleDeleteMember = (groupMembership) => {
        return (e) => {
          e.stopPropagation();
          this.props.deleteGroupMembership(this.props.group.id,
                                           groupMembership);
        };
      };

      const regularMembers = this.props.group.regular_members.map(member => {
        return (
          <UserItem key={ member.id } user={ member }
                    isDeletable={ isAdmin }
                    handleDelete={ handleDeleteMember }/>
        );
      });

      let getAdminButtons, uploadPhoto;
      if (isAdmin) {
        getAdminButtons = (
          <div className='content-header-buttons group-show-buttons'>
            <GroupMembershipForm groupId={ this.props.group.id }
               createGroupMembership={ this.props.createGroupMembership }
               errors={ this.props.errors }/>
            <div>
              <GroupFormContainer isEditForm={ true }
                                  group={ this.props.group }
                                  errors={ this.props.errors }/>
            </div>
          </div>
        );

        uploadPhoto = (
          <div className='img-upload detail-img-upload'
                onClick={ this.upload.bind(this) }>
            <div className='text'>
              <i className="fa fa-camera" aria-hidden="true"></i>
              <span>  Upload New Photo</span>
            </div>
          </div>
        );
      }

      return (
        <section className='content detail-content'>

           <div className='detail-img-frame'>
             { uploadPhoto }
             <div className='detail-img'
                style={ { backgroundImage: `url(${this.props.group.img})`} } />
          </div>

          <div className='content-body'>
            <div className='content-header'>
              <h2>{ this.props.group.title }</h2>
              { getAdminButtons }
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
      <div className='loading-container'>
        <i className="fa fa-spinner fa-spin fa-3x fa-fw loading"></i>
      </div>
    );
  }
}

export default GroupDetail;
