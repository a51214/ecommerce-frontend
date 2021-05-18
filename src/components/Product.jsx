import React, { Component } from 'react';

class Product extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        let markup = null;
        let {name, price, quantity, imgUrl} = this.props.product;

        markup = (
            <React.Fragment>
                <div>
                  <img src={imgUrl} />
                  <h1>Name: {name}</h1>
                  <h2>Price: {price}</h2>
                  <h3>Quantity Available: {quantity}</h3>
                </div>
            </React.Fragment>
        )
        return markup;
    }
}

export default Product;
