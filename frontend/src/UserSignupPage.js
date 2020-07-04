import React from "react";

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
  render() {
    return (
      <form>
        <h1> Signup Page </h1>
        <div>
          <label> Username</label>
          <input name="username" onChange={this.onChange} />
        </div>
        <div>
          <label> Displayname</label>
          <input name="displayName" onChange={this.onChange} />
        </div>
        <div>
          <label> Password </label>
          <input type="password" name="password" onChange={this.onChange} />
        </div>
        <div>
          <label> Password Repeat</label>
          <input
            type="password"
            name="passwordRepeat"
            onChange={this.onChange}
          />
        </div>
        <button> Signup </button>
      </form>
    );
  }
}

export default UserSignupPage;
