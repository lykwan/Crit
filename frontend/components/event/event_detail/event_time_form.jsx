import React from 'react';
import { fill } from 'lodash';

class EventTimeForm extends React.Component {
  constructor(props) {
    super(props);
    this.allFormattedDates = this.getAllDates();

    this.timeForm = {};
    this.state = {
      selectedFromBox: null,
      selectedToBox: null,
      isSelecting: false,
      isSaved: false
    };

    this.initialToggleValue = null;
  }

  // getting all the formatted date between event start date and end date
  getAllDates() {
    let date = new Date(this.props.eventData.start_date);
    let endDate = new Date(this.props.eventData.end_date);
    // adjusting the timezone difference with javascript date object
    console.log(date);
    date.setTime(date.getTime() + date.getTimezoneOffset()*60*1000);
    endDate.setTime(endDate.getTime() + endDate.getTimezoneOffset()*60*1000);

    let allDates = [];
    while (!this.dateEqual(date, endDate)) {
      allDates.push(this.dateObjToStr(date));
      date.setDate(date.getDate() + 1);
    }

    allDates.push(this.dateObjToStr(date));

    return allDates;
  }

  dateEqual(date, otherDate) {
    const value = date.getFullYear() === otherDate.getFullYear() &&
      date.getMonth() === otherDate.getMonth() &&
      date.getDate() === otherDate.getDate();
    return value;
  }

  dateObjToStr(date) {
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  }

  dateStrToObj(date) {
    let [year, month, day] = date.split('/');
    let dateObj = new Date(year, month - 1, day);
    return dateObj;
  }

  // updating the time form with new availabilities
  updateTimeForm() {
    let updatedTimeForm = {};
    console.log('availabilities', this.props.availabilities);

    if (this.props.availabilities.length > 0) {
      this.props.availabilities.forEach(avail => {
        const dateObj = new Date(avail.date);
        dateObj.setTime(dateObj.getTime() +
                        dateObj.getTimezoneOffset()*60*1000);
        updatedTimeForm[this.dateObjToStr(dateObj)] =
            this.bitMapToArr(avail.time_slot_bitmap);
      });
      this.timeForm = updatedTimeForm;
    } else {
      this.allFormattedDates.forEach(date => {
        this.timeForm[date] = fill(Array(24), 0);
      });
    }
  }

