import React, { Component } from "react";
import axiosIns from "../utils/axios-ins";
import Product from "./Product";
import Auth from "./Auth";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let markup = (
      <Auth />
    )
    let appMarkup = <div>{markup}</div>;
    return appMarkup;
  }
}

export default App;
