import React, { Component } from 'react'
import styled from 'styled-components'
import DailyForcast from './Daily'

import {RepositoryFactory} from 'Repositories/RepositoryFactory';
const WeatherRepository = RepositoryFactory.get('weather');

const Forcast = styled.div `
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

class Weekly extends Component {

  constructor(props) {
    super(props);

    this.state = {
      forcast: []
    }
  }

  componentDidUpdate (prevProps) {
    if ((prevProps.coordinates !== this.props.coordinates) || (prevProps.unit !== this.props.unit)) {
      WeatherRepository.getForcast({
        coordinates: this.props.coordinates,
        units: this.props.unit,
        exclude: 'current,minutely,hourly,alerts'
      })
        .then((response) => {
          this.setState({
            forcast: response.data.daily
          })
        })
    }
  }

  render() {

    const {
      forcast
    } = this.state

    return (
      <Forcast>
        {forcast.map(function(data, index){
          return <DailyForcast
            forcast={data}
            key={index}
          />
        })}
      </Forcast>
    )
  }
}

export default Weekly