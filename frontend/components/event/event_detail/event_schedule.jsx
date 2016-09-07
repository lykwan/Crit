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
                        availabilities={ this.props.availabilities }
                        />;
  }

  render() {
    let editButton;
    let eventId;
    if (this.props.availabilities.length !== 0) {
      eventId = this.props.availabilities[0].event_id;
    }

    if (!this.state.openEditForm &&
        this.props.availabilities.length === 0) {
      editButton = (
        <div>
          <span>You have not fill out your availability yet. </span>
          <div className='button' onClick={ this.openEditForm.bind(this) }>
            <i className="fa fa-pencil" aria-hidden="true"></i>
            <span>  Fill Schedule</span>
          </div>
        </div>
      );
    } else {
      editButton = <div></div>;
    }


    if (!eventId || this.props.eventData.id === eventId) {
      return (
        <div className='event-time-form'>
          <h4>My availability</h4>
          { editButton }
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
