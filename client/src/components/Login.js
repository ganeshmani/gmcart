import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser }   from '../actions/userAction';
export class Login extends Component {

  constructor(props){
      super(props);


      this.state = {
          username : '',
          password : ''
      }

      this.onSubmit = this.onSubmit.bind(this);
      this.onChange = this.onChange.bind(this);
  }    

  onSubmit = (e) => {
    e.preventDefault();
    

    const userData = {
        username : this.state.username,
        password : this.state.password
    }

    this.props.loginUser(userData);
    

    this.props.history.push('/');
  }

  onChange = (e) => {
      e.preventDefault();
      this.setState({ [e.target.name] : e.target.value })
  }

  
  render() {
    return (
        <div className="ui raised very padded text container segment">
        <h2 className="ui header">GMCart</h2>
        
        <form className="ui form" onSubmit={this.onSubmit}>

        <div className="field">
            <label>UserName</label>
            <input type="text" name="username" onChange={this.onChange}  value={this.state.username} placeholder="UserName or Email" />
        </div>

        <div className="field">
            <label>Password</label>
            <input type="password" name="password" onChange={this.onChange} value={this.state.password} placeholder="password" />
        </div>

        <button className="ui button" type="submit">Submit</button>
        </form>
        
      </div>
    )
  }
}

export default connect(null,{loginUser})(Login)
