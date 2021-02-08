import Respository from '../Repository';
const api = Respository.weather;

// List of API endpoints available for weather forcasts based on https://openweathermap.org/

export default {
  getCurrent(payload) {
    return api.get('weather', {
      params: {
        q: payload.location,
        units: payload.units,
        appid: `${process.env.WEATHER_API_KEY}`,
      },
    });
  },
  getForcast(payload) {
    return api.get('onecall', {
      params: {
        lat: payload.coordinates.lat,
        lon: payload.coordinates.lon,
        units: payload.units,
        exclude: payload.exclude,
        appid: `${process.env.WEATHER_API_KEY}`,
      },
    });
  }
}
