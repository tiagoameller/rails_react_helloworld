import React from "react"
import PropTypes from "prop-types"
import User from "./User.js"
import UserForm from "./UserForm.js"

class HelloWorld extends React.Component {
  constructor(props, context){
    super(props, context)

    this.state = {
      users: props.users,
      first_name: "",
      last_name: ""
    }
  }

  handleUserInput = (obj) => {
    this.setState(obj)
  }

  handleFormSubmit = () => {
    const user = { first_name: this.state.first_name, last_name: this.state.last_name }
    fetch("/users", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      mode: "same-origin",
      body: JSON.stringify({ user: user })
    })
    .then(response => { return response.json() })
    .then(json => { this.addNewUser(json) })
  }

  addNewUser = (user) => {
    const users = this.state.users.concat([user]).sort((a,b) => {
      return new Date(b.created_at) - new Date(a.created_at)
    })
    this.setState({ users: users })
  }

  render () {
    return (
      <React.Fragment>
        { this.state.users.map((user) => {
          return (
            <User key={user.id} user={user} />
          )
        })}
        <UserForm key="UserForm"
          onUserInput={this.handleUserInput}
          onFormSubmit={this.handleFormSubmit}
        />
      </React.Fragment>
    )
  }
}

export default HelloWorld