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
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentDidMount() {
   window.scrollTo(0,0);
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

  handleDemo() {
    return (e) => {
      e.preventDefault();
      this.props.demoLogin();
    };
  }


  componentWillUnmount(){
    return this.props.clearErrors();
  }

  render() {
    return (
      <div className="loginFormContainer">
        <form onSubmit={this.handleSubmit} className="loginForm">



            <div className="loginContainer">
              <div className="loginHeader">
              <div className="iconlogin"></div>
                <p className="logoPart1login" >Bask<span className="logoPart2login">Rabbit</span></p>
                </div>

              <div className="signuperrors">
              {this.props.errors}
              </div>


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

                <div className="logsignup">
                  <input className="session-submit" type="submit" value="Log In" />
                  <button className="demouser" onClick={this.handleDemo()}>Demo User</button>

                  <br/>

                    <Link to="/signup"  className="submitlink">
                      Sign Up
                    </Link>

                  </div>



                  </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
