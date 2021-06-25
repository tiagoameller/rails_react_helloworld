import React from "react"
import PropTypes from "prop-types"
import User from "./User.js"
class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        { this.props.users.map((user) => {
          return (
            <User key={user.id} user={user} />
          )
        })}
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
