import React from 'react';
import { withRouter } from 'react-router';
import EventIndexItem from './event_index_item';
import EventFormContainer from './event_form_container';

const EventIndex = ({ events, currentUser,router }) => {
  if (events) {
    const eventIndexItems = events.map(event => (
      <EventIndexItem key={ event.id } eventData={ event }
                      currentUser={ currentUser }/>
    ));

    return (
      <section className='content'>
        <div className='content-header'>
          <h2>My Events</h2>
          <EventFormContainer />
        </div>
        { eventIndexItems }
      </section>
    );
  }

  return (
    <div>loading...</div>
  );
};

export default withRouter(EventIndex);
