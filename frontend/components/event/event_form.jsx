import React from 'react';
import Modal from 'react-modal';

const customModalStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const formFields = {
  TITLE: 'title',
  DESCRIPTION: 'description',
  LOCATION: 'location',
  GROUP_ID: 'group_id'
};

const blankEventData = {
  title: '',
  description: '',
  location: '',
  group_id: ''
};

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      eventData: blankEventData
    };
  }

  afterOpenModal() {
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  _handleInputChange(field, e) {
    const eventData = Object.assign({},
                                    this.state.eventData,
                                    { [field]: e.currentTarget.value }
                                   );
    this.setState({ eventData });
  }

  _handleSubmit() {
    this.props.createEvent(this.state.eventData);
  }

  render() {
    let errors;
    if (this.props.errors) {
      errors = this.props.errors.map((error, idx) => {
        return <li key={idx}>{ error }</li>;
      });
    }

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

          <button onClick={ this.closeModal.bind(this) }>close</button>

          { errors }

          <form className='event-form'
                onSubmit={ this._handleSubmit.bind(this) } >

            <h3>Add Group</h3>

            <label>Event Name
              <input
                type='text'
                value={ this.state.eventData.title }
                onChange={
                  this._handleInputChange.bind(this, formFields.TITLE)
                } />
            </label>

            <label>Description
              <input
                type='text'
                value={ this.state.eventData.description }
                onChange={
                  this._handleInputChange.bind(this, formFields.DESCRIPTION)
                } />
            </label>

            <label>Location
              <input
                type='text'
                value={ this.state.eventData.location }
                onChange={
                  this._handleInputChange.bind(this, formFields.LOCATION)
                } />
            </label>

            <label>Group
              <input
                type='text'
                value={ this.state.eventData.group_id }
                onChange={
                  this._handleInputChange.bind(this, formFields.GROUP_ID)
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
