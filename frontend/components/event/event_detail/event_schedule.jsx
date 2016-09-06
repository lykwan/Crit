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

  openEditForm() {
    this.setState({ openEditForm: true });
  }

  getEventTimeForm() {
    return <EventTimeForm eventData={ this.props.eventData }
                          isEditForm={ this.state.openEditForm }
                          createAvailability={ this.props.createAvailability }
                          updateAvailability={ this.props.updateAvailability }
                          />;
  }

  render() {
    let editButton;
    if (!this.state.openEditForm) {
      editButton = (
        <div onClick={ this.openEditForm.bind(this) }>
          <i className="fa fa-pencil" aria-hidden="true"></i>
        </div>
      );
    }


    return (
      <div className='event-time-form'>
        <h4>Choose your availability</h4>
        { editButton }
        { this.getEventTimeForm() }
      </div>
    );
  }
}

export default EventSchedule;
