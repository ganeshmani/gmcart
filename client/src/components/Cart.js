import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Cart extends Component {
  render() {

    let user = this.props.user;

    console.log(user);
    return (
      <div>

        
      </div>
    )
  }
}
const mapStateToProps = state => ({
    user : state.user.user
})
export default connect(mapStateToProps)(Cart)
