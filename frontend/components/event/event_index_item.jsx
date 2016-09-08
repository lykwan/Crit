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

  let instructionText;
  if (eventData.is_attendees_finalized && eventData.is_time_finalized) {
    instructionText =
      <span className='event-instruction'>
        Event finalized
      </span>;
  } else if (eventData.is_attendees_finalized) {
    if (Object.keys(eventData.finalized_attendees).length <= 1) {
      instructionText =
        <span className='event-instruction'>
          No available attendees
        </span>;
    } else {
      instructionText =
        <span className='event-instruction'>
          Attendees finalized. Choose time availability
        </span>;
    }
  } else {
    if (isHost(eventData, currentUser)) {
    instructionText =
      <span className='event-instruction'>
        Waiting for people to respond
      </span>;
    } else {
    instructionText =
      <span className='event-instruction'>
        Choose attendance response
      </span>;
    }
  }

  return (
    <article className='list-item list-index-item event-item'
             onClick={ handleClick.bind(null, router, eventData.id) }>
      <div className='list-index-item-img'
           style={ { backgroundImage: `url(${eventData.img})`} } />
      <div className='event-item-info'>
        <h3>{ eventData.title }</h3>
        { location }
        <span>{ eventData.start_date_formatted } - { eventData.end_date_formatted }</span>
        <div className='event-item-last-row'>
          <span>
            { eventData.group.title } - { host } hosted
          </span>
          <span className='event-instruction'>
            { instructionText }
          </span>
        </div>
      </div>
    </article>
  );
};

export default withRouter(EventIndexItem);
