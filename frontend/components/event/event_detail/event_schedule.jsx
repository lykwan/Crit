import React from 'react';
import { fill } from 'lodash';
import EventTimeForm from './event_time_form';

class EventSchedule extends React.Component {
  constructor(props) {
    super(props);
    let timeForm = {};
    this.state = {
      openEditForm: false
    };
  }

  componentDidMount() {
    this.props.fetchAvailabilities(this.props.eventData.id);
  }

  getEventTimeForm() {
    console.log('getting event time form');
    return <EventTimeForm eventData={ this.props.eventData }
                      createAvailabilities={ this.props.createAvailabilities }
                      updateAvailabilities={ this.props.updateAvailabilities }
                      availabilities={ this.props.availabilities }
                      />;
  }

  render() {
    let editLine;
    let eventId;
    if (this.props.availabilities.length !== 0) {
      eventId = this.props.availabilities[0].event_id;
    }

    console.log(this.props.availabilities);

    if (this.props.availabilities.length === 0) {
      editLine = (
        <div>
          <span>You have not fill out your availability yet. </span>
        </div>
      );
    }

    console.log(eventId);
    console.log(this.props.eventData);

    if (!eventId || this.props.eventData.id === eventId) {
      return (
        <div className='event-time-form group'>
          <h4>My availability</h4>
          { editLine }
          { this.getEventTimeForm() }
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default EventSchedule;
