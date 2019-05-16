import React, { Component } from 'react'
import ProductLisItem from './ProductLisItem';
import { connect } from 'react-redux'
import { fetchProducts } from '../actions/productAction';
export class ProductLists extends Component {

  constructor(props){
      super(props);

      this.props.fetchProducts();
  
  }  

  addToCart(id) {
      console.log("id =>",id);
  }

  render() {

    let products = this.props.products;

    console.log(products);    
    return (

        <div className="ui container">
        <div className="ui link cards">
            {products.map((v,i) => {

                    return <ProductLisItem key={i} id={v._id} name={v.productname} price={v.price} image={v.image} currency={v.currency} addToCart={this.addToCart} />
            
            })}
            
        
        </div>

        </div>
    )
  }
}

const mapStateToProps = state => ({
    products : state.products.products
})

export default connect(mapStateToProps,{ fetchProducts })(ProductLists)
