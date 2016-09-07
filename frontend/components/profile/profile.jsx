import React from 'react';
import { withRouter } from 'react-router';
import GroupItem from '../group/group_item';

class Profile extends React.Component {
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
        <div>
          <div className='profile-img-frame'>
            <div className='profile-img'
                 style={ { backgroundImage: `url(${this.props.user.img})`} }/>
          </div>
          <div>
             <div className='profile-content-row'>
               <div className='title'>Name</div>
               <div className='detail profile-name'>{ this.props.user.name }</div>
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
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default withRouter(Profile);
