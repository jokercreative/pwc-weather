import Respository from '../Repository';

const api = Respository.weather;
const resource = 'weather';

export default {
  getCurrent(payload) {
    console.log(payload)

    return new Promise((resolve) => {
      resolve({
        coord: { lon: 151.21, lat: -33.87 },
        weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01n" }],
        base: "stations",
        main: {
          temp: 10.41,
          feels_like: 5.09,
          temp_min: 10,
          temp_max: 11.11,
          pressure: 1012,
          humidity: 51,
        },
        visibility: 10000,
        wind: { speed: 4.92, deg: 270, gust: 6.26 },
        clouds: { all: 8 },
        dt: 1598185476,
        sys: { type: 3, id: 2001174, country: "AU", sunrise: 1598127906, sunset: 1598167856 },
        timezone: 36000,
        id: 2147714,
        name: "Sydney",
        cod: 200,
      });
    })

    // return api.get('weather', {
    //   params: {
    //     q: payload,
    //     appid: `${process.env.APP_ENDPOINT}`,
    //   },
    // });
  },
  getForcast(payload) {
    console.log(payload)

    return new Promise((resolve) => {
      resolve({
        lat: -33.87,
        lon: 151.21,
        timezone: "Australia/Sydney",
        timezone_offset: 36000,
        daily: [
          {
            dt: 1598144400,
            sunrise: 1598127906,
            sunset: 1598167856,
            temp: { day: 11.38, min: 11.12, max: 11.38, night: 11.12, eve: 11.38, morn: 11.38 },
            feels_like: { day: 4.42, night: 3.27, eve: 4.42, morn: 4.42 },
            pressure: 1011,
            humidity: 50,
            dew_point: 1.34,
            wind_speed: 7.4,
            wind_deg: 261,
            weather: [{ id: 801, main: "Clouds", description: "few clouds", icon: "02n" }],
            clouds: 20,
            pop: 0.05,
            uvi: 3.79,
          },
          {
            dt: 1598230800,
            sunrise: 1598214233,
            sunset: 1598254298,
            temp: { day: 11.65, min: 8.35, max: 14.39, night: 9.59, eve: 13.7, morn: 9.07 },
            feels_like: { day: 6.31, night: 3.93, eve: 9.39, morn: 2.94 },
            pressure: 1019,
            humidity: 45,
            dew_point: 0.38,
            wind_speed: 4.82,
            wind_deg: 243,
            weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
            clouds: 0,
            pop: 0,
            uvi: 3.83,
          },
          {
            dt: 1598317200,
            sunrise: 1598300560,
            sunset: 1598340739,
            temp: { day: 10.91, min: 6.79, max: 13.17, night: 10.54, eve: 12.95, morn: 7.19 },
            feels_like: { day: 7.24, night: 7.46, eve: 9.68, morn: 2.3 },
            pressure: 1027,
            humidity: 58,
            dew_point: 3.03,
            wind_speed: 3.09,
            wind_deg: 221,
            weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
            clouds: 0,
            pop: 0.2,
            uvi: 3.79,
          },
          {
            dt: 1598403600,
            sunrise: 1598386885,
            sunset: 1598427180,
            temp: { day: 12.73, min: 7.37, max: 16.04, night: 11.87, eve: 14.71, morn: 7.66 },
            feels_like: { day: 9.22, night: 10.25, eve: 10.63, morn: 3.46 },
            pressure: 1030,
            humidity: 47,
            dew_point: 1.97,
            wind_speed: 2.55,
            wind_deg: 269,
            weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
            clouds: 0,
            pop: 0,
            uvi: 3.77,
          },
          {
            dt: 1598490000,
            sunrise: 1598473210,
            sunset: 1598513621,
            temp: { day: 13.34, min: 8.56, max: 17.66, night: 12.28, eve: 17.41, morn: 8.69 },
            feels_like: { day: 9.42, night: 8.4, eve: 14.4, morn: 5.74 },
            pressure: 1027,
            humidity: 49,
            dew_point: 2.94,
            wind_speed: 3.42,
            wind_deg: 287,
            weather: [{ id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }],
            clouds: 81,
            pop: 0,
            uvi: 4.19,
          },
          {
            dt: 1598576400,
            sunrise: 1598559535,
            sunset: 1598600063,
            temp: { day: 15.89, min: 10.15, max: 20.5, night: 14.45, eve: 20.5, morn: 10.15 },
            feels_like: { day: 12.33, night: 11.67, eve: 17.95, morn: 6.37 },
            pressure: 1026,
            humidity: 53,
            dew_point: 6.41,
            wind_speed: 3.87,
            wind_deg: 272,
            weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
            clouds: 0,
            pop: 0,
            uvi: 4.32,
          },
          {
            dt: 1598662800,
            sunrise: 1598645858,
            sunset: 1598686503,
            temp: { day: 16.93, min: 11.12, max: 22.12, night: 16.34, eve: 22.12, morn: 11.45 },
            feels_like: { day: 13.66, night: 12.12, eve: 19.42, morn: 8.46 },
            pressure: 1023,
            humidity: 49,
            dew_point: 6.26,
            wind_speed: 3.4,
            wind_deg: 319,
            weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
            clouds: 0,
            pop: 0,
            uvi: 4.4,
          },
          {
            dt: 1598749200,
            sunrise: 1598732181,
            sunset: 1598772944,
            temp: { day: 17.82, min: 12.62, max: 17.82, night: 12.62, eve: 15.36, morn: 15.41 },
            feels_like: { day: 12.09, night: 9.18, eve: 10.37, morn: 10.46 },
            pressure: 1021,
            humidity: 45,
            dew_point: 5.78,
            wind_speed: 6.79,
            wind_deg: 234,
            weather: [{ id: 802, main: "Clouds", description: "scattered clouds", icon: "03d" }],
            clouds: 37,
            pop: 0,
            uvi: 4.12,
          },
        ],
      });
    })

    // return api.get('onecall', {
    //   params: {
    //     lat: payload,
    //     lon: payload,
    //     exclude: payload,
    //     units: payload,
    //     appid: `${process.env.APP_ENDPOINT}`,
    //   },
    // });
  }
}