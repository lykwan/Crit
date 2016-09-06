import React from 'react';

const EventAttendeeList = ({ attendees }) => {
  const attendeeLis = Object.keys(attendees).map(id => {
    return (
      <li key={ id }>{ attendees[id].username }</li>
    );
  });

  return (
    <div>
      <h4>Finalized Attendee List</h4>
      <ul>
        { attendeeLis }
      </ul>
    </div>
  );
};

export default EventAttendeeList;
