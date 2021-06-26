import React from "react"
import PropTypes from "prop-types"
import ReactDOM from "react-dom"
class UserForm extends React.Component {
  handleChange = (e) => {
    const object = {}
    object[e.target.name] = e.target.value
    this.props.onUserInput(object)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onFormSubmit()
  }

  render () {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <h1>Make new user</h1>
            <input name="first_name" placeholder="First Name" onChange={this.handleChange} />
            <input name="last_name" placeholder="Last Name" onChange={this.handleChange}  />
            <input type='Submit' value='Save User' readOnly/>
          </form>
      </React.Fragment>
    )
  }
}

export default UserForm