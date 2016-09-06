import React from 'react';

class EventTimeForm extends React.Component {
  handleClick(date, hour) {

  }

  dateEqual(date, otherDate) {
    return date.getFullYear() === otherDate.getFullYear() &&
      date.getMonth() === otherDate.getMonth() &&
      date.getDate() === otherDate.getDate();
  }

  formatDate(date) {
    return `${ date.getMonth() }/${ date.getDate() }`;
  }

  render() {
    let date = new Date(this.props.eventData.start_date);
    let endDate = new Date(this.props.eventData.end_date);
    date.setTime(date.getTime() + date.getTimezoneOffset()*60*1000);

    let dateCols = [];
    while (!this.dateEqual(date, endDate)) {
      let dateCol = [<div>{ this.formatDate(date) }</div>];
      for (let i = 0; i < 24; i++) {
        dateCol.push(
          <div key={ `this.formatDate(date)-i` }
               onClick={
                 this.handleClick.bind(this, this.formatDate(date), i)
               }>
          </div>);
      }
      dateCols.push(
        <div key={ this.formatDate(date) }>
          { dateCol }
        </div>
      );
      date.setDate(date.getDate() + 1);
    }


    return (
      <div className='event-time-form'>
        <h4>Choose your availability</h4>
        <div className='time-table'>
          { dateCols }
        </div>
      </div>
    );
  }
}

export default EventTimeForm;
