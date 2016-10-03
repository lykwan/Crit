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
    <div className='loading-container'>
      <i className="fa fa-spinner fa-spin fa-3x fa-fw loading"></i>
    </div>
  );
};

export default GroupIndex;
