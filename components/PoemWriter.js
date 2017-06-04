import React from 'react';

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

  validatePoem(poem) {
     let poemArr = poem.split('\n').filter(function(x) {return x});
    return (
            validateLine(poemArr[0], 5) &&
            this.validateLine(poemArr[1], 3) &&
            this.validateLine(poemArr[2], 5) &&
            poemArr.length === 3
          );
  }

 validateLine(line, wordCount) {
      if (line) {
        return line.split(' ').filter(function(x) {return x}).length == wordCount
      } else {
        return false
      }
  }

  handleChange(event) {
    if (event.target.value) {
          this.setState({
          value: event.target.value,
          validPoem: this.validatePoem( event.target.value)
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
