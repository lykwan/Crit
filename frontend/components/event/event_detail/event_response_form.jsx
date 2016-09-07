import React from 'react';
import EventConditionFormContainer from './event_condition_form_container';

const responseChoices = {
  definitelyGoing: 'definitely',
  onlyIf: 'only if',
  definitelyNotGoing: 'definitely not',
};

class EventResponseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      responseChoice: ''
    };
  }

  componentWillMount() {
    this.props.fetchEventResponse(this.props.eventId);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      responseChoice: nextProps.eventResponse.response
    });
  }

  handleClick(choice) {
    const eventResponse = { response: responseChoices[choice] };
    if (this.props.eventResponse &&
      Object.getOwnPropertyNames(this.props.eventResponse).length !== 0) {
      if (this.props.eventResponse.response === responseChoices[choice]) {
        this.props.deleteEventResponse(this.props.eventId);
      } else {
        this.props.updateEventResponse(this.props.eventId, eventResponse);
      }
    } else {
      this.props.createEventResponse(this.props.eventId, eventResponse);
    }
  }

  render() {
    let responseChoice = '';
    if (this.props.eventResponse) {
      responseChoice = this.state.responseChoice;
    }

    const responseChoiceTags =
      Object.keys(responseChoices).map((choice, idx) => {
        const chosenClass = responseChoice === responseChoices[choice] ?
                            'response' :
                            '';
        return(
          <li key={idx}
              className={ chosenClass }
              onClick={ this.handleClick.bind(this, choice)}>
            { responseChoices[choice] }
          </li>
        );
      });

    let onlyIfConditionForm;
    if (responseChoice === responseChoices.onlyIf) {
      onlyIfConditionForm =
        <EventConditionFormContainer
            eventResponseId={ this.props.eventResponse.id }/>;
    }

    return (
      <div>
        <h5>Are you attending this event?</h5>
        <ul className='event-response-form'>
          { responseChoiceTags }
        </ul>
        { onlyIfConditionForm }
      </div>
    );
  }
}

export default EventResponseForm;
