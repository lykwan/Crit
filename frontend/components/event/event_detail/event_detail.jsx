import React from 'react';
import EventAttendeeList from './event_attendee_list';
import EventScheduleContainer from './event_schedule_container';
import EventResponseFormContainer from './event_response_form_container';

class EventDetail extends React.Component {
  getCloseResponsePollButton(eventData) {
    let closeResponsePollButton;
    if (eventData.host.id === this.props.currentUser.id &&
        !eventData.is_attendees_finalized) {
      closeResponsePollButton = (
        <div className='button'
             onClick={ this.props.closeResponsePoll.bind(this, eventData.id) }>
          Close Poll
        </div>
      );
    }
    return closeResponsePollButton;
  }

  getAttendeeResponseForm(eventData) {
    let attendeeResponseForm;
    if (eventData.host.id !== this.props.currentUser.id &&
        !eventData.is_attendees_finalized) {
      attendeeResponseForm =
        <EventResponseFormContainer eventId={ eventData.id }/>;
    } else if (!eventData.is_attendees_finalized) {
      attendeeResponseForm = (
        <span>
          Currently waiting for group members to respond to event. Close the
          poll when you are no longer accepting responses.
        </span>
      );
    }

    return attendeeResponseForm;
  }

  getSchedule(eventData) {
    let eventSchedule;
    if (eventData.is_attendees_finalized &&
        eventData.finalized_attendees[this.props.currentUser.id]) {
        eventSchedule =
          <EventScheduleContainer eventData={ eventData }/>;
    }
    return eventSchedule;
  }

  getAttendeeList(eventData) {
    let eventAttendeeList;
    if (eventData.is_attendees_finalized) {
      eventAttendeeList =
        <EventAttendeeList attendees={ eventData.finalized_attendees }/>;
    } else {
      return eventAttendeeList;
    }
  }

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

      return (
        <section className='content detail-content'>
          <h2>{ eventData.title }</h2>
          { this.getCloseResponsePollButton(eventData) }
          { location }
          <span>
            { eventData.group.title } - { eventData.host.username } hosted
          </span>

          { this.getAttendeeList(eventData) }
          { this.getSchedule(eventData) }
          { this.getAttendeeResponseForm(eventData) }

        </section>
      );
    }

    return (
      <div>loading...</div>
    );
  }
}

export default EventDetail;