  arrToBitMap(arr) {
    let bitMap = 0;
    let shift = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
      bitMap |= arr[i] << shift;
      shift -= 1;
    }
    return bitMap;
  }

  bitMapToArr(bitMap) {
    let bitArr = [];
    while (bitMap > 0) {
      bitArr.unshift(bitMap % 2);
      bitMap >>= 1;
    }

    while (bitArr.length < 24) {
      bitArr.unshift(0);
    }
    return bitArr;
  }

  selectFromHere(fromDate, fromHour) {
    // setting the rest of the time slots that the user drags to to be
    // the same as the initial time slot
    this.initialToggleValue = this.timeForm[fromDate][fromHour] ? 0 : 1;
    let selectedPair = [fromDate, fromHour];
    this.setState({
      selectedFromHere: selectedPair,
      isSelecting: true,
      isSaved: false
    });
  }

  selectToHere(toDate, toHour) {
    let selectedPair = [toDate, toHour];
    this.setState({
      selectedToHere: selectedPair
    });
  }

  // get all the time slots within the range of
  // selectFromHere and selectedToHere
  getSelectedTimeSlots() {
    let [fromDate, fromHour] = this.state.selectedFromHere;
    let [date, hour] = [fromDate, fromHour];
    let [toDate, toHour] = this.state.selectedToHere;
    let selectedBoxes = {};

    // if only one time slot was selected
    if (date === toDate && hour === toHour) {
      return { [this.state.selectedFromHere]: this.initialToggleValue };
    }

    while (date <= toDate) {
      while (hour <= toHour) {
        selectedBoxes[[date, hour]] = this.initialToggleValue;
        hour++;
      }

      // increment date by 1
      const dateObj = this.dateStrToObj(date);
      dateObj.setDate(dateObj.getDate() + 1);
      date = this.dateObjToStr(dateObj);

      hour = fromHour;
    }

    return selectedBoxes;
  }

  submitAvailabilities(date, hour) {
    const selectedTimeSlots = this.getSelectedTimeSlots();
    Object.keys(selectedTimeSlots).forEach(timeSlot => {
      const [selectedDate, selectedHour] = timeSlot.split(",");
      this.timeForm[selectedDate][selectedHour] = selectedTimeSlots[timeSlot];
    });

    const newAvailabilities =
      Object.keys(this.timeForm).map(dateStr => {
        let dateObj = this.dateStrToObj(dateStr);
        return {
          date: dateObj.toISOString(),
          time_slot_bitmap: this.arrToBitMap(this.timeForm[dateStr])
        };
      });

    // update availabilities if there were previous availabilities, else create
    let isSaved = false;
    if (this.props.availabilities && this.props.availabilities.length !== 0) {
      this.props.updateAvailabilities(this.props.eventData.id,
                                      newAvailabilities);
      isSaved = true;
    } else {
      this.props.createAvailabilities(this.props.eventData.id,
                                      newAvailabilities);
      isSaved = true;
    }

    this.setState({
      selectedBoxes: {},
      isSelecting: false,
      isSaved
    });
  }

  getTimeSlotDivs(date) {
    let [year, month, day] = date.split('/');
    let dateHeader = <div key={date} className='date-box date-headers'>
                        { `${month}/${day}` }
                      </div>;
    let dateCol = [dateHeader];

    // push 24 divs representing the hours into the dateCol array
    for (let hour = 0; hour < 24; hour++) {
      const chosenClass = this.timeForm[date][hour] ?
                            'chosen' :
                            '';
      let selectedClass = '';
      let unselectedClass = '';
      // if (Object.hasOwnProperty(selectedDates[[date, hour]])
      //     && selectedDates[[date, hour]] === 1) {
      //       selectedClass = 'selected';
      // } else if (Object.hasOwnProperty(selectedDates[[date, hour]])
      //     && selectedDates[[date, hour]] === 0) {
      //       unselectedClass = 'unselected';
      // }

      // defining event handlers for selecting time slots
      let onMouseDown, onMouseOver, onMouseUp;
      if (!this.props.eventData.is_time_finalized) {
        onMouseDown = this.selectFromHere.bind(this, date, hour);
        onMouseOver = this.selectToHere.bind(this, date, hour);
        onMouseUp = this.submitAvailabilities.bind(this, date, hour);
      }

      dateCol.push(
        <div key={ `${date}-${hour}` }
             className={ `date-box ${ chosenClass }
                                   ${ selectedClass }
                                   ${ unselectedClass }` }
             onMouseDown={ onMouseDown }
             onMouseOver={ onMouseOver }
             onMouseUp={ onMouseUp }>
        </div>);
    }

    return dateCol;
  }

  getHourHeaderDivs() {
    let hourHeader = [<div key='hour' className='date-box date-headers'></div>];
    for (let hour = 0; hour < 24; hour++) {
      hourHeader.push(<div key={ `hour-${hour}` }
                           className='date-box hour-headers'>
                        { `${hour}:00` }
                      </div>);
    }

    return hourHeader;
  }

  render() {
    this.updateTimeForm();
    let dateCols = [];
    this.allFormattedDates.forEach(date => {
      dateCols.push(
        <div key={ date } className='time-table-col'>
          { this.getTimeSlotDivs(date) }
        </div>
      );
    });


    let savedMsg;
    // if (this.state.isSaved) {
    //   savedMsg = <span className='saved-msg'>Saved</span>;
    // }

    return (
      <div className='time-table-container'>
        { savedMsg }
        <div className='time-table'>
          <div className='time-table-col'>{ this.getHourHeaderDivs() }</div>
          { dateCols }
        </div>
      </div>
    );
  }
}

export default EventTimeForm;
