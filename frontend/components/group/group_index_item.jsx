import React from 'react';

const GroupIndexItem = ({ group }) => {
  const numGroupMembers = group.members.length;
  return (
    <article className='group-item'>
      <img src='http://www.pawbuzz.com/wp-content/uploads/sites/551/2014/11/corgi-puppies-21.jpg'
           alt={ group.title } />
      <h3>{ group.title }</h3>
      <span>{ numGroupMembers } members</span>
    </article>
  );
};

export default GroupIndexItem;
