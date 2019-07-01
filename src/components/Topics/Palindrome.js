import React, { Component } from 'react';

class Palindrome extends Component {
  constructor() {
    super();

    this.state = {
      userInput: '',
      palindrome: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ userInput: e.target.value });
  }

  handleClick() {
    let bool =
      this.state.userInput
        .split('')
        .reverse()
        .join('') === this.state.userInput;
    this.setState({ palindrome: String(bool) });
  }

  render() {
    return (
      <div className='puzzleBox palindromePB'>
        <h4>Palindrome</h4>
        <input className='inputLine' onChange={this.handleChange} />
        <button className='confirmationButton' onClick={this.handleClick}>
          Check
        </button>
        <span className='resultsBox'>Palindrome: {this.state.palindrome} </span>
      </div>
    );
  }
}

export default Palindrome;
