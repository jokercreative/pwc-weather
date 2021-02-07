import React, { Component } from 'react'
import styled from 'styled-components'

import Location from 'Components/Location/Location'
import Toggle from 'Components/Toggle/Measurements'
import CurrentForcast from 'Components/Forcast/Current'
import WeeklyForcast from 'Components/Forcast/Weekly'

/**
 * Weather component
 *
 * @namespace Weather
 * @memberof components
 */

const Wrapper = styled.div`
  border: 1px solid #000;
  padding: 20px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

class Weather extends Component {
  /**
   * constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);

    this.state = {
      unit: 'metric',
      location: 'Melbourne'
    }

    this.updateUnit = this.updateUnit.bind(this)
    this.updateLocation = this.updateLocation.bind(this)
  }

  updateUnit(unit) {
    this.setState({unit})
  }

  updateLocation(location) {
    this.setState({location})
  }

  render() {
    const {
      unit,
      location
    } = this.state
    return (
      <Wrapper>
        <Header>
          <Location
            location={location}
            updateLocation={this.updateLocation}
          />
          <Toggle
            unit
            updateUnit={this.updateUnit}
          />
        </Header>
        <div>
          <CurrentForcast
            location={location}
          />
        </div>
        <WeeklyForcast
          location={location}
        />
      </Wrapper>
    )
  }
}

export default Weather