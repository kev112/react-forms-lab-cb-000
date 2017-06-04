import React from 'react';

function validatePoem(poem) {
   let poemArr = poem.split('\n').filter(function(x) {return x});
  return (
          validateLine(poemArr[0], 5) &&
          validateLine(poemArr[1], 3) &&
          validateLine(poemArr[2], 5) &&
          poemArr.length === 3
        );
}

function validateLine(line, wordCount) {
    if (line) {
      return line.split(' ').filter(function(x) {return x}).length == wordCount
    } else {
      return false
    }
}

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {value: ' '};
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    if (event.target.value) {
          this.setState({
          value: event.target.value,
          validPoem: validatePoem( event.target.value)
          });
      }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.handleChange} value={this.state.value}/>
        {this.state.validPoem ? <div/> : <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>}
      </div>
    );
  }
}
