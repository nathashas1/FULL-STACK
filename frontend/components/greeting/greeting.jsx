
import React from 'react';
import { Link } from 'react-router-dom';




const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (

    <div className="navContainer">
      <Link to="/"  className="logo">
        <div className="icon"></div>
          <p className="logoPart1" >Bask<span className="logoPart2">Rabbit</span></p>

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

      <div className="navContainer">
        <Link to="/"  className="logo">
          <div className="icon"></div>
            <p className="logoPart1" >Bask<span className="logoPart2">Rabbit</span></p>

        </Link>

        <Link to="/login" className="menus">
          Get $10
        </Link>

        <Link to="/login" className="menus">
          Book a Task
        </Link>

        <Link to="/tasks" className="menus">
          My Tasks
        </Link>

        <Link to="/tasks" className="menus">
          Account
        </Link>

        <div className="menustasker">
        <div  className="menustaskercomp" onClick={logout}>Log Out</div>
        </div>
    </div>

    );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
