import React from 'react';
import { withRouter } from 'react-router';

const _handleGroupClick = (groupId, router) => {
  router.push(`/groups/${groupId}`);
};

const GroupItem = ({ group, router }) => {
  return (
    <div className='list-item group-item'
         onClick={ _handleGroupClick.bind(null, group.id, router) }>
      <div className='group-item-img'
           style={ { backgroundImage: `url(${group.img})`} }/>
         <div className='group-item-text list-item-text'>
        <span>{ group.title }</span>
      </div>
    </div>
  );
};

export default withRouter(GroupItem);
