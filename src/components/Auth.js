import React, { Component } from "react";
import Products from "./Products";
import LoginScreen from "./LoginScreen";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: {
        token: null,
        client: null,
        uid: null,
        expiry: null
      }
    }
  }

  setToken = (params) => {
    this.setState({
      auth: params
    })
  }

  render() {
    return(
      this.state.auth.token == null ? <LoginScreen setToken = {this.setToken} /> : <Products auth={this.state.auth} />
    );
  }
}

export default Auth;
