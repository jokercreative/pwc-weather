import React, { Component } from 'react'

import Location from 'Components/Location/Input'
import Toggle from 'Components/Toggle/Measurements'
/**
 * Weather component
 *
 * @namespace Weather
 * @memberof components
 */

 class Weather extends Component {
  /**
   * constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);

    this.state = {
      unit: 'metric'
    }

    this.updateUnit = this.updateUnit.bind(this)
  }

  updateUnit(unit) {
    this.setState({unit})
  }

  render() {
    return (
      <div>
        <Location />
        <Toggle unit={this.state.unit} updateUnit={this.updateUnit}/>
        current
        week forcast
      </div>
    )
  }
}

export default Weather