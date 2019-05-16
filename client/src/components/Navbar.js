import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash';

export class Navbar extends Component {



  render() {

    let  user = this.props.user.user; 
    console.log(this.props.user.user);

    

    return (
      <div className="ui small menu">

        
        <div className="item">
          <h3> GMCart </h3>
        </div>
        
        { !(_.isEmpty(user)) ? (
          <div className="right menu">
              <div className="item">
                  <div className="ui">{user.username}</div>
              </div>

              <div className="item">
                    <i class="fa fa-shopping-cart"></i>
                    <i className="ui red circular label">{user.products.length}</i>
              </div>

              <div className="item">
                  <div className="ui primary button">LogOut</div>
              </div>
          </div>
        ) :

          (

            <div className="right menu">
            
                <div className="item">
                  <a href="/user/login"  className="ui primary button">Log In</a>
              </div>

              <div className="item">
                  <a href="/user/register"  className="ui primary button">SignUp</a>
              </div>
            
            </div>
            
          )
        }
        </div>
    )
  }
}

const mapStateToProps = state => ({
   
   user : state.user

})

export default connect(mapStateToProps)(Navbar)
