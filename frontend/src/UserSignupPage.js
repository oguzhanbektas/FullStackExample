import React from "react";
import axios from "axios";
class UserSignupPage extends React.Component {
  state = {
    username: null,
    displayName: null,
    password: null,
    passwordRepeat: null,
  };

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  onClickSignup = (event) => {
    event.preventDefault();
    const { username, displayName, password } = this.state;
    const body = {
      username,
      displayName,
      password,
    };
    axios.post("/api/1.0/users", body);
  };

  render() {
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
            <button className="btn btn-primary" onClick={this.onClickSignup}>
              Signup
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default UserSignupPage;
