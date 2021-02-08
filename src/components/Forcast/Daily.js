import React, { Component } from 'react'
import { format } from 'date-fns'
import fromUnixTime from 'date-fns/fromUnixTime'
import styled from 'styled-components'

/**
 * Daily component
 *
 * @namespace Daily
 * @memberof Forcast
 */

class Daily extends Component {

  constructor(props) {
    super(props);

    this.state = {}
  }

  // create classname for icon based on weather description
  iconClass(desc) {
    return `icon icon-${desc.toLowerCase()}`
  }

  render() {

    const {
      forcast
    } = this.props

    return (
      <Forcast>
        <Day>{format(fromUnixTime(forcast.dt), 'EEEE')}</Day>
        <Icon>
          <i className={this.iconClass(forcast.weather[0].main)}></i>
          <span className="sr-only">{forcast.weather[0].main}</span>
        </Icon>
        <span>L: {forcast.temp.min}&deg;</span>
        <span>H: {forcast.temp.max}&deg;</span>
      </Forcast>
    )
  }
}

/**
 * Component specific styling
 */

const Forcast = styled.div `
  display: flex;
  flex-direction: column;
  text-align: center;
  flex: 1 1 auto;

  @media (max-width: 768px) {
    text-align: left;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

const Day = styled.h3`
  font-weight: bold;
  font-size: 1.8rem;
  margin: 0;

  @media (max-width: 768px) {
    width: 30%;
    font-size: 1.4rem;
  }
`

const Icon = styled.span`
  text-align: center;
  margin: 10px 0;

  i {
    font-size: 4rem;
    color: #10c1ff;
  }
`

export default Daily