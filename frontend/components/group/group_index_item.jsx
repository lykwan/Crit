import React from 'react';
import { withRouter } from 'react-router';

const img = "http://cdn3-www.dogtime.com/assets/uploads/gallery/pembroke-welsh-corgi-dog-breed-pictures/prance-8.jpg";

const handleClick = (router, groupId) => {
  router.push(`/groups/${ groupId }`);
};

const GroupIndexItem = ({ group, router }) => {
  const numGroupMembers = group.admins.length + group.regular_members.length;
  return (
    <article className='list-item list-index-item group-index-item'
             onClick={ handleClick.bind(null, router, group.id) }>
      <div className='list-index-item-img' 
           style={ { backgroundImage: `url(${group.img})`} } />
      <div className='group-index-item-info'>
        <h3>{ group.title }</h3>
        <span>{ numGroupMembers } members</span>
      </div>
    </article>
  );
};

export default withRouter(GroupIndexItem);
