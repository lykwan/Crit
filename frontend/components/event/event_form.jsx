import React from 'react';
import Modal from 'react-modal';
import Select from 'react-select';

const customModalStyles = {
  overlay: {
    position        :'fixed',
    top             :0,
    left            :0,
    right           :0,
    bottom          :0,
    backgroundColor :'rgba(0, 0, 0, 0.40)',
  },
  content: {
    position        :'fixed',
    width           :'700px',
    margin          :'auto',
    border          :'1px solid #ccc',
    padding         :'30px',
  }
};

const formFields = {
  TITLE: 'title',
  DESCRIPTION: 'description',
  LOCATION: 'location',
  GROUP_ID: 'group_id',
  START_TIME: 'start_time',
  END_TIME: 'end_time'
};

const blankEventData = {
  title: '',
  description: '',
  location: '',
  group_id: '',
  start_time: '',
  end_time: ''
};

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      eventData: blankEventData,
      group: ''
    };
  }

  inputGroup(val) {
    if (val) {
      this.setState({ group: val });
    } else {
      this.setState({ group: '' });
    }
  }

  afterOpenModal() {
  }


  //TODO: fix the issue with blur background with not closing modal
  openModal() {
    this.setState({ isModalOpen: true });
    // document.body.className = 'modal-open';
  }

  closeModal() {
    this.setState({ isModalOpen: false });
    // document.body.className = '';
  }

  _handleInputChange(field, e) {
    const eventData = Object.assign({},
                                    this.state.eventData,
                                    { [field]: e.currentTarget.value }
                                   );
    this.setState({ eventData });
  }

  _handleSubmit(e) {
    e.preventDefault();
    const eventData = Object.assign({},
                                    this.state.eventData,
                                    { group_id: this.state.group.value });
    this.props.createEvent(eventData);
  }

  render() {
    let errors;
    if (this.props.errors) {
      errors = this.props.errors.map((error, idx) => {
        return <li key={idx}>{ error }</li>;
      });
    }

    //TODO: fix the dropdown of select group

    return (
      <div>
        <div className='content-header-buttons button'
             onClick={ this.openModal.bind(this) }>
          <i className='fa fa-plus' aria-hidden='true'></i>
          <span>  Create Event</span>
        </div>

        <Modal
          isOpen={ this.state.isModalOpen }
          onAfterOpen={ this.afterOpenModal.bind(this) }
          onRequestClose={ this.closeModal.bind(this) }
          style={ customModalStyles } >

          <div className='modal-close-button'
               onClick={ this.closeModal.bind(this) }>
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>

          { errors }

          <form className='event-form'
                onSubmit={ this._handleSubmit.bind(this) } >

            <h3>Add Event</h3>

            <label>Event Name
              <input
                type='text'
                value={ this.state.eventData.title }
                onChange={
                  this._handleInputChange.bind(this, formFields.TITLE)
                } />
            </label>

            <label>Description
              <textarea
                value={ this.state.eventData.description }
                onChange={
                  this._handleInputChange.bind(this, formFields.DESCRIPTION)
                } />
            </label>

            <label>Location
              <span className='optional'> (Optional)</span>
              <input
                type='text'
                value={ this.state.eventData.location }
                onChange={
                  this._handleInputChange.bind(this, formFields.LOCATION)
                } />
            </label>

            <Select
                value={ this.state.group }
                options={ this.props.groups }
                onChange={ this.inputGroup.bind(this) }
            />

            <label>Start Time
              <span className='optional'> (Optional)</span>
              <input
                type='date'
                value={ this.state.eventData.start_time }
                onChange={
                  this._handleInputChange.bind(this, formFields.START_TIME)
                } />
            </label>

            <label>End Time
              <span className='optional'> (Optional)</span>
              <input
                type='date'
                value={ this.state.eventData.end_time }
                onChange={
                  this._handleInputChange.bind(this, formFields.END_TIME)
                } />
            </label>

            <button className='button'>Submit Form</button>
          </form>
        </Modal>
      </div>
    );
  }
}


export default EventForm;
