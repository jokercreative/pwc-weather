import React, { Component } from 'react'
import styled from 'styled-components'

/**
 * Measurements component
 *
 * @namespace Measurements
 * @memberof Toggle
 */

class Measurements extends Component {
  /**
   * constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);

    this.state = {}

    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange(newUnit) {
    this.props.updateUnit(newUnit)
  }

  render() {
    return (
      <Wrapper aria-label="Change units between metric and imperial">
        <Button
          disabled={this.props.unit === 'metric' ? true : ''}
          onClick={() => { this.handleOnChange('metric')}}
          type="button"
        >
          Metric
        </Button> |
        <Button
          disabled={this.props.unit === 'imperial' ? true : ''}
          onClick={() => { this.handleOnChange('imperial')}}
          type="button"
        >
          Imperial
        </Button>
      </Wrapper>
    )
  }
}

/**
 * Component specific styling
 */

const Wrapper = styled.div`
  @media (max-width: 768px) {
    text-align: right;
  }
`

const Button = styled.button`
  background: none;
  border: none;
  color: #10c1ff;

  &:disabled {
    color: #cadbec;
  }

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`

export default Measurements