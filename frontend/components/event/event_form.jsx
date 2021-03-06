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
    zIndex          :10
  },
  content: {
    position        :'fixed',
    width           :'700px',
    margin          :'auto',
    border          :'1px solid #ccc',
    padding         :'30px',
    zIndex          : 11
  }
};

const formFields = {
  TITLE: 'title',
  DESCRIPTION: 'description',
  LOCATION: 'location',
  GROUP_ID: 'group_id',
  START_DATE: 'start_date',
  END_DATE: 'end_date'
};

const blankEventData = {
  title: '',
  description: '',
  location: '',
  group_id: '',
  start_date: '',
  end_date: ''
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
    if (val && !Array.isArray(val)) {
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
      <div className='content-header'>
        <h2>Events</h2>
        <div className='content-header-buttons button'
             onClick={ this.openModal.bind(this) }>
          <i className='fa fa-plus' aria-hidden='true'></i>
          <span>Create</span>
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


          <form className='form event-form'
                onSubmit={ this._handleSubmit.bind(this) } >

            <h3>Add Event</h3>

            <input
              type='text'
              placeholder='Event Title'
              value={ this.state.eventData.title }
              className='form-input'
              onChange={
                this._handleInputChange.bind(this, formFields.TITLE)
              } />

            <input
                value={ this.state.eventData.description }
                placeholder='Description'
                className='form-input'
                onChange={
                  this._handleInputChange.bind(this, formFields.DESCRIPTION)
                } />

              <input
                type='text'
                placeholder='Location (optional)'
                className='form-input'
                value={ this.state.eventData.location }
                onChange={
                  this._handleInputChange.bind(this, formFields.LOCATION)
                } />

            <Select
                placeholder='Choose group'
                value={ this.state.group }
                options={ this.props.groups }
                onChange={ this.inputGroup.bind(this) }
            />

          <div className='form-date'>
              <label>Start Date
                  <input
                    className='form-input'
                    type='date'
                    value={ this.state.eventData.start_date }
                    onChange={
                      this._handleInputChange.bind(this, formFields.START_DATE)
                    } />
                </label>
            </div>

            <div className='form-date'>
              <label>End Date
                <input
                  className='form-input'
                  type='date'
                  value={ this.state.eventData.end_date }
                  onChange={
                    this._handleInputChange.bind(this, formFields.END_DATE)
                  } />
              </label>
            </div>

            <ul className='errors-list'>
              { errors }
            </ul>

            <button className='button'>Submit Form</button>
          </form>
        </Modal>
      </div>
    );
  }
}


export default EventForm;
