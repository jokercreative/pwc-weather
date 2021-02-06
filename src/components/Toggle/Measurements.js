import React, { Component } from 'react'

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

    this.state = {

    }
  }

  handleOnChange(newUnit) {
    this.props.updateUnit(newUnit)
  }

  render() {
    return (
      <div>
        <span>Change units between metric and imperial</span>
        <button
          disabled={this.props.unit === 'imperial' ? true : ''}
          onClick={() => { this.handleOnChange('imperial')}}
        >
          Imperial
        </button>
        <button
          disabled={this.props.unit === 'metric' ? true : ''}
          onClick={() => { this.handleOnChange('metric')}}
        >
          Metric
        </button>
      </div>
    )
  }
}

export default Measurements