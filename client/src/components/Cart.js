import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeProduct } from '../actions/productAction'
import CartItem from './CartItem';
export class Cart extends Component {

  constructor(props){
    super(props);

    this.onRemove = this.onRemove.bind(this);
  }

  onRemove = (id) => {

     

     let productData = {
       userid : this.props.user._id,
       productid : id
     }

     this.props.removeProduct(productData);

  }

  render() {

    let user = this.props.user;

    console.log("user",user);
    
    return (
      <div className="ui container" style={{ marginTop : '20px' }}>

        <div className="ui middle aligned divided list">

          { user.products.map((v,i) => {
               return <CartItem 
                key={i}
                id={v._id}
                productname={v.productname} 
                price={v.price} 
                currency={v.currency} 
                onRemove={this.onRemove} />
          }) }

        </div>
          
      </div>
    )
  }
}
const mapStateToProps = state => ({
    user : state.user.user
})
export default connect(mapStateToProps,{removeProduct})(Cart)
