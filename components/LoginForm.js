import React from 'react';

export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      id: '',
      password: ''
    };
    this.handleId = this.handleId.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault()
    if ((this.state.id.length > 0) && (this.state.password.length > 0)) {
      this.props.onSubmit();
    } else {
      alert('id or password not filled in!')
    }
  }


  handleId(event) {
    this.setState({id: event.target.value});
  }

  handlePassword(event) {
    this.setState({password: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}  >
        <div>
          <label>
            Username
            <input id="test-username" type="text" value="this.state.id" onChange={this.handleId}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value="this.state.password" onChange={this.handlePassword}/>
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}
