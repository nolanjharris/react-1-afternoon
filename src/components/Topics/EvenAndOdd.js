import React, { Component } from 'react';

class EvenAndOdd extends Component {
  constructor() {
    super();

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    let evens = this.state.userInput
      .split(',')
      .filter(a => a % 2 === 0)
      .join(',');
    let odds = this.state.userInput
      .split(',')
      .filter(a => a % 2 !== 0)
      .join(',');
    this.setState({ evenArray: evens, oddArray: odds });
  }

  handleChange(e) {
    this.setState({ userInput: e.target.value });
  }

  render() {
    return (
      <div className='puzzleBox evenAndOddPB'>
        <h4>Evens and Odds</h4>
        <input className='inputLine' onChange={this.handleChange} />
        <button className='confirmationButton' onClick={this.handleClick}>
          Split
        </button>
        <span className='resultsBox'>Evens: [{this.state.evenArray}]</span>
        <span className='resultsBox'>Odds: [{this.state.oddArray}]</span>
      </div>
    );
  }
}

export default EvenAndOdd;
