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
        <EventFormContainer />
        { eventIndexItems }
      </section>
    );
  }

  return (
    <div className='loading-container'>
      <i className="fa fa-spinner fa-spin fa-3x fa-fw loading"></i>
    </div>
  );
};

export default withRouter(EventIndex);
