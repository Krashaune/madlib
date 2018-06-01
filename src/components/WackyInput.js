import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WackyInput extends Component {
  static propTypes = {
    words: PropTypes.array.isRequired
  };


  render(){
    const neededWords = this.props.words.map((word, key) => {
      return (
        <div key={key}>
          <label htmlFor={word.key}></label>
          <input
            name={word.key}
            placeholder={word.label}
            ></input>
        </div>
      )

    });

    return (
      <form>
          {neededWords}
      </form>
    );
  }
}
export default WackyInput
