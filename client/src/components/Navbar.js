import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash';
import {logoutUser} from '../actions/userAction';
import { Redirect } from 'react-router-dom'
export class Navbar extends Component {


  constructor(props){
    super(props);

    this.state = {
      redirect: false,
    }

    this.onLogOut = this.onLogOut.bind(this);

    this.setRedirect = this.setRedirect.bind(this);

    this.renderRedirect = this.renderRedirect.bind(this);
  }

  

  componentWillReceiveProps(nextprops){
     console.log(nextprops);
  }

  componentDidUpdate(){
     console.log("update->",this.props.user);
  }



  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/user/checkout' />
    }
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  onLogOut = () => {

      this.props.logoutUser();

  }

  render() {

    let  user = this.props.user.user; 
    console.log("user data =>",this.props.user.user);

    return (
      <div className="ui small menu">

        {this.renderRedirect()}
        <div className="item">
          <h3> GMCart </h3>
        </div>
        
        { !(_.isEmpty(user)) ? (
          <div className="right menu">
              <div className="item">
                  <div className="ui">{user.username}</div>
              </div>

              <div className="item" onClick={this.setRedirect}>
                    <i className="fa fa-shopping-cart"></i>
                    <i className="ui red circular label">{user.products.length}</i>
              </div>

              <div className="item">
                  <div  className="ui primary button" onClick={this.onLogOut}>LogOut</div>
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

export default connect(mapStateToProps,{logoutUser})(Navbar)
