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

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.coordinates !== this.props.coordinates) {
      WeatherRepository.getForcast(this.props.coordinates)
        .then((response) => {
          this.setState({
            forcast: response.daily
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