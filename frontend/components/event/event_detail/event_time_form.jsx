import React from 'react';
import { fill } from 'lodash';

class EventTimeForm extends React.Component {
  constructor(props) {
    super(props);
    this.timeForm = {};
    this.allDates = this.getAllDates();

    this.allDates.forEach(date => {
      this.timeForm[date] = fill(Array(24), 0);
    });
  }

  componentWillReceiveProps(nextProps) {
    let updatedTimeForm = {};
    nextProps.availabilities.forEach(avail => {
      let dateObj = new Date(avail.date);
      dateObj.setTime(dateObj.getTime() + dateObj.getTimezoneOffset()*60*1000);
      updatedTimeForm[this.formatDate(dateObj)] =
        this.bitMapToArr(avail.time_slot_bitmap);
    });

    const timeForm = Object.assign({},
                                   this.timeForm,
                                   updatedTimeForm
                                   );
    this.timeForm = timeForm;
  }

  arrToBitMap(arr) {
    var bitMap = 0;
    var shift = arr.length - 1;
    for (var i = 0; i < arr.length; i++) {
      bitMap |= arr[i] << shift;
      shift -= 1;
    }
    return bitMap;
  }

  bitMapToArr(bitMap) {
    var bitArr = [];
    while (bitMap > 0) {
      bitArr.unshift(bitMap % 2);
      bitMap >>= 1;
    }

    while (bitArr.length < 24) {
      bitArr.unshift(0);
    }
    return bitArr;
  }

  _handleClick(date, hour) {
    const toggleValue = this.timeForm[date][hour] ? 0 : 1;
    const dateCol = [...this.timeForm[date]];
    dateCol[hour] = toggleValue;
    const timeForm = Object.assign({},
                                   this.timeForm,
                                   { [date]: dateCol }
                                   );
    this.timeForm = timeForm;

    const availabilities =
      Object.keys(this.timeForm).map(formattedDate => {
        let [year, month, day] = formattedDate.split('/');
        let dateObj = new Date(year, month, day);
        return {
          date: dateObj.toISOString(),
          time_slot_bitmap: this.arrToBitMap(this.timeForm[formattedDate])
        };
      });
    if (this.props.availabilities &&
      Object.getOwnPropertyNames(this.props.availabilities).length !== 0) {
      this.props.updateAvailabilities(this.props.eventData.id, availabilities);
    } else {
      this.props.createAvailabilities(this.props.eventData.id, availabilities);
    }
  }

  dateEqual(date, otherDate) {
    const value = date.getFullYear() === otherDate.getFullYear() &&
      date.getMonth() === otherDate.getMonth() &&
      date.getDate() === otherDate.getDate();
    return value;
  }

  formatDate(date) {
    return `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;
  }

  getAllDates() {
    let date = new Date(this.props.eventData.start_date);
    let endDate = new Date(this.props.eventData.end_date);
    date.setTime(date.getTime() + date.getTimezoneOffset()*60*1000);
    endDate.setTime(endDate.getTime() + endDate.getTimezoneOffset()*60*1000);

    let allDates = [];
    while (!this.dateEqual(date, endDate)) {
      allDates.push(this.formatDate(date));
      date.setDate(date.getDate() + 1);
    }
    allDates.push(this.formatDate(date));

    return allDates;
  }


  render() {
    let dateCols = [];
    this.allDates.forEach(date => {
      let [year, month, day] = date.split('/');
      let dateCol = [<div key={date} className='date-box date-first-row'>
                      { `${parseInt(month) + 1} / ${day}` }
                    </div>];

      for (let i = 0; i < 24; i++) {
        const selectedClass = this.timeForm[date][i] ?
                              'selected' :
                              '';

        dateCol.push(
          <div key={ `${date}-${i}` }
               className={ `date-box ${ selectedClass }` }
               onClick={ this._handleClick.bind(this, date, i) } >
          </div>);
      }
      dateCols.push(
        <div key={ date } className='date-col'>
          { dateCol }
        </div>
      );
    });

    let hourCol = [<div key='hour' className='date-box date-first-row'></div>];
    for (let i = 0; i < 24; i++) {
      hourCol.push(<div key={ `hour-${i}` } className='date-box'>
                    { `${i}:00` }
                  </div>);
    }

    console.log('rendering event time form')

    return (
      <div className='date-table'>
        <div className='date-col'>{ hourCol }</div>
        { dateCols }
      </div>
    );
  }
}

export default EventTimeForm;
