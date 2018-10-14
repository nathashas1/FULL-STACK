import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

// const mapStateToProps = (state) => {
//
//   return {
//
//     formType: 'login',
//     navLink: <Link to="/signup">sign up instead</Link>,
//   };
// };

const mapDispatchToProps = dispatch => {

  return {

    processForm: (user) => dispatch(login(user)),
  };
};

export default connect(null, mapDispatchToProps)(SessionForm);
