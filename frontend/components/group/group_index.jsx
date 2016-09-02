import React from 'react';
import { withRouter } from 'react-router';
import GroupIndexItem from './group_index_item';

const handleAddGroupClick = (router) => {
  router.push('/groups/new');
};

const GroupIndex = ({ groups, router }) => {
  if (groups) {
    const groupIndexItems = groups.map(group => (
      <GroupIndexItem key={ group.id } group={ group } />
    ));

    return (
      <section className='group'>
        <div className='group-header'>
          <h2>My Groups</h2>
          <div className='group-header-buttons button'
               onClick={ handleAddGroupClick.bind(null, router) }>
            <i className='fa fa-plus' aria-hidden='true'></i>
            <span>  Create Group</span>
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

export default withRouter(GroupIndex);
