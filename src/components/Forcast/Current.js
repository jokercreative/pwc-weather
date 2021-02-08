import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import fromUnixTime from 'date-fns/fromUnixTime'

import {RepositoryFactory} from 'Repositories/RepositoryFactory';
const WeatherRepository = RepositoryFactory.get('weather');

/**
 * Current component
 *
 * @namespace Current
 * @memberof Forcast
 */

class Current extends Component {
  /**
   * constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);

    this.state = {
      date: '',
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

    this.convertWindSpeed = this.convertWindSpeed.bind(this)
    this.fetchData = this.fetchData.bind(this)
  }

  componentDidMount () {
    // Call API endpoint to receive weather based on location.
    this.fetchData()
  }

  componentDidUpdate (prevProps) {
    // If unit is updated, get new data
    if (prevProps.unit !== this.props.unit) {
      this.fetchData()
    }
  }

  fetchData() {
    // Using the repository to fetch the current forcast api. API doc can be found at https://openweathermap.org/current
    WeatherRepository.getCurrent({
      location: this.props.location,
      units: this.props.unit
    })
      .then((response) => {
        this.setState({
          date: response.data.dt,
          weather: {
            ...response.data.weather[0]
          },
          temperature: {
            ...response.data.main,
            current: response.data.main.temp
          },
          wind: response.data.wind
        })

        this.props.updateCoordinates(response.data.coord)
      })
  }

  // create classname for icon based on weather description
  iconClass(desc) {
    if(!desc) return
    return `icon icon-${desc.toLowerCase()}`
  }

  // get cardinal direction based on returned deg
  getCardinal(num) {
    var val = Math.floor((num / 22.5) + 0.5)
    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"]
    return arr[(val % 16)]
  }

  // convert the wind speed based on prefered unit
  convertWindSpeed(speed) {
    const perHour = this.props.unit === "metric" ? speed * 3.6 : speed
    const speedUnit = this.props.unit === "metric" ? "kph" : "mph"

    return `${perHour.toFixed(2)} ${speedUnit}`
  }

  render() {

    const {
      weather,
      temperature,
      wind,
      date
    } = this.state

    return (
      <Wrapper>
        <Date>{format(fromUnixTime(date), 'EEEE, MMMM do')}</Date>
        <ForcastWrapper>
          <div>
            <Temperature>{temperature.current}&deg;</Temperature>
            <Description>{weather.main}</Description>
          </div>

          <div>
            <Icon>
              <i className={this.iconClass(weather.main)}></i>
              <span className="sr-only">{weather.description}</span>
            </Icon>
          </div>

          <div>
            <List>
              <ListItem>Feels like: <b>{temperature.feels_like}&deg;</b></ListItem>
              <ListItem>Humidity: <b>{temperature.humidity}%</b></ListItem>
              <ListItem>Wind: <b>{this.convertWindSpeed(wind.speed)} {this.getCardinal(wind.deg)}</b></ListItem>
            </List>
          </div>
        </ForcastWrapper>
      </Wrapper>
    )
  }
}

/**
 * Component specific styling
 */

const Wrapper = styled.div`
  margin: 20px 0 30px;
`

const ForcastWrapper = styled.div`
  display: flex;

  > div + div {
    margin-left: 30px;
    display: flex;
    align-items: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    > div + div {
      margin-left: 0;
      margin-top: 15px;
    }
  }
`

const Date = styled.p`
  margin-bottom: 15px;
  font-size: 1.8rem;
`

const Temperature = styled.h2`
  font-size: 4rem;
  margin: 0 0 5px;
`

const Description = styled.p`
  font-size: 2rem;
  margin: 0;
`

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const ListItem = styled.li`
  margin: 0;
  padding: 0;

  + li {
    margin-top: 5px;
  }
`

const Icon = styled.span`
  i {
    font-size: 8rem;
    color: #10c1ff;
  }
`

export default Current