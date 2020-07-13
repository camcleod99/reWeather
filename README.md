# React Weather
  _Created by Craig A. McLeod_
  
  _V 1.0 - 12 June 2020_

## About
  React Weather is a single page webapp that displays the current date and weather
  information for today and the next five days.

  The WebApp consumes the following API Sources;
  Open Weather API : collects the weather in the location for Today and the next 
  five days.
  Google Maps API  : collects the textual location of a corodinate.

## Requirements
  (_Note: The following requirements may require a fiscal cost, The creator of this
  webapp is not responsible for these costs)
  
  NPM  6.14.5
  
  API Keys :
  Google Maps Platform  - GeoCodeing API          (https://developers.google.com/maps/documentation/geocoding/intro)
  Opean Weather         - 5 day / 3 hour Forecast (https://openweathermap.org/api)

  Create .env.local in the root folder
  In .env.local add the following two lines
  REACT_APP_GM_KEY=[your key here]
  REACT_APP_DS_KEY=[your key here]

## To run the webapp localy
  Buld the webapp;
  $ npm run-script build
  Then start the webapp;
  $ NPM start

  Your browser should automatically open to localhost:3000 and run the app.

## Live Version
  The live version is hosted at the following address : (https://pedantic-fermi-a9802e.netlify.com/)

## Future Revisions
  None Planned
