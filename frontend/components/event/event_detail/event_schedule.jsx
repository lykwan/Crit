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
    console.log(this.props.availabilities);
    return <EventTimeForm eventData={ this.props.eventData }
                      createAvailabilities={ this.props.createAvailabilities }
                      updateAvailabilities={ this.props.updateAvailabilities }
                      availabilities={ this.props.availabilities }
                      />;
  }

  render() {
    let editLine;
    let eventId;
    let title;
    if (this.props.availabilities.length !== 0) {
      eventId = this.props.availabilities[0].event_id;
    }

    if (this.props.availabilities.length === 0) {
      editLine = (
        <div>
          <span>You have not fill out your availability yet. </span>
        </div>
      );
    }

    if (this.props.eventData.is_time_finalized) {
      title = <h4>{ `Everyone's availability ` }</h4>;
    } else {
      title = <h4>My availability</h4>;
    }

    if (!eventId || this.props.eventData.id === eventId) {
      return (
        <div className='event-time-form group'>
          { title }
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
