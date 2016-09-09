import React from 'react';
import UserItem from '../../profile/user_item';

const EventAttendeeList = ({ attendees }) => {
  const attendeeItems = Object.keys(attendees).map(id => {
    return (
      <UserItem key={ id } user={ attendees[id] } />
    );
  });

  return (
    <div>
      <h4>Finalized Attendee List</h4>
      <div className='event-attendee-list'>
        { attendeeItems }
      </div>
    </div>
  );
};

export default EventAttendeeList;
