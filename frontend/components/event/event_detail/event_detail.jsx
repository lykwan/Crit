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

  getCloseTimePollButton(eventData) {
    let closeTimePollButton;
    if (eventData.host.id === this.props.currentUser.id &&
        eventData.is_attendees_finalized && !eventData.is_time_finalized &&
        Object.keys(eventData.finalized_attendees).length > 1) {
      closeTimePollButton = (
        <div className='content-header-buttons'>
          <div className='button'
             onClick={ this.props.closeTimePoll.bind(this, eventData.id) }>
            Close Poll
          </div>
        </div>
      );
    }
    return closeTimePollButton;
  }

  getAttendeeResponseForm(eventData) {
    let attendeeResponseForm;
    if (eventData.host.id !== this.props.currentUser.id &&
        !eventData.is_attendees_finalized) {
      attendeeResponseForm =
        <EventResponseFormContainer eventId={ eventData.id }
                                    eventData={ eventData }/>;
    }
//     <span>{ `${eventData.group.members.length} people invited`}
// </span>
    return attendeeResponseForm;
  }

  getSchedule(eventData) {
    let eventSchedule;
    if (eventData.is_attendees_finalized &&
        Object.keys(eventData.finalized_attendees).length <= 1) {
          eventSchedule =
            <h4>Sorry no one was able to go :(</h4>;
    } else if (eventData.is_attendees_finalized &&
        eventData.finalized_attendees[this.props.currentUser.id]) {
        eventSchedule =
          <EventScheduleContainer eventData={ eventData }/>;
    }
    return eventSchedule;
  }

  getAttendeeList(eventData) {
    let eventAttendeeList;
    if (eventData.is_attendees_finalized &&
        Object.keys(eventData.finalized_attendees).length > 1) {
      eventAttendeeList =
        <EventAttendeeList attendees={ eventData.finalized_attendees }/>;
    }
    return eventAttendeeList;
  }

  getPeopleRespondedText(eventData) {
    let peopleRespondedText;
    if (eventData.host.id === this.props.currentUser.id &&
        !eventData.is_attendees_finalized) {
      const numCount = eventData.event_respondees.length - 1;
      let peopleNoun = numCount !== 1 ? 'people' : 'person';
      peopleRespondedText = (
        <div className='people-responded-text'>
          <span>{ `${eventData.event_respondees.length - 1} ${peopleNoun} responded` }
          </span>
        </div>
      );
    }

    return peopleRespondedText;
  }

  render() {
    const eventData = this.props.eventData;
    const currentUser = this.props.currentUser;

    if (eventData) {
      const location = eventData.location ?
        <span>{ eventData.location }</span> :
        <span>TBD</span>;

      let hostText;
      if (eventData.host.id === currentUser.id) {
        hostText = "You are the host";
      } else {
        hostText = `${ eventData.host.username } is the host`;
      }

      return (
        <section className='content detail-content'>
          <div className='detail-img'
               style={ { backgroundImage: `url(${eventData.img})`} } />

          <div className='content-body'>

            <div className='content-header event-content-header'>
              <h2>{ eventData.title }</h2>
              { this.getPeopleRespondedText(eventData) }
              { this.getCloseResponsePollButton(eventData) }
              { this.getCloseTimePollButton(eventData) }
            </div>
            <div className='event-content-info'>
              <div className='event-detail'>
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                { location }
              </div>
              <div className='event-detail'>
                <i className="fa fa-calendar" aria-hidden="true"></i>
                <span>{ eventData.start_date_formatted } - { eventData.end_date_formatted }</span>
              </div>
              <div className='event-detail'>
                <i className="fa fa-users" aria-hidden="true"></i>
                <span>
                  { eventData.group.title } - { hostText }
                </span>
              </div>
              <p>{ eventData.description }</p>
            </div>


            { this.getAttendeeList(eventData) }
            { this.getSchedule(eventData) }
            { this.getAttendeeResponseForm(eventData) }

          </div>

        </section>
      );
    }

    return (
      <div className='loading-container'>
        <i className="fa fa-spinner fa-spin fa-3x fa-fw loading"></i>
      </div>
    );
  }
}

export default EventDetail;
