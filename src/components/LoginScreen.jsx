import axiosIns from "../utils/axios-ins";
import React, { Component } from "react";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleClick(e) {
    e.preventDefault();
    const params = {
      email: this.state.email,
      password: this.state.password
    };

    const url = `auth/sign_in`;

    let request = axiosIns.post(
      url,
      params
    );

    request.then((response) => {
      debugger
      const params = {
        token: response["headers"]["access-token"],
        client: response["headers"]["client"],
        uid: response["headers"]["uid"],
        expiry: response["headers"]["expiry"]
      }
      this.props.setToken(params)
    }).catch((error) => {
      alert("Invalid Credentials");
    }).finally(() => {
    });
  }

  render() {
    return(
      <div className="login-wrapper">
        <h1>Please Log In</h1>
        <p>Using email: admin@gmail.com and password: password</p>
        <p>User is created using seeds.rb at backend.</p>
        <form>
          <label>
            <p>Email</p>
            <input type="text" onChange = {(event) => this.setState({email: event.target.value})} />
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange = {(event) => this.setState({password: event.target.value})} />
          </label>
          <div>
            <button onClick={(e) => this.handleClick(e)}>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default LoginScreen;
