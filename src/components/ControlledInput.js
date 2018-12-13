// Code ControlledInput Component Here
import React, { Component } from 'react';
class Form extends Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }
changeFirstName = (event) => {
  this.setState({
    firstName: event.target.value
  })
//   event.persist()
//   console.log(event.target.value)
} 
  render() {
    return (
      <form>
        <input type="text" name="firstName" value={this.state.firstName} onChange = { (event) => this.changeFirstName(event) } />
        <input type="text" name="lastName" value={this.state.lastName} />
      </form>
    )
  }
}

export default Form;
