import React, { Component, Fragment } from 'react'

import {RepositoryFactory} from 'Repositories/RepositoryFactory';
const WeatherRepository = RepositoryFactory.get('weather');

class Current extends Component {

  constructor(props) {
    super(props);

    this.state = {
      weather: {
        description: '',
        icon: ''
      },
      temperature: {
        current: '',
        pressure: '',
        humidity: '',
        min: '',
        max: ''
      },
      wind: {
        speed: '',
        deg: ''
      }
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.location !== this.props.location) {
      WeatherRepository.getCurrent(this.props.location)
        .then((response) => {
          this.setState({
            weather: {
              ...response.weather[0]
            },
            temperature: {
              ...response.main,
              current: response.main.temp
            },
            wind: response.wind
          })

          this.props.updateCoordinates(response.coord)
        })
    }
  }

  iconClass(desc) {
    if(!desc) return
    return `icon icon-${desc.toLowerCase()}`
  }

  render() {

    const {
      weather,
      temperature,
      wind
    } = this.state

    return (
      <Fragment>
        <span>Description {weather.main}</span>
        <i className={this.iconClass(weather.main)}></i>
        <span>current {temperature.current}</span>
        <span>humidity {temperature.humidity}</span>
        <span>wind speed {wind.speed}</span>
        <span>wind deg {wind.deg}</span>
      </Fragment>
    )
  }
}

export default Current