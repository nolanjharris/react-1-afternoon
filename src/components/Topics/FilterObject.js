import React, { Component } from 'react';

class FilterObject extends Component {
  constructor() {
    super();

    this.state = {
      unFilteredArray: [
        {
          name: 'Nolan',
          age: 29,
          baller: true
        },
        {
          name: 'Jose',
          age: 27,
          baller: true,
          homie: true
        },
        {
          name: 'Kent',
          age: 27,
          homie: true
        }
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
      a => a[this.state.userInput]
    );
    console.log(filtered);
    this.setState({ filteredArray: filtered });
  }

  render() {
    return (
      <div className='puzzleBox filterObjectPB'>
        <h4>Filter Object</h4>
        <span className='puzzleText'>
          Original: {JSON.stringify(this.state.unFilteredArray)}
        </span>
        <input className='inputLine' onChange={this.handleChange} />
        <button className='confirmationButton' onClick={this.handleClick}>
          Filter
        </button>
        <span className='resultsBox filterObjectPB'>
          Filtered: {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}

export default FilterObject;
