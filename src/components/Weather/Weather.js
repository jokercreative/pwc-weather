import React, { Component } from 'react'
import styled from 'styled-components'

import Location from 'Components/Location/Input'
import Toggle from 'Components/Toggle/Measurements'

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
      unit: 'metric'
    }

    this.updateUnit = this.updateUnit.bind(this)
  }

  updateUnit(unit) {
    this.setState({unit})
  }

  render() {
    return (
      <Wrapper>
        <Header>
          <Location />
          <Toggle unit={this.state.unit} updateUnit={this.updateUnit}/>
        </Header>
        current
        week forcast
      </Wrapper>
    )
  }
}

export default Weather