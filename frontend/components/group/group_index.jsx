import React from 'react';
import GroupIndexItem from './group_index_item';

const GroupIndex = ({ groups }) => {
  if (groups) {
    const groupIndexItems = groups.map(group => (
      <GroupIndexItem key={ group.id } group={ group } />
    ));

    return (
      <section className='group'>
        <div className='group-header'>
          <h2>My Groups</h2>
          <div className='group-header-add-group'>
            <i className='fa fa-plus' aria-hidden='true'></i>
            <span>Create Group</span>
          </div>
        </div>
        { groupIndexItems }
      </section>
    );
  }

  return (
    <div>
      loading...
    </div>
  );
};

export default GroupIndex;
