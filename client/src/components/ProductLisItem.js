import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addProduct} from '../actions/productAction';
export class ProductLisItem extends Component {

  
  constructor(props){
      super(props);

     
  }  


  render() {
       let id = this.props.id ? this.props.id : ''; 
       let price = this.props.price ? this.props.price : '';
       let productname = this.props.name ? this.props.name : '';
       let currency = this.props.currency ? this.props.currency : '';
       let image = this.props.image ? this.props.image : '';
     
    return (
        <div className="card">
        
            <div className="image">
                <img  src={`http://localhost:3123/${image}`}  alt=""/>
            </div>

            <div className="content">
                <div className="header">{productname}</div>
            </div>

            <div className="extra content">
                <span className="right floated">
                <button className="ui button " style={{zIndex : 99999}}  onClick={this.props.addToCart(id)}>Add to Cart</button>
                </span>
                <span>
                    {price} 
                    {currency}
                </span>

                
            </div>


        </div>
    )
  }
}

export default connect(null,{ addProduct })(ProductLisItem)
