import React from 'react';
import { withRouter } from 'react-router';
import GroupIndexItem from './group_index_item';

const _handleAddGroupClick = (router) => {
  router.push('/groups/new');
};

const GroupIndex = ({ groups, router }) => {
  if (groups) {
    const groupIndexItems = groups.map(group => (
      <GroupIndexItem key={ group.id } group={ group } />
    ));

    return (
      <section className='content'>
        <div className='content-header'>
          <h2>My Groups</h2>
          <div className='content-header-buttons button'
               onClick={ _handleAddGroupClick.bind(null, router) }>
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
