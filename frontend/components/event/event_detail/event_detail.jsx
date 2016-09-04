import React from 'react';
import EventAttendeeList from './event_attendee_list';
import EventTimeForm from './event_time_form';
import EventConditionForm from './event_condition_form';

class EventDetail extends React.Component {
  render() {
    const eventData = this.props.eventData;

    if (eventData) {
      const location = eventData.location ?
        <span>{ eventData.location }</span> :
        <span>TBD</span>;

      //TODO: convert the start_time and end_time to proper format
      const startTime = (eventData.start_time && eventData.end_time) ?
        <span>{ eventData.start_time } - { eventData.end_time }</span> :
        <span>TBD</span>;

      return (
        <section className='content'>
          <h2>{ eventData.title }</h2>
          { location }
          <span>
            { eventData.group.title } - { eventData.host.username } hosted
          </span>

          <EventAttendeeList />
          <EventTimeForm />
          <EventConditionForm />

        </section>
      );
    }

    return (
      <div>loading...</div>
    );
  }
}

export default EventDetail;
