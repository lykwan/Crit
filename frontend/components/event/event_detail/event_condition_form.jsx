import React from 'react';

class EventConditionForm extends React.Component {
  addCondition() {

  }

  render() {
    return (
      <div className='event-condition-form'>
        <div className='button'>
          <i className='fa fa-plus' aria-hidden='true'></i>
          <span>  Add Condition</span>
        </div>

        <ul className='condition-choices-list'>
          <li>Number of People</li>
          <li>Specific Friend(s)</li>
        </ul>

        <ul className='condition-list'>
        </ul>
      </div>
    );
  }
}

export default EventConditionForm;
