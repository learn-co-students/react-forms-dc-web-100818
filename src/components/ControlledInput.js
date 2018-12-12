// Code ControlledInput Component Here
import React, {Component} from 'react'

export default class ControlledInput extends Component{

  //controlled form = form that derives its input values from state
  //controlling forms = more convenient to share form values between components
  //easily passed down as props or upward via a function supplied in props

state = {
  firstName: "John",
  lastName: "Henry"
}

handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}
//
// handleFirstNameChange = (e) => {
//   this.setState({
//     firstName: e.target.value
//   })
// }
//
// handleLastNameChange = (e) => {
//   this.setState({
//     lastName: e.target.value
//   })
// }

render(){
    return(
  <form>
    <input type="text" name="firstName" id="firstName" onChange={e => this.handleChange(e)} value={this.state.firstName} />
      <input type="text" name="lastName" id="lastName" onChange={e => this.handleChange(e)} value={this.state.lastName} />
  </form>
  )
  }
}
