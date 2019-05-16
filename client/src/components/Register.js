import React, { Component } from 'react'

export class Register extends Component {
  render() {
    return (
        <div className="ui raised very padded text container segment">
        <h2 className="ui header">GMCart</h2>
        
        <form className="ui form">

        <div className="field">
            <label>UserName</label>
            <input type="text" name="first-name" placeholder="UserName" />
        </div>

        <div className="field">
            <label>Email</label>
            <input type="text" name="first-name" placeholder="Email" />
        </div>

        <div className="field">
            <label>Password</label>
            <input type="password" name="first-name" placeholder="password" />
        </div>

        <div className="field">
            <label>Confirm Password</label>
            <input type="password" name="first-name" placeholder="password" />
        </div>

        <button className="ui button" type="submit">Submit</button>
        </form>
        
      </div>
    )
  }
}

export default Register
