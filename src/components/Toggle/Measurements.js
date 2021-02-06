import React, { Component } from 'react'
import styled from 'styled-components'

/**
 * Measurements component
 *
 * @namespace Measurements
 * @memberof Toggle
 */

const Button = styled.button`
  background: none;
  border: none;
`

class Measurements extends Component {
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

  handleOnChange(newUnit) {
    this.props.updateUnit(newUnit)
  }

  render() {
    return (
      <div aria-label="Change units between metric and imperial">
        <Button
          disabled={this.props.unit === 'imperial' ? true : ''}
          onClick={() => { this.handleOnChange('imperial')}}
          type="button"
        >
          Imperial
        </Button>
        <Button
          disabled={this.props.unit === 'metric' ? true : ''}
          onClick={() => { this.handleOnChange('metric')}}
          type="button"
        >
          Metric
        </Button>
      </div>
    )
  }
}

export default Measurements