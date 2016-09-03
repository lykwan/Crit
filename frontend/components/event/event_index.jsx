import React from 'react';
import { withRouter } from 'react-router';

const EventIndex = ({ events }) => {
  return (
    <section className='event'>
      <div className='event-header'>
        <h2>My Events</h2>
        <div className='event-header-buttons button'>
          <i className='fa fa-plus' aria-hidden='true'></i>
          <span>  Create Event</span>
        </div>
      </div>
    </section>
  );
};

export default EventIndex;
