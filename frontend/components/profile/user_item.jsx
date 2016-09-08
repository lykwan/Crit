import React from 'react';
import { withRouter } from 'react-router';

const _handleUserClick = (userId, router) => {
  router.push(`/users/${userId}`);
};
const UserItem = ({ user, isDeletable, handleDelete, router }) => {
  let trashIcon;
  if (isDeletable) {
    trashIcon = (
      <div className='list-item-trash'
           onClick={ handleDelete({ member_user_id: user.id }) }>
        <i className="fa fa-trash" aria-hidden="true"></i>
      </div>
    );
  } else {
    trashIcon = <div className='list-item-trash'></div>;
  }

  return (
    <div className='list-item user-item'>
      <div className='user-item-content'
           onClick={ _handleUserClick.bind(null, user.id, router) }>
        <div className='user-item-img'
             style={ { backgroundImage: `url(${user.img})`} } />
        <div className='user-item-text list-item-text'>
          <span>{ user.name }</span>
        </div>
      </div>
      { trashIcon }
    </div>
  );
};

export default withRouter(UserItem);
