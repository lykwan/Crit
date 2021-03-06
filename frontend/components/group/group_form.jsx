import React from 'react';
import Modal from 'react-modal';
import { withRouter } from 'react-router';
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

const formFields = {
  TITLE: 'title',
  DESCRIPTION: 'description'
};

class GroupForm extends React.Component {
  constructor(props) {
    super(props);
    if (props.isEditForm) {
      this.state = {
        group: {
          title: props.group.title,
          description: props.group.description,
        },
        isModalOpen: false
      };
    } else {
      this.state = {
        group: {
          title: '',
          description: '',
          friends_search: '',
          group_memberships_attributes: []
        },
        membersInput: [],
        isModalOpen: false
      };
    }
  }

  _handleSubmit(e) {
    e.preventDefault();

    let group;
    if (!this.props.isEditForm) {
      const membershipAttributes =
        this.state.membersInput.map(input => {
          return {
            member_user_id: input.value
          };
        });

      group =
        Object.assign({},
                      this.state.group,
                      { group_memberships_attributes: membershipAttributes }
                     );

      this.props.createGroup(group);
    } else {
      group = Object.assign({}, { title: this.state.group.title,
                                  description: this.state.group.description
                                });
      this.props.updateGroup(this.props.group.id, group);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.errors) {
      this.closeModal();
    }
  }

  closeModal() {
    this.setState({ isModalOpen: false });
    // document.body.className = '';
  }

  openModal() {
    this.setState({ isModalOpen: true });
    // document.body.className = 'modal-open';
  }


  _handleInputChange(field, e) {
    const group = Object.assign({},
                                this.state.group,
                                { [field]: e.currentTarget.value }
                               );
    this.setState({ group: group });
  }

  setMembersInput(input) {
    this.setState({ membersInput: input });
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

    let inviteFriends;
    if (!this.props.isEditForm) {
      inviteFriends = (
        <div className='group-form-invite'>
          <div className='form-search'>
            <div className='form-search-icon'>
              <i className="fa fa-search" aria-hidden="true"></i>
            </div>
            <UserSearchContainer
              membersInput={ this.state.membersInput }
              setMembersInput={ this.setMembersInput.bind(this) }
              multi={ true }
              />
          </div>
        </div>
      );
    }

    let button;
    if (this.props.isEditForm) {
      button = (
        <div className='button'
             onClick={ this.openModal.bind(this )}>
          <i className="fa fa-pencil" aria-hidden="true"></i>
          <span>Edit</span>
        </div>
      );
    } else {
      button = (
        <div className='content-header-buttons button'
             onClick={ this.openModal.bind(this) }>
          <i className='fa fa-plus' aria-hidden='true'></i>
          <span>Create</span>
        </div>
      );
    }

    let header;
    if (this.props.isEditForm) {
      header = <h3>Edit Group</h3>;
    } else {
      header = <h3>Create Group</h3>;
    }

    return (
      <div>
        { button }
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

            { header }

            <input type='text'
                   value={ this.state.group.title }
                   className='form-input'
                   placeholder='Group name'
                   onChange={
                     this._handleInputChange.bind(this, formFields.TITLE)
                   } />

            <input type='text'
                    value={ this.state.group.description }
                    className='form-textarea form-input'
                    placeholder='Description'
                    onChange={
                      this._handleInputChange.
                        bind(this, formFields.DESCRIPTION)
                    } />

            { inviteFriends }

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

export default withRouter(GroupForm);
