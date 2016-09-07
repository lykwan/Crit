import React from 'react';
import { withRouter } from 'react-router';

const _handleUserClick = (userId, router) => {
  router.push(`/users/${userId}`);
};

const UserItem = ({ user, router }) => {
  return (
    <div className='list-item user-item'
         onClick={ _handleUserClick.bind(null, user.id, router) }>
      <div className='user-item-img'
           style={ { backgroundImage: `url(${user.img})`} } />
         <div className='user-item-text list-item-text'>
        <span>{ user.name }</span>
      </div>
    </div>
  );
};

export default withRouter(UserItem);
