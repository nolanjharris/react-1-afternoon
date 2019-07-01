import React, { Component } from 'react';

class Duplicates extends Component {
  constructor() {
    super();

    this.state = {
      dupes: [],
      dupesAmount: 0,
      userInput: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ userInput: e.target.value });
  }

  handleClick() {
    let dupeCount = 0;
    let dupeArray = [];
    let str = this.state.userInput;
    for (let i = 0; i < str.length; i++) {
      if (
        str.indexOf(str[i].toLowerCase()) !== i &&
        dupeArray.indexOf(str[i].toLowerCase) < 0
      ) {
        dupeCount++;
        dupeArray.push(str[i].toLowerCase());
      }
    }
    console.log(dupeArray);
    this.setState({ dupes: dupeArray, dupeAmount: dupeCount });
  }

  render() {
    return (
      <div className='puzzleBox palindromePB'>
        <h4>Duplicates</h4>
        <input className='inputLine' onChange={this.handleChange} />
        <button className='confirmationButton' onClick={this.handleClick}>
          Check for Duplicates
        </button>
        <span className='resultsBox'>
          Duplicates: {this.state.dupeAmount} &nbsp;
          {JSON.stringify(this.state.dupes)}
        </span>
      </div>
    );
  }
}

export default Duplicates;
