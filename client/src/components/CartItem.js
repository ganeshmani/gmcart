import React, { Component } from 'react'

export class CartItem extends Component {
  render() {

    let productname =  this.props.productname;
    let price = this.props.price;
    let currency = this.props.currency;
    return (
        <div className="item">
        <div className="right floated content">
            <div className="ui button">Remove</div>
        </div>
        <div className="content">
            <div className="header">
                {productname}
            </div>
            { price } - {currency}
        </div>
      </div>
    )
  }
}

export default CartItem
