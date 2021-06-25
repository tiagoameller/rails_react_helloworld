import React from "react"
import PropTypes from "prop-types"
class User extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div>{this.props.user.first_name} {this.props.user.last_name}</div>
      </React.Fragment>
    );
  }
}

export default User
