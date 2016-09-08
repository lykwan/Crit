import React from 'react';
import Modal from 'react-modal';
import UserSearchContainer from '../user_search/user_search_container';


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
    height          :'400px',
    margin          :'auto',
    border          :'1px solid #ccc',
    padding         :'30px',
  }
};

class GroupMembershipForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      membersInput: '',
    };
  }

  setMembersInput(input) {
    if (Array.isArray(input)) {
      this.setState({ membersInput: '' });
    } else {
      this.setState({ membersInput: input });
    }
  }

  _handleSubmit(e) {
    e.preventDefault();
    const groupMembership = {
      member_user_id: this.state.membersInput.value,
      is_admin: false
    };
    this.props.createGroupMembership(this.props.groupId, groupMembership);
  }

  closeModal() {
    this.setState({ isModalOpen: false });
    // document.body.className = '';
  }

  openModal() {
    this.setState({ isModalOpen: true });
    // document.body.className = 'modal-open';
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.errors) {
      this.closeModal();
    }
  }

  render() {
    let errors;
    if (this.props.errors) {
      errors = this.props.errors.map((error, idx) => {
        return (
          <li key={idx}>{ error }</li>
        );
      });
    }

    let inviteFriends = (
      <div className='group-form-invite'>
        <div className='form-search'>
          <div className='form-search-icon'>
            <i className="fa fa-search" aria-hidden="true"></i>
          </div>
          <UserSearchContainer
            membersInput={ this.state.membersInput }
            setMembersInput={ this.setMembersInput.bind(this) }/>
        </div>
      </div>
    );


    return (
      <div>
        <div className='button' onClick={ this.openModal.bind(this) }>
          <i className='fa fa-plus' aria-hidden='true'></i>
          <span>  Member</span>
        </div>

        <Modal
          isOpen={ this.state.isModalOpen }
          onRequestClose={ this.closeModal.bind(this) }
          style={ customModalStyles } >

          <div className='modal-close-button'
             onClick={ this.closeModal.bind(this) }>
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>

          <form className='form group-form'
                onSubmit={ this._handleSubmit.bind(this) }>

          <h3>Add New Member</h3>

          <UserSearchContainer
            membersInput={ this.state.membersInput }
            setMembersInput={ this.setMembersInput.bind(this) }
            multi={ false }
            />

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

export default GroupMembershipForm;
