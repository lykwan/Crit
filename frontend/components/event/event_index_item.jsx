import React from 'react';
import { withRouter } from 'react-router';

const handleClick = (router, eventId) => {
  router.push(`/events/${ eventId }`);
};

const EventIndexItem = ({ eventData, router }) => {
  const location = eventData.location ?
    <span>{ eventData.location }</span> :
    <span>TBD</span>;


  return (
    <article className='event-item'
             onClick={ handleClick.bind(null, router, eventData.id) }>
      <div className='event-item-img' />
      <div className='event-item-info'>
        <h3>{ eventData.title }</h3>
        <span>TBD</span>
        { location }
        <span>
          { eventData.group.title } - { eventData.host.username } hosted
        </span>
      </div>
    </article>
  );
};

export default withRouter(EventIndexItem);
