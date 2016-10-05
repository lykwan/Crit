import React from 'react';
import { withRouter } from 'react-router';
import GroupItem from '../group/group_item';
import UploadButton from '../upload_button';

class Profile extends React.Component {
  postImage(image) {
    let user = { img: image.url };
    this.props.updateUser(this.props.user.id, user);
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
    if (this.props.user) {
      let groups = [];
      if (this.props.user.groups) {
        groups = this.props.user.groups.map(group => {
          return (
            <GroupItem key={group.id} group={ group }
                       />
          );
        });
      }

      return (
        <section className='content'>
          <div className='profile-img-frame'>
            <div className='img-upload profile-img-upload'>
              <div className='text'>
                <i className="fa fa-camera" aria-hidden="true"></i>
                <span>  Upload New Photo</span>
              </div>
            </div>
            <div className='profile-img' onClick={ this.upload.bind(this )}
                 style={ { backgroundImage: `url(${this.props.user.img})`} } />
          </div>
          <div>
             <div className='profile-content-row'>
               <div className='title'>Name</div>
               <div className='detail profile-name'>
                 { this.props.user.name }
               </div>
             </div>
             <div className='profile-content-row'>
               <div className='title'>Description</div>
               <div className='detail'>{ this.props.user.description }</div>
             </div>
             <div className='profile-content-row'>
               <div className='title'>Groups</div>
               <div className='detail profile-group-list'>
                 <div>
                   { groups }
                 </div>
               </div>
             </div>
          </div>
        </section>
      );
    } else {
      return <div></div>;
    }
  }
}

export default withRouter(Profile);
