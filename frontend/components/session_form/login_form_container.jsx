import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {

  return {
    errors: errors.session[0],
    formType: 'login',
    navLink: <Link to="/signup">sign up instead</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  console.log("dispatch");
  const demo = {username: "guest", password: "password"};
  return {

    processForm: (user) => dispatch(login(user)),
    demoLogin: () => dispatch(login(demo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
