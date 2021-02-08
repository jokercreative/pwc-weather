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
  margin: 20px;
  background: #223344;
  color: #cadbec;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
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
      location: '',
      coordinates: {
        lon: '',
        lat: ''
      }
    }

    this.updateUnit = this.updateUnit.bind(this)
    this.updateLocation = this.updateLocation.bind(this)
    this.updateCoordinates = this.updateCoordinates.bind(this)
  }

  updateUnit(unit) {
    this.setState({unit: unit})
  }

  updateLocation(location) {
    this.setState({location: location})
  }

  updateCoordinates(coords) {
    this.setState({coordinates: coords})
  }

  render() {
    const {
      unit,
      location,
      coordinates
    } = this.state

    return (
      <Wrapper>
        <Header>
          <Location
            location={location}
            updateLocation={this.updateLocation}
          />
          <Toggle
            unit={unit}
            updateUnit={this.updateUnit}
          />
        </Header>
        <div>
          <CurrentForcast
            unit={unit}
            location={location}
            updateCoordinates={this.updateCoordinates}
          />
        </div>
        <WeeklyForcast
          unit={unit}
          location={location}
          coordinates={coordinates}
        />
      </Wrapper>
    )
  }
}

export default Weather