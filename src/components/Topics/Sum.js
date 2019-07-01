import React, { Component } from 'react';

class Sum extends Component {
  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    };

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange1(e) {
    this.setState({ number1: e.target.value });
  }

  handleChange2(e) {
    this.setState({ number2: e.target.value });
  }

  handleClick() {
    let sum = this.state.number1 * 1 + this.state.number2 * 1;
    this.setState({ sum: sum });
  }

  render() {
    return (
      <div className='puzzleBox sumPB'>
        <h4>Sum</h4>
        <input className='inputLine' onChange={this.handleChange1} />
        <input className='inputLine' onChange={this.handleChange2} />
        <button className='confirmationButton' onClick={this.handleClick}>
          Add
        </button>
        <span className='resultsBox'>Sum: {this.state.sum}</span>
      </div>
    );
  }
}

export default Sum;
