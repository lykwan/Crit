import React from 'react';
import EventAttendeeList from './event_attendee_list';
import EventTimeForm from './event_time_form';
import EventResponseFormContainer from './event_response_form_container';

class EventDetail extends React.Component {
  render() {
    const eventData = this.props.eventData;
    const currentUser = this.props.currentUser;

    if (eventData) {
      const location = eventData.location ?
        <span>{ eventData.location }</span> :
        <span>TBD</span>;

      //TODO: convert the start_time and end_time to proper format
      const startTime = (eventData.start_time && eventData.end_time) ?
        <span>{ eventData.start_time } - { eventData.end_time }</span> :
        <span>TBD</span>;

      let closePollButton, attendeeResponseForm;
      if (eventData.host.id === currentUser.id) {
        closePollButton = (
          <div className='button'>Close Poll</div>
        );
      } else {
        attendeeResponseForm =
          <EventResponseFormContainer eventId={ eventData.id }/>;
      }


      return (
        <section className='content'>
          <h2>{ eventData.title }</h2>
          { closePollButton }
          { location }
          <span>
            { eventData.group.title } - { eventData.host.username } hosted
          </span>

          <EventAttendeeList />
          <EventTimeForm />
          { attendeeResponseForm }

        </section>
      );
    }

    return (
      <div>loading...</div>
    );
  }
}

export default EventDetail;
