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

  openEditForm() {
    this.setState({ openEditForm: true });
  }

  getEventTimeForm() {
    return <EventTimeForm eventData={ this.props.eventData }
                        isEditForm={ this.state.openEditForm }
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

    if (this.props.availabilities.length === 0) {
      editLine = (
        <div>
          <span>You have not fill out your availability yet. </span>
        </div>
      );
    }


    console.log('rendering schedule')
    console.log(eventId, this.props.eventData.id);
    if (!eventId || this.props.eventData.id === eventId) {
      console.log('why isnt it getting here');
      return (
        <div className='event-time-form'>
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
