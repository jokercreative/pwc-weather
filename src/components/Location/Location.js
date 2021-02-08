import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

/**
 * Location Input component
 *
 * @namespace Location
 * @memberof Location
 */

class Location extends Component {
  /**
   * constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);

    this.state = {
      value: props.location
    }

    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  // if location is changed, clear location from app
  handleOnChange(evt) {
    const {value} = evt.target
    this.setState({ value })
    this.props.updateLocation('')
  }

  // update location in parent component
  handleFormSubmit(evt) {
    evt.preventDefault()
    this.props.updateLocation(this.state.value)
  }

  render() {

    const {
      value
    } = this.state

    return (
      <form
        onSubmit={this.handleFormSubmit}
        noValidate
      >
        <Input
          autoComplete="off"
          type="text"
          name="location"
          aria-label="location"
          placeholder="Enter location"
          onChange={this.handleOnChange}
          value={value}
        />
      </form>
    )
  }
}

/**
 * Component specific styling
 */

const Input = styled.input`
  border: none;
  background: transparent;
  border-bottom: 2px solid #cadbec;
  padding: 0;
  font-weight: bold;
  font-size: 2.8rem;
  padding-bottom: 5px;
  width: 100%;
  color: #cadbec;
  transition: border 150ms ease-out;

  &:focus {
    outline: 0;
    border-bottom: 2px solid #10c1ff;
  }

  @media (max-width: 768px) {
    margin-top: 15px;
    font-size: 2.4rem;
  }

  ::placeholder,
  ::-webkit-input-placeholder,
  :-ms-input-placeholder {
    color: #AFBCC8;
  }

`

export default Location
