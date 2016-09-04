import React from 'react';

class EventDetail extends React.Component {
  render() {
    const eventData = this.props.eventData;

    if (eventData) {
      const location = eventData.location ?
        <span>{ eventData.location }</span> :
        <span>TBD</span>;
          
      return (
        <section className='content'>
          <h2>{ eventData.title }</h2>
          { location }
          <span>
            { eventData.group.title } - { eventData.host.username } hosted
          </span>
        </section>
      );
    }

    return (
      <div>loading...</div>
    );
  }
}

export default EventDetail;
