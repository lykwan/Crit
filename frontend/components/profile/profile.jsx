import React from 'react';
import { withRouter } from 'react-router';

class Profile extends React.Component {
  render() {
    if (this.props.user) {
      let groups = [];
      if (this.props.user.groups) {
        groups = this.props.user.groups.map(group => {
          return (
            <li key={group.id}>{ group.title }</li>
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
               <div className='detail'>{ this.props.user.name }</div>
             </div>
             <div className='profile-content-row'>
               <div className='title'>Description</div>
               <div className='detail'>I really really like cats and dogs and all that jazzz you know?!?!?!?!? yaas</div>
             </div>
             <div className='profile-content-row'>
               <div className='title'>Groups</div>
               <div className='detail'>
                 <ul>
                   { groups }
                 </ul>
               </div>
             </div>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(Profile);
