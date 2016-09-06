import React from 'react';
import { fill } from 'lodash';

class EventTimeForm extends React.Component {
  constructor(props) {
    super(props);
    let timeForm = {};
    console.log(this.props.eventData.start_date);
    console.log(this.props.eventData.end_date);

    if (this.props.isEditForm || !this.props.availability) {
      this.getAllDates().forEach(date => {
        timeForm[date] = fill(Array(24), 0);
      });
      this.state = {
        timeForm
      };
    } else {
      this.getAllDates().forEach(date => {
        if (this.props.availability[date]) {
          timeForm[date] = this.bitMapToArr(this.props.availability[date]);
        } else {
          timeForm[date] = fill(Array(24), 0);
        }
      });
      this.state = {
        timeForm
      };
    }
  }

  _handleSubmit() {
    let availability = {};
    Object.keys(this.state.timeForm).forEach(formattedDate => {
      let [year, month, date] = formattedDate.split('/');
      let dateObj = new Date(year, month, date);
      availability[dateObj.toISOString()] =
        this.arrToBitMap(this.state.timeForm[formattedDate]);
    });
    if (this.props.availability) {
      this.props.createAvailability(this.props.eventData.id, availability);
    } else {
      this.props.updateAvailability(this.props.eventData.id, availability);
    }
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
    return bitArr;
  }

  _handleClick(date, hour) {
    const toggleValue = this.state.timeForm[date][hour] ? 0 : 1;
    const dateCol = [...this.state.timeForm[date]];
    dateCol[hour] = toggleValue;
    const timeForm = Object.assign({},
                                   this.state.timeForm,
                                   { [date]: dateCol }
                                   );
    this.setState({ timeForm });
  }

  dateEqual(date, otherDate) {
    return date.getFullYear() === otherDate.getFullYear() &&
      date.getMonth() === otherDate.getMonth() &&
      date.getDate() === otherDate.getDate();
  }

  formatDate(date) {
    return date.getFullYear() + '/' +
           date.getMonth() + '/' +
           date.getDate();
  }

  getAllDates() {
    let date = new Date(this.props.eventData.start_date);
    let endDate = new Date(this.props.eventData.end_date);
    date.setTime(date.getTime() + date.getTimezoneOffset()*60*1000);
    let allDates = [];
    while (!this.dateEqual(date, endDate)) {
      allDates.push(this.formatDate(date));
      date.setDate(date.getDate() + 1);
    }
    return allDates;
  }


  render() {
    let date = new Date(this.props.eventData.start_date);
    let endDate = new Date(this.props.eventData.end_date);
    date.setTime(date.getTime() + date.getTimezoneOffset()*60*1000);

    let dateCols = [];
    while (!this.dateEqual(date, endDate)) {
      let dateCol = [<div className='date-box date-first-row'>
                      { date.getMonth() + '/' + date.getDate() }
                    </div>];
      for (let i = 0; i < 24; i++) {
        const selectedClass = this.state.timeForm[this.formatDate(date)][i] ?
                              'selected' :
                              '';

        let onClickCb;
        if (this.props.isEditForm) {
           onClickCb = this._handleClick.bind(this, this.formatDate(date), i);
        }

        dateCol.push(
          <div key={ `${this.formatDate(date)}-${i}` }
               className={ `date-box ${ selectedClass }` }
               onClick={ onClickCb } >
          </div>);
      }
      dateCols.push(
        <div key={ this.formatDate(date) } className='date-col'>
          { dateCol }
        </div>
      );
      date.setDate(date.getDate() + 1);
    }

    let hourCol = [<div className='date-box date-first-row'></div>];
    for (let i = 0; i < 24; i++) {
      hourCol.push(<div key={ `hour-${i}` } className='date-box'>
                    { `${i}:00` }
                  </div>);
    }

    let editSubmitButton;
    if (this.props.isEditForm) {
      editSubmitButton = (
        <div className='button'
             onClick={ this._handleSubmit.bind(this) }>
          Submit
        </div>
      );
    }

    return (
      <div className='date-table'>
        { editSubmitButton }
        <div className='date-col'>{ hourCol }</div>
        { dateCols }
      </div>
    );
  }
}

export default EventTimeForm;
