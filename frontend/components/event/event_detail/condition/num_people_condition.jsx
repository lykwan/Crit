import React from 'react';


class NumPeopleCondition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: '',
      minNumPeople: ''
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

    if (isPositiveInteger(numPeople) || (!numPeople)) {
      this.setState({ errors: null });
      if (this.props.minNumPeople) {
        this.props.updateCondition(this.props.eventResponseId, condition);
      } else {
        this.props.createCondition(this.props.eventResponseId, condition);
      }
    } else {
      this.setState({
                      errors: 'Must be a positive number', 
                      minNumPeople: ''
                    });
    }
  }

  _handleChange(e) {
    this.setState({ minNumPeople: e.currentTarget.value });
  }

  render() {
    let errors;
    if (this.state.errors) {
      errors = <div>{ this.state.errors }</div>;
    }

    return (
      <div>
        Minimum number of people:
        <div>{ this.props.minNumPeople }</div>
        <input type='text'
               value={ this.state.minNumPeople }
               onChange={ this._handleChange.bind(this) }
               onBlur={
                 this.setCondition.bind(this)
               }/>
       { errors }
      </div>
    );
  }
}

export default NumPeopleCondition;