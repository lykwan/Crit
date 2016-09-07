import React from 'react';
import { withRouter } from 'react-router';

const handleClick = (router, eventId) => {
  router.push(`/events/${ eventId }`);
};

const EventIndexItem = ({ eventData, currentUser, router }) => {
  const location = eventData.location ?
    <span>{ eventData.location }</span> :
    <span>TBD</span>;

  const host = (eventData.host.id === currentUser.id) ?
              "You" :
              eventData.host.username;


  return (
    <article className='list-item list-index-item event-item'
             onClick={ handleClick.bind(null, router, eventData.id) }>
      <div className='list-index-item-img'
           style={ { backgroundImage: `url(${eventData.img})`} } />
      <div className='event-item-info'>
        <h3>{ eventData.title }</h3>
        { location }
        <span>{ eventData.start_date_formatted } - { eventData.end_date_formatted }</span>
        <span>
          { eventData.group.title } - { host } hosted
        </span>
      </div>
    </article>
  );
};

export default withRouter(EventIndexItem);
