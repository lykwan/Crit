import React from 'react';


class NumPeopleCondition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: '',
      minNumPeople: '',
      isSaved: false
    };
  }


  setCondition() {
    const numPeople = this.state.minNumPeople;
    const condition = {
      min_num_people: numPeople
    };

    const isPositiveInteger = (n) => {
      return String(parseInt(n)) === n && n >= 0;
    };

    if (isPositiveInteger(numPeople)) {
      this.setState({ errors: null });
      if (this.props.condition.event_response_id
          === this.props.eventResponseId) {
        this.props.updateCondition(this.props.eventResponseId, condition);
        this.setState({ isSaved: true });
      } else {
        this.props.createCondition(this.props.eventResponseId, condition);
        this.setState({ isSaved: true });
      }
    } else {
      this.setState({
                      errors: 'Must be a positive number',
                      minNumPeople: ''
                    });
    }
  }

  _handleChange(e) {
    this.setState({
      minNumPeople: e.currentTarget.value,
      isSaved: false
    });
  }

  render() {
    let errors;
    if (this.state.errors) {
      errors = <div>{ this.state.errors }</div>;
    }

    let savedMsg;
    if (this.state.isSaved) {
      savedMsg = <span className='saved-msg'>Saved</span>;
    }

    return (
      <div>
        Minimum number of people:
        <div>{ this.props.minNumPeople }</div>
        <input type='text'
               className='form-input'
               value={ this.state.minNumPeople }
               onChange={ this._handleChange.bind(this) }
               onBlur={
                 this.setCondition.bind(this)
               }/>
       { savedMsg }
       { errors }
      </div>
    );
  }
}

export default NumPeopleCondition;
