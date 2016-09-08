import React from 'react';
import NumPeopleCondition from './condition/num_people_condition';
import SpecificFriendsCondition from './condition/specific_friends_condition';

class EventConditionForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchCondition(this.props.eventResponseId);
    this.props.fetchUsers();
  }

  componentWillUnMount() {
    // TODO: FIX THIS??
    console.log('got here');
    this.props.clearCondition();
  }

  render() {
    let minNumPeople, friendConditions = [];
    if (this.props.condition &&
      Object.getOwnPropertyNames(this.props.condition).length > 0) {
      minNumPeople = this.props.condition.min_num_people;
      friendConditions = this.props.condition.friend_conditions;
    }

    const friendConditionsDict = {};
    friendConditions.map(cond => {
      friendConditionsDict[cond.id] = cond;
    });

    return (
      <div className='event-condition-form'>
        <NumPeopleCondition minNumPeople={ minNumPeople }
                            condition={ this.props.condition }
                            eventResponseId={ this.props.eventResponseId }
                            createCondition={ this.props.createCondition }
                            updateCondition={ this.props.updateCondition }
                            />
        <SpecificFriendsCondition friendConditions={ friendConditions }
                                  condition={ this.props.condition }
                                  eventResponseId={ this.props.eventResponseId }
                                  createCondition={ this.props.createCondition }
                                  updateCondition={ this.props.updateCondition }
                                  members={ this.props.members }
                                  />
      </div>
    );
  }
}

export default EventConditionForm;
