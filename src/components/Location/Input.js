import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
/**
 * Input component
 *
 * @namespace Input
 * @memberof Location
 */

const LocationInput = styled.input`
  border: none;
  border-bottom: 1px solid #000;
  padding: 0;

  &:hover,
  &:focus {
    outline: 0;
  }
`

class Input extends Component {
  /**
   * constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);

    this.state = {

    }

    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange(evt) {

  }

  render() {
    return (
      <Fragment>
        <LocationInput
          autoComplete="off"
          type="text"
          name="location"
          aria-label="location"
          onChange={this.handleOnChange}
        />
      </Fragment>
    )
  }
}

export default Input