import React from 'react';
import AuthFormContainer from './auth_form/auth_form_container';

const Splash = () => {
  return (
    <article className='splash'>
      <AuthFormContainer />

      <section className='splash-description'>
        <h2>Crit</h2>
        <p>An Event Organizing App</p>
      </section>
    </article>
  );
};

export default Splash;
