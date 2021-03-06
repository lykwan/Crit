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
    if (nextProps.eventResponse !== undefined) {
      this.setState({
        responseChoice: nextProps.eventResponse.response
      });
    }
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
        let icon;
        if (responseChoices[choice] === 'definitely') {
          icon = <i key={1} className="fa fa-check" aria-hidden="true"></i>;
        } else if (responseChoices[choice] === 'definitely') {
          icon = <i key={2} className="fa fa-question" aria-hidden="true"></i>;
        } else {
          icon = <i key={3} className="fa fa-times" aria-hidden="true"></i>;
        }

        return(
          <li key={idx}
              className={ chosenClass }
              onClick={ this.handleClick.bind(this, choice)}>
            { icon }
            { responseChoices[choice] }
          </li>
        );
      });

    let onlyIfConditionForm;
    if (responseChoice === responseChoices.onlyIf) {
      onlyIfConditionForm =
        <EventConditionFormContainer
            eventResponseId={ this.props.eventResponse.id }
            eventData={ this.props.eventData }/>;
    }

    return (
      <div className='event-response-form-container'>
        <h4>Are you attending this event?</h4>
        <ul className='event-response-form'>
          { responseChoiceTags }
        </ul>
        { onlyIfConditionForm }
      </div>
    );
  }
}

export default EventResponseForm;
