import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {

  return {
    errors: errors.session,
    formType: 'login',
    navLink: <Link to="/signup">sign up instead</Link>,
  };
};

const mapDispatchToProps = dispatch => {

  const demo = {username: "guest", password: "password"};
  return {

    processForm: (user) => dispatch(login(user)),
    demoLogin: () => dispatch(login(demo))
  };
};

export default connect(null, mapDispatchToProps)(SessionForm);
