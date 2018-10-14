import React from 'react';
import { Link,withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.processForm(this.state);
  }


  render() {
    return (
      <div className="loginFormContainer">
        <form onSubmit={this.handleSubmit} className="loginForm">


            <div className="loginContainer">



                  <label>Username:
                      <input type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
                        className="login-input"
                      />
                  </label>

                <br/>
                <br/>
                <br/>


                  <label >Password:
                    <input type="password"
                      value={this.state.password}
                      onChange={this.update('password')}
                      className="login-input"
                    />
                  </label>
                <br/>

                <div logsignup>
                  <input className="session-submit" type="submit" value="Log In" />
                  <Link to="/signup"  className="submitlink">
                    Sign Up
                  </Link>
                  <br/>
                  </div>

                  </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
