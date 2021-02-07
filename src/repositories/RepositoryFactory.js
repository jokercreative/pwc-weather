import WeatherRepository from './Weather/weather.repository';

const repositories = {
  weather: WeatherRepository
};

export const RepositoryFactory = {
  get: (name) => repositories[name],
};
