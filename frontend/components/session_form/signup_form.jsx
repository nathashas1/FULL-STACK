import React from 'react';
import { Link,withRouter } from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      zipcode: '',
      email:''

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

  // renderErrors() {
  //    return(
  //      <ul>
  //        {this.props.errors.map((error, i) => (
  //          <li key={`error-${i}`}>
  //            {error}
  //          </li>
  //        ))}
  //      </ul>
  //    );
  //  }

  render() {
    return (
      <div className="loginFormContainer">
        <form onSubmit={this.handleSubmit} className="signupForm">


                                <div class="signuperrors">
                                {this.props.errors}
                                </div>
            <div className="signupContainer">



                <label >First Name:
                  <input type="text"
                    value={this.state.firstname}
                    onChange={this.update('firstname')}
                      className="signup-input"
                  />
                </label>
              <br/>


                  <label >Last Name:
                    <input type="text"
                      value={this.state.lastname}
                      onChange={this.update('lastname')}
                        className="signup-input"
                    />
                  </label>
                <br/>


                    <label >Username:
                      <input type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
                          className="signup-input"
                      />
                    </label>
                      <br/>


                      <label >Password:
                        <input type="password"
                          value={this.state.password}
                          onChange={this.update('password')}
                            className="signup-input"
                        />
                      </label>
                    <br/>


                  <label>ZipCode:
                      <input type="text"
                        value={this.state.zipcode}
                        onChange={this.update('zipcode')}
                        className="signup-input"
                      />
                  </label>
                <br/>


                  <div logsignup>
                    <input className="signup-submit" type="submit" value="Create Account" />

                    <br/>
                    </div>


          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUpForm);
