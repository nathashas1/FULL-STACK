import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup,receiveErrors } from '../../actions/session_actions';
import SignUpForm from './signup_form';

const mapStateToProps = ({ errors }) => {
  return {
      errors: errors.session[0],
    formType: 'signup',
    navLink: <Link to="/login">log in instead</Link>,
  };
};

const mapDispatchToProps = dispatch => {

  return {
    processForm: (user) => dispatch(signup(user)),
      clearErrors: () => dispatch(receiveErrors([]))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
