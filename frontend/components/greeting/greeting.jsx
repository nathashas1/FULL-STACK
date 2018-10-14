
import React from 'react';
import { Link } from 'react-router-dom';




const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (

    <div className="navContainer">
      <Link to="/"  className="logo">
              AskRabbit
      </Link>

      <Link to="/login" className="menus">
        Services
      </Link>

      <Link to="/login" className="menus">
        Login
      </Link>

      <Link to="/login" className="menustasker">
        Become a Tasker
      </Link>

  </div>

  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
