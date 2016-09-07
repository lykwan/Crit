import React from 'react';
import GroupIndexItem from './group_index_item';
import GroupFormContainer from './group_form_container';

const GroupIndex = ({ groups, router }) => {
  if (groups) {
    const groupIndexItems = groups.map(group => (
      <GroupIndexItem key={ group.id } group={ group } />
    ));

    return (
      <section className='content'>
        <div className='content-header'>
          <h2>My Groups</h2>
          <GroupFormContainer isEditForm={ false }/>
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
