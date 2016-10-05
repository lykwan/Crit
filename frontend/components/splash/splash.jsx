import React from 'react';
import AuthFormContainer from './auth_form/auth_form_container';

const Splash = () => {
  return (
    <div>
      <article className='splash'>
        <div className='splash-overlay'></div>
        <div className='splash-container'>
          <section className='splash-description'>
            <h2>Crit</h2>
            <p>An Event Organizing App</p>
          </section>

          <AuthFormContainer />
        </div>
      </article>
    </div>
  );
};

export default Splash;
