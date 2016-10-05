import React from 'react';
import { withRouter } from 'react-router';

const handleClick = (router, eventId) => {
  router.push(`/events/${ eventId }`);
};

const isHost = (eventData, currentUser) => {
  return eventData.host.id === currentUser.id;
};

const EventIndexItem = ({ eventData, currentUser, router }) => {
  const location = eventData.location ?
    <span>{ eventData.location }</span> :
    <span>TBD</span>;

  const host = (isHost(eventData, currentUser)) ?
              "You" :
              eventData.host.username;

  let instructionText, instructionIcon;
  if (eventData.is_attendees_finalized && eventData.is_time_finalized) {
    if (eventData.finalized_attendees[currentUser.id]) {
      instructionText =
        <span className='event-instruction'>
          Attendees and schedule have been confirmed!
        </span>;
      instructionIcon = <i className="fa fa-check green-icon" aria-hidden="true"></i>;
    }
  } else if (eventData.is_attendees_finalized) {
    if (Object.keys(eventData.finalized_attendees).length <= 1) {
      instructionText =
        <span className='event-instruction'>
          Sorry no one was able to go
        </span>;
      instructionIcon = <i className="fa fa-times gray-icon" aria-hidden="true"></i>;
    } else {
      if (eventData.finalized_attendees[currentUser.id]) {
        instructionText =
          <span className='event-instruction'>
            Attendees confirmed. Choose time availability
          </span>;
        instructionIcon = <i className="fa fa-clock-o orange-icon" aria-hidden="true"></i>;
      } else {
        instructionText =
          <span className='event-instruction'>
            Attendees confirmed. You are not going
          </span>;
        instructionIcon = <i className="fa fa-calendar-times-o gray-icon" aria-hidden="true"></i>;
      }
    }
  } else {
    if (isHost(eventData, currentUser) && eventData.event_respondees.includes(currentUser)) {
      instructionText =
        <span className='event-instruction'>
          Waiting for people to respond
        </span>;
      instructionIcon = <i className="fa fa-hourglass-end gray-icon" aria-hidden="true"></i>;
    } else {
      instructionText =
        <span className='event-instruction'>
          Choose attendance response
        </span>;
      }
      instructionIcon = <i className="fa fa-calendar-o orange-icon" aria-hidden="true"></i>;
  }

  return (
    <article className='event-item list-item'
             onClick={ handleClick.bind(null, router, eventData.id) }>
      <div className='overlay' />
      <div className='event-item-img'
           style={ { backgroundImage: `url(${eventData.img})`} } />
      <div className='event-item-info'>
        <h3>{ eventData.title }</h3>
        <div className='date'>
          <span>{ eventData.start_date_formatted } - { eventData.end_date_formatted }</span>
        </div>
        <div>
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          { location }
        </div>
        <div className='event-item-last-row'>
          <div>
            <i className="fa fa-users" aria-hidden="true"></i>
            <span>
              { eventData.group.title }
            </span>
          </div>
          { instructionIcon }
        </div>
      </div>
    </article>
  );
};

export default withRouter(EventIndexItem);
