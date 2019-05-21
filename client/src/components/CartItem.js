import React, { Component } from 'react'

export class CartItem extends Component {

  constructor(props){
      super(props);

      this.onRemove = this.onRemove.bind(this);

  }  

  onRemove = (id) => {
      console.log("remove id",id);
      this.props.onRemove(id);
  }
  render() {
    let id = this.props.id;
    let productname =  this.props.productname;
    let price = this.props.price;
    let currency = this.props.currency;
    return (
        <div className="item">
        <div className="right floated content">
            <div className="ui button" onClick={() => this.onRemove(id)}>Remove</div>
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
