import React,{ Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { connect } from 'react-redux'

import ProductLists from './components/ProductLists';
class App extends Component {

  

  render(){

    let user = this.props.user.user ? this.props.user.user : '';

    console.log("user",user);
    
    return (

      <div className="App">
        <Navbar />
          
        <ProductLists />
      </div>
    );

  }
 
}

const mapStateToProps = state => ({
   user : state.user
})

export default connect(mapStateToProps)(App);
