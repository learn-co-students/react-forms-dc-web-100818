import React, { Component } from 'react'

class Form extends Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  handleFirstNameChange = (event) =>{
    this.setState({
      firstName: event.target.value
    })
    console.log(event.target.value)
  }

  handleLastNameChange = (event) =>{
    this.setState({
      lastName: event.target.value
    })
  }

//In this method, if the name attributes of our input match keys in our state,
//we can abstract out our two functions above, like so:
//handleChange = event => {
//  this.setState({
//    [event.target.name]: event.target.value
//  })
//}
  render(){
    return (
      <form>
        <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
      </form>
    )
  }
}

export default Form
