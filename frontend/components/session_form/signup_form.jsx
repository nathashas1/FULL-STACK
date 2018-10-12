import React from 'react';
import { withRouter } from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      firstname: '',
      lastname: '',
      zipcode: ''

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
          <br/>
            <div class="logo"></div>
            <div className="loginContainer">
            <br/>

                <div className="username">
                  <label className="usernameLabel">Username:
                      <input type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
                      />
                  </label>
                </div>
                <br/>


                <div className="password" >
                  <label className="passwordLabel">Password:
                    <input type="password"
                      value={this.state.password}
                      onChange={this.update('password')}
                    />
                  </label>
                </div>
                <br/>


                <div className="email">
                  <label className="emailLabel">Email:
                      <input type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                      />
                  </label>
                </div>
                <br/>

                  <div className="firstname">
                    <label className="firstnameLabel">First Name:
                        <input type="text"
                          value={this.state.firstname}
                          onChange={this.update('firstname')}
                        />
                    </label>
                  </div>
                  <br/>


                    <div className="lastname">
                      <label className="lastnameLabel">Last Name:
                          <input type="text"
                            value={this.state.lastname}
                            onChange={this.update('lastname')}
                          />
                      </label>
                    </div>
                    <br/>


                    <div className="zipcode">
                      <label className="zipcodeLabel">Zipcode:
                          <input type="text"
                            value={this.state.zipcode}
                            onChange={this.update('zipcode')}
                          />
                      </label>
                    </div>
                    <br/>



                <div>
                    <input className="session-submit" type="submit" value={this.props.formType} />
                </div>

                <br/>



          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUpForm);
