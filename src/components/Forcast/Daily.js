import React, { Component } from 'react'
import { format } from 'date-fns'
import fromUnixTime from 'date-fns/fromUnixTime'
import styled from 'styled-components'

const Forcast = styled.div `
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`

class Daily extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  iconClass(desc) {
    return `icon icon-${desc.toLowerCase()}`
  }

  render() {

    const {
      forcast
    } = this.props

    return (
      <Forcast>
        <span>{format(fromUnixTime(forcast.dt), 'EEEE')}</span>
        <span>{forcast.weather[0].main}</span>
        <i className={this.iconClass(forcast.weather[0].main)}></i>
        <span>{forcast.temp.min}</span>
        <span>{forcast.temp.max}</span>
      </Forcast>
    )
  }
}

export default Daily