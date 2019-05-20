import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartItem from './CartItem';
export class Cart extends Component {
  render() {

    let user = this.props.user;
    
    return (
      <div className="ui container" style={{ marginTop : '20px' }}>

        <div className="ui middle aligned divided list">

          { user.products.map((v,i) => {
               return <CartItem 
                key={i}
                productname={v.productname} 
                price={v.price} 
                currency={v.currency}  />
          }) }
         
        </div>

          
        
      </div>
    )
  }
}
const mapStateToProps = state => ({
    user : state.user.user
})
export default connect(mapStateToProps)(Cart)
