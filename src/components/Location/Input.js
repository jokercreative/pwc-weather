import React, { Component } from 'react'

/**
 * Input component
 *
 * @namespace Input
 * @memberof Location
 */

 class Input extends Component {
  /**
   * constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);

    this.state = {

    }

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(evt) {

  }

  render() {
    return (
      <div>
        <label
          htmlFor="location"
        >
          Location
        </label>
        <input
          autoComplete="off"
          type="text"
          name="location"
          id="location"
          onChange={this.handleOnChange}
        />
      </div>
    )
  }
}

export default Input