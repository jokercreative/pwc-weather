require('es6-promise').polyfill()
import axios from 'axios'

axios.defaults.validateStatus = (status) => status < 500

const weather = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/'
  // baseURL: `${process.env.APP_ENDPOINT}`,
});

export default {
  weather
};
