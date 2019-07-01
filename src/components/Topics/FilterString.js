import React, { Component } from 'react';

class FilterString extends Component {
  constructor() {
    super();

    this.state = {
      unFilteredArray: [
        'NolanJames',
        'Jlevel',
        'Smooth',
        'PrityBoi',
        'PhilyPhakeout',
        'RileySegspert'
      ],
      userInput: '',
      filteredArray: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ userInput: e.target.value });
  }

  handleClick() {
    let filtered = this.state.unFilteredArray.filter(
      a => a.toLowerCase().indexOf(this.state.userInput.toLowerCase()) >= 0
    );
    this.setState({ filteredArray: filtered });
  }

  render() {
    return (
      <div className='puzzleBox filterStringPB'>
        <h4>Filter String</h4>
        <span className='puzzleText'>
          Names: {JSON.stringify(this.state.unFilteredArray)}
        </span>
        <input className='inputLine' onChange={this.handleChange} />
        <button className='confirmationButton' onClick={this.handleClick}>
          Filter
        </button>
        <span className='resultsBox filterStringRB'>
          Filtered Names: {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}

export default FilterString;
