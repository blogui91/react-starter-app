import React, { Component } from 'react';
import { Label, FormGroup, Form, Button, Input } from 'reactstrap'
import { oauth } from 'oauth'
import NotificationAlert from "react-notification-alert"

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
    window.oauth = oauth
  }

  storeInputValue(e) {
    const {
      name,
      value
    } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const vm = this
    this.setState({ submitted: true, disabled: true });
    const { username, password } = this.state;

    oauth.login(username, password)
      .then(response => {
        vm.setState({
          disabled: false
        });
        this.props.history.push('/admin/dashboard')
      })
      .catch(error => {
        vm.setState({
          disabled: false
        });
        this.notify()
        console.log(error)
      })
  }

  notify = () => {
    if (this.refs.notificationAlert) {
      var type = 'danger';
      var options = {};
      options = {
        place: 'tr',
        message: (
          <div>
            <div>
              Authentication error, your username or password is not correct.
            </div>
          </div>
        ),
        type: type,
        icon: "tim-icons icon-bell-55",
        autoDismiss: 7
      };
      this.refs.notificationAlert.notificationAlert(options);
    }
  };

  render () {
    return (
      <div style={{padding: '80px 0 80px 0'}}>
        <div className="react-notification-alert-container">
          <NotificationAlert ref="notificationAlert" />
        </div>
        <div className="content">
          <Form className="LoginView" onSubmit={this.handleSubmit} autoComplete='off' method="POST">
            <Input type="hidden" autoComplete="false"/>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="username" id="exampleEmail" value={this.username} placeholder="Write your email" required  onChange={this.storeInputValue} />
            </FormGroup>
            <FormGroup>
              <Label for="Inputpassword">Password</Label>
              <Input type="password" name="password" id="Inputpassword" value={this.password} placeholder="Write your password" required onChange={this.storeInputValue} />
            </FormGroup>
            <br />
            <Button type="submit" disabled={this.state.disabled}> { this.state.disabled ? 'Loading...' : 'Log in' } </Button>
          </Form>
        </div>
      </div>
    )
  }
}
