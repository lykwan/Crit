import React from 'react';

class GroupDetail extends React.Component {
  render() {

    if (this.props.group) {
      const admins = this.props.group.admins.map(admin => {
        return (
          <li className='member-list-item' key={ admin.id }>
            <div className='group' />
            <span>{ admin.username }</span>
          </li>
        );
      });

      const regularMembers = this.props.group.regular_members.map(member => {
        return (
          <li className='member-list-item' key={ member.id }>
            <div className='group' />
            <span>{ member.username }</span>
          </li>
        );
      });

      return (
        <section className='content'>
          <div className='group-detail-img'
               style={ { backgroundImage: `url(${this.props.group.img})`} } />
          <div className='content-body'>
            <div className='content-header'>
              <h2>{ this.props.group.title }</h2>
              <div className='content-header-buttons group-show-buttons'>
                <div className='button'>
                  <i className='fa fa-plus' aria-hidden='true'></i>
                  <span>  Member</span>
                </div>

                <div className='button'>
                  <i className="fa fa-pencil" aria-hidden="true"></i>
                  <span>  Edit</span>
                </div>
              </div>
            </div>

            <h4>ADMINS</h4>
            <ul className='member-list'>
              { admins }
            </ul>
            <h4>MEMBERS</h4>
            <ul className='member-list'>
              { regularMembers }
            </ul>
          </div>
        </section>
      );
    }

    return (
      <div>loading... </div>
    );
  }
}

export default GroupDetail;
