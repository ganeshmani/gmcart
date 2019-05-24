import React, { Component } from 'react'
import ProductLisItem from './ProductLisItem';
import { connect } from 'react-redux';
import { Alert } from 'antd';
import { fetchProducts,addProduct } from '../actions/productAction';
export class ProductLists extends Component {

  constructor(props){
      super(props);

      this.state = {
          showerror : false
      }

      this.props.fetchProducts();
  
      this.onCartChange = this.onCartChange.bind(this);

      this.showerror = this.showerror.bind(this);
  }  
  

  onCartChange = (id) => {
      

      let productData = {
          userid : this.props.user._id,
          productid : id  
      }  

      this.props.addProduct(productData);

      
  }

  showerror = () => {

    this.setState({ showerror : true})

  }

  render() {

    let products = this.props.products;

    let alert;

    if(this.state.showerror){
        alert = <div className="ui negative message">
            <i className="close icon"></i>
            <div className="header">
                Please LogIn and try again
            </div>
        </div>
    }
    else{
        alert = ''
    }

    setTimeout(function(){
    this.setState({showerror:false});
    }.bind(this),5000);
   
    return (

        <div className="ui container">
            {alert}
        <div className="ui link cards">
            {products.map((v,i) => {
                    return <ProductLisItem key={i} id={v._id} 
                    name={v.productname} price={v.price} image={v.image} 
                    currency={v.currency} addToCart={this.onCartChange}
                    showerror={this.showerror} />
            })}
            
        </div>

        </div>
    )
  }
}

const mapStateToProps = state => ({
    user : state.user.user,
    products : state.products.products
})

export default connect(mapStateToProps,{ fetchProducts,addProduct })(ProductLists)
