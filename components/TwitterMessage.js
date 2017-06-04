import React from 'react';

export default class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <strong>{this.props.maxChars - this.state.value.length} characters left.</strong>
        <input type="text" onChange={this.handleChange} value={this.state.value}/>
      </div>
    );
  }
}
