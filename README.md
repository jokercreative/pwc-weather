# PWC Weather Web Coding Challange

This responsive, accessible weather widget provides the current and weekly weather forcast for a given location.
It has been built utilising the [React](https://reactjs.org/) framework with the ability to be added to a larger application.

Features include:
- Current and Weekly Weather forcast
- Accessilbe for screenreaders
- Using [OpenWeatherMap](https://openweathermap.org/) to source the weather data
- Abilty to switch between imperial and metric units
- Allows users to enter a location in which to view the weather forcast for

## Package Versions

 - **NPM** - v14.14.4
 - **Webpack** - v4
 - **Babel** - v7
 - **React** - v17


## Roadmap
- Use Geolocation API to autopopulate based on users location
- Add autocomplete and forward geocoding for location if user enters location manually
- Add state management to remember previous entered location
- Add loading states

## Getting started

Git clone the repository and run the following commands in the root folder:
```sh
$ npm install
```

Before running the application locally, you'll need to obtain an APPID key from [OpenWeatherMap](https://openweathermap.org/price).
Then create a .env file in the root of the project with the following keys:
```sh
WEATHER_ENDPOINT=REPLACE_WITH_URL
WEATHER_API_KEY=REPLACE_WITH_APPID
```

Once installed, you can run the application via:
```sh
$ npm start
```

## NPM Commands

As part of the project, you can run:

### `npm start`

This runs the app in the development mode.<br />
Once compiled, your default broswer should launch the app via [http://localhost:8080](http://localhost:8080).<br />

### `npm run build`

This will build the app in a production ready state to the `build` folder.<br />
The output will contain an minified and optimised version of the build for the best performance.

## Unit Tests
Test cases have been written using a combination of [Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/) frameworks. Each component should contain a `.test.js` file.

To run tests: `npm run test`
To run tests with a watch: `npm run test:watch`
