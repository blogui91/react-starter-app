import React, { Component } from 'react';
import { Label, FormGroup, Form, Button, Input } from 'reactstrap'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.storeInputValue = this.storeInputValue.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      disabled: false,
      username: null,
      password: null
    }
  }

  storeInputValue(e) {
    const {
      name,
      value
    } = e.target;
    this.setState({
      [name]: value
    })
    console.log(this.state)
  }

  handleSubmit(e) {
    e.preventDefault();
    const vm = this
    this.setState({ submitted: true, disabled: true });
    const { username, password } = this.state;
    console.log(username, password)
    setTimeout(() => {
      vm.setState({
        disabled: false
      });
    }, 5000)
  }

  render () {
    return (
      <Form className="LoginView" onSubmit={this.handleSubmit} autoComplete='off' method="POST">
        <Input type="hidden" autoComplete="false"/>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="username" id="exampleEmail" value={this.username} placeholder="Write your email"  onChange={this.storeInputValue} />
        </FormGroup>
        <FormGroup>
          <Label for="Inputpassword">Password</Label>
          <Input type="password" name="password" id="Inputpassword" value={this.password} placeholder="Write your email"  onChange={this.storeInputValue} />
        </FormGroup>
        <br />
        <Button type="submit" disabled={this.state.disabled}> Iniciar </Button>
      </Form>
    )
  }
}
