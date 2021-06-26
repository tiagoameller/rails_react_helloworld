import React from "react"
import PropTypes from "prop-types"
class UserForm extends React.Component {
  render () {
    return (
      <React.Fragment>
        <form>
          <h1>Make new user</h1>
          <input name="first_name" placeholder="First Name" />
          <input name="last_name" placeholder="Last Name" />
          <input type="Submit" value="Save user" readOnly />
        </form>
      </React.Fragment>
    );
  }
}

export default UserForm
