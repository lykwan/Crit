import React from 'react';
import { Provider } from 'react-redux';
import AuthFormContainer from './auth_form/auth_form_container';

const Root = ({ store }) => (
  <Provider store={ store }>
    <AuthFormContainer />
  </Provider>
);

export default Root;
