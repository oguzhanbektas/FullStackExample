import React from "react";
import { signup } from "../api/apiCalls.js";
class UserSignupPage extends React.Component {
  state = {
    username: null,
    displayName: null,
    password: null,
    passwordRepeat: null,
    pendingApiCall: false,
  };

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  onClickSignup = async (event) => {
    event.preventDefault();
    const { username, displayName, password } = this.state;
    const body = {
      username,
      displayName,
      password,
    };
    this.setState({ pendingApiCall: true });

    try {
      const response = await signup(body);
    } catch (error) {}

    this.setState({ pendingApiCall: false });
  };

  render() {
    const { pendingApiCall } = this.state;
    return (
      <div className="container">
        <form>
          <h1 className="text-center"> Signup Page </h1>
          <div className="form-group">
            <label> Username</label>
            <input
              name="username"
              onChange={this.onChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label> Displayname</label>
            <input
              name="displayName"
              onChange={this.onChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label> Password </label>
            <input
              type="password"
              name="password"
              onChange={this.onChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label> Password Repeat</label>
            <input
              type="password"
              name="passwordRepeat"
              onChange={this.onChange}
              className="form-control"
            />
          </div>
          <div className="text-center form-group">
            <button
              className="btn btn-primary"
              disabled={pendingApiCall}
              onClick={this.onClickSignup}
            >
              {pendingApiCall ? (
                <span className="spinner-border spinner-border-sm"></span>
              ) : null}
              Signup
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default UserSignupPage;
