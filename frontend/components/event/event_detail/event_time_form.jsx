import React from 'react';
import { fill } from 'lodash';

class EventTimeForm extends React.Component {
  constructor(props) {
    super(props);
    this.timeForm = {};
    this.allDates = this.getAllDates();

    if (this.props.availabilities.length > 0 &&
        this.props.availabilities.event_id === this.props.eventData.id &&
        !this.props.eventData.is_time_finalized) {
        this.updateTimeForm(this.props);
    }

    this.allDates.forEach(date => {
      this.timeForm[date] = fill(Array(24), 0);
    });

    this.state = {
      selectedFromBox: null,
      selectedToBox: null,
      isSelecting: false,
      isSaved: false,
      timeForm: this.timeForm
    };


    if (this.props.eventData.is_time_finalized) {
      this.updateTimeForm(this.props);
    }

    this.initialToggleValue = null;
  }

  componentWillReceiveProps(nextProps) {
    this.updateTimeForm(nextProps);
  }

  updateTimeForm(props) {
    let updatedTimeForm = {};
    props.availabilities.forEach(avail => {
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

  selectFromHere(fromDate, fromHour) {
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

  getSelectedDates() {
    const selectedFromHere = this.state.selectedFromHere;
    const selectedToHere = this.state.selectedToHere;
    let [fromDate, fromHour] = this.state.selectedFromHere;
    let [date, hour] = this.state.selectedFromHere;
    let [toDate, toHour] = this.state.selectedToHere;
    let selectedBoxes = {};

    if (date === toDate && hour === toHour) {
      return { [selectedFromHere]: this.initialToggleValue };
    }

    while (date <= toDate) {
      while (hour <= toHour) {
        selectedBoxes[[date, hour]] = this.initialToggleValue;
        hour++;
        console.log('date, hour', date, hour);
      }
      let [year, month, day] = date.split('/');
      let dateObj = new Date(year, month, day);
      dateObj.setTime(dateObj.getTime() + dateObj.getTimezoneOffset()*60*1000);
      dateObj.setDate(dateObj.getDate() + 1);
      date = this.formatDate(dateObj);
      hour = fromHour;
    }

    return selectedBoxes;
  }

  submitAvailabilities(date, hour) {
    Object.keys(this.getSelectedDates()).forEach(selectedPair => {
      const [selectedDate, selectedHour] = selectedPair.split(",");
      this.timeForm[selectedDate][selectedHour] =
        this.initialToggleValue;
    });

    let isSaved = false;

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
      this.props.availabilities.length !== 0) {
      this.props.updateAvailabilities(this.props.eventData.id, availabilities);
      isSaved = true;
    } else {
      this.props.createAvailabilities(this.props.eventData.id, availabilities);
      isSaved = true;
    }

    this.setState({
      selectedBoxes: {},
      isSelecting: false,
      isSaved
    });
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
                { `${parseInt(month) + 1}/${day}` }
                    </div>];

      for (let i = 0; i < 24; i++) {
        const chosenClass = this.timeForm[date][i] ?
                              'chosen' :
                              '';
        let selectedClass = '';
        let unselectedClass = '';
        // if (Object.hasOwnProperty(selectedDates[[date, i]])
        //     && selectedDates[[date, i]] === 1) {
        //       selectedClass = 'selected';
        // } else if (Object.hasOwnProperty(selectedDates[[date, i]])
        //     && selectedDates[[date, i]] === 0) {
        //       unselectedClass = 'unselected';
        // }

        const onMouseDown = !this.props.eventData.is_time_finalized ?
                            this.selectFromHere.bind(this, date, i) :
                            null;

        const onMouseOver = !this.props.eventData.is_time_finalized ?
                            this.selectToHere.bind(this, date, i) :
                            null;

        const onMouseUp = !this.props.eventData.is_time_finalized ?
                            this.submitAvailabilities.bind(this, date, i) :
                            null;


        dateCol.push(
          <div key={ `${date}-${i}` }
               className={ `date-box ${ chosenClass } ${ selectedClass } ${ unselectedClass }` }
               onMouseDown={ onMouseDown }
               onMouseOver={ onMouseOver }
               onMouseUp={ onMouseUp }>
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
      hourCol.push(<div key={ `hour-${i}` } className='date-box date-first-col'>
                    { `${i}:00` }
                  </div>);
    }

    let savedMsg;
    if (this.state.isSaved) {
      savedMsg = <span className='saved-msg'>Saved</span>;
    }

    return (
      <div className='date-table'>
        { savedMsg }
        <div className='date-col'>{ hourCol }</div>
        { dateCols }
      </div>
    );
  }
}

export default EventTimeForm;
