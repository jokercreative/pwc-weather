require('es6-promise').polyfill()
import axios from 'axios'

axios.defaults.validateStatus = (status) => status < 500

const weather = axios.create({
  baseURL: `${process.env.WEATHER_ENDPOINT}`,
})

export default {
  weather
}
