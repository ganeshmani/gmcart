import React, { Component } from 'react'
import { connect } from 'react-redux'
import { registerUser } from '../actions/userAction';
export class Register extends Component {

  constructor(props){
    super(props);

    this.state = {
      showerror : false,
      username : '',
      email : '',
      password : '',
      confirmpassword : ''
    }
    this.onValueChange = this.onValueChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onValueChange = (e) => {
     e.preventDefault();
     
      this.setState({ [e.target.name] : e.target.value });
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    console.log(this.state.password);
    console.log(this.state.confirmpassword);

    if(this.state.password !== this.state.confirmpassword){

      this.setState({ showerror : true})

    }
    else{

      let data = {
        username : this.state.username,
        email : this.state.email,
        password : this.state.password
      }

      this.props.registerUser(data);

       this.props.history.push('/');

    }
  }

  render() {
    
    let alert;

    if(this.state.showerror){
        alert = <div className="ui negative message">
            <i className="close icon"></i>
            <div className="header">
                Password Mismatch
            </div>
        </div>
    }
    else{
        alert = ''
    }

    // setTimeout(function(){
    //   this.setState({showerror:false});
    //   }.bind(this),5000);

    return (
        <div className="ui raised very padded text container segment">
          {alert}
        <h2 className="ui header">GMCart</h2>
        
        <form className="ui form" onSubmit={this.onFormSubmit}>

        <div className="field">
            <label>UserName</label>
            <input type="text" name="username" onChange={this.onValueChange}  value={this.state.username} placeholder="UserName" />
        </div>

        <div className="field">
            <label>Email</label>
            <input type="text" name="email" onChange={this.onValueChange}  value = { this.state.email }  placeholder="Email" />
        </div>

        <div className="field">
            <label>Password</label>
            <input type="password" name="password" onChange={this.onValueChange} value={ this.state.password }   placeholder="password" />
        </div>

        <div className="field">
            <label>Confirm Password</label>
            <input type="password" name="confirmpassword" onChange={this.onValueChange} value={ this.state.confirmpassword } placeholder="password" />
        </div>

        <button className="ui button" type="submit">Submit</button>
        </form>
        
      </div>
    )
  }
}

export default connect(null,{ registerUser })(Register)
