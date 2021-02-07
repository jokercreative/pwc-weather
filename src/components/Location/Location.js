import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
/**
 * Input component
 *
 * @namespace Location
 * @memberof Location
 */

const Form = styled.form`

`

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #000;
  padding: 0;

  &:hover,
  &:focus {
    outline: 0;
  }
`

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

  handleOnChange(evt) {
    const {value} = evt.target
    this.setState({ value })
  }

  handleFormSubmit(evt) {
    evt.preventDefault()
    this.props.updateLocation(this.state.value)
  }

  render() {

    const {
      value
    } = this.state

    return (
      <Form
        onSubmit={this.handleFormSubmit}
        noValidate
      >
        <Input
          autoComplete="off"
          type="text"
          name="location"
          aria-label="location"
          onChange={this.handleOnChange}
          value={value}
        />
      </Form>
    )
  }
}

export default Location