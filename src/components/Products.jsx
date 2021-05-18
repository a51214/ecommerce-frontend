import React, { Component } from "react";
import axiosIns from "../utils/axios-ins";
import Product from "./Product";
import axios from "axios";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  getProductsInfo() {
    const {token, client, uid, expiry} = this.props.auth;
    return axios({
      url: `http://ecommerce-web-site-5.herokuapp.com/api/v1/products`,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        'access-token': token,
        'client': client,
        'uid': uid,
        'expiry': expiry,
        'token-type': 'Bearer'
      }
    }).then(response => {
      debugger
      this.setState(
        {
          products: response.data
        }
      );
    }).catch(error => {
    })
  }

  componentDidMount() {
    this.getProductsInfo();
  }

  render() {
    const { products } = this.state;
    let markup = (
      <div className="locations">
        {products.length > 0 &&
          products.map((product, i) => (
              <Product
                product={product}
                key={`${i}-product-li`}
              />
          ))}
      </div>
    )
    return markup;
  }
}

export default Products;
