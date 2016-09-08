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
        <div className='content-header-buttons'>
          <div className='button'
             onClick={ this.props.closeResponsePoll.bind(this, eventData.id) }>
            Close Poll
          </div>
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
        <EventResponseFormContainer eventId={ eventData.id }
                                    eventData={ eventData }/>;
    } else if (!eventData.is_attendees_finalized) {
      attendeeResponseForm = (
        <div>
          <span>
            Currently waiting for group members to respond to event.
          </span>
          <br/>
          <br/>
          <span>Close the poll when you are no longer accepting responses.
          </span>
        </div>
      );
    }

    return attendeeResponseForm;
  }

  getSchedule(eventData) {
    let eventSchedule;
    if (eventData.is_attendees_finalized &&
        Object.keys(eventData.finalized_attendees).length <= 1) {
          eventSchedule =
            <h4>No available attendees</h4>;
    } else if (eventData.is_attendees_finalized &&
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
    }
    return eventAttendeeList;
  }

  render() {
    const eventData = this.props.eventData;
    const currentUser = this.props.currentUser;

    if (eventData) {
      const location = eventData.location ?
        <span>{ eventData.location }</span> :
        <span>TBD</span>;

      return (
        <section className='content detail-content'>
          <div className='detail-img'
               style={ { backgroundImage: `url(${eventData.img})`} } />

          <div className='content-body'>

            <div className='content-header event-content-header'>
              <h2>{ eventData.title }</h2>
              { this.getCloseResponsePollButton(eventData) }
              { location }
              <span>{ eventData.start_time } - { eventData.end_time }</span>
              <span>
                { eventData.group.title } - { eventData.host.username } hosted
              </span>
              <p>{ eventData.description }</p>
            </div>

            <div className='content-divider'>
              _________________________________________________________________________________
            </div>

            { this.getAttendeeList(eventData) }
            { this.getSchedule(eventData) }
            { this.getAttendeeResponseForm(eventData) }

          </div>

        </section>
      );
    }

    return (
      <div>loading...</div>
    );
  }
}

export default EventDetail;
