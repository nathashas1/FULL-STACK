import React from 'react';
import { withRouter } from 'react-router-dom';

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
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }


  render() {
    return (
      <div className="loginFormContainer">
        <form onSubmit={this.handleSubmit} className="loginForm">


            <div className="loginContainer">


                <div className="username">
                  <label>Username:
                      <input type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
                      />
                  </label>
                </div>
                <br/>

                <div className="password" >
                  <label >Password:
                    <input type="password"
                      value={this.state.password}
                      onChange={this.update('password')}
                    />
                  </label>
                </div>
                <br/>


                  <div className="submitBtn" >
                    <input type="submit" value="Log In" />
                  </div>
                <br/>

              

          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
