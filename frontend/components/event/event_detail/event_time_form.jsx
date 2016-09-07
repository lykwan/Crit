import React from 'react';
import { fill } from 'lodash';

class EventTimeForm extends React.Component {
  constructor(props) {
    super(props);
    let timeForm = {};
    this.allDates = this.getAllDates();

    this.allDates.forEach(date => {
      timeForm[date] = fill(Array(24), 0);
    });
    this.state = {
      timeForm
    };
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
                                   this.state.timeForm,
                                   updatedTimeForm
                                   );
    this.setState({ timeForm });
  }

  _handleSubmit() {
    const availabilities =
      Object.keys(this.state.timeForm).map(formattedDate => {
        let [year, month, date] = formattedDate.split('/');
        let dateObj = new Date(year, month, date);
        return {
          date: dateObj.toISOString(),
          time_slot_bitmap: this.arrToBitMap(this.state.timeForm[formattedDate])
        };
      });
    this.props.createAvailabilities(this.props.eventData.id, availabilities);
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
    const value = date.getFullYear() === otherDate.getFullYear() &&
      date.getMonth() === otherDate.getMonth() &&
      date.getDate() === otherDate.getDate();
    return value;
  }

  formatDate(date) {
    console.log(date);
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
    // let date = new Date(this.props.eventData.start_date);
    // let endDate = new Date(this.props.eventData.end_date);
    // date.setTime(date.getTime() + date.getTimezoneOffset()*60*1000);
    // endDate.setTime(endDate.getTime() + endDate.getTimezoneOffset()*60*1000);

    let dateCols = [];
    this.allDates.forEach(date => {
      let [year, month, day] = date.split('/');
      let dateCol = [<div key={date} className='date-box date-first-row'>
                      { `${parseInt(month) + 1} / ${day}` }
                    </div>];

      for (let i = 0; i < 24; i++) {
        const selectedClass = this.state.timeForm[date][i] ?
                              'selected' :
                              '';

        let onClickCb;
        if (this.props.isEditForm) {
           onClickCb = this._handleClick.bind(this, date, i);
        }

        dateCol.push(
          <div key={ `${date}-${i}` }
               className={ `date-box ${ selectedClass }` }
               onClick={ onClickCb } >
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
