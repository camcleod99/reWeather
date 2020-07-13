import React, { Component } from "react";

// NPM Packages
import { Divider } from 'semantic-ui-react'

// Components
import SearchBar from './components/search'
import Loader from './components/loader'
import Error from './components/error'
import Footer from './components/footer'
import Location from './components/location'
import Today from './components/today'
import Next from './components/next'

// App Component
class App extends Component {

  constructor(props) {
    super(props);

    // Load State
    this.state = {
      itemsGM: [],
      itemsDS: [],
	  isError: null,
      error: null,
      errorLocation: null,
      isLoadedGM: false,
      isLoadedDS: false,
    };

    // Bind Functions
    this.fetchWeather = this.fetchWeather.bind(this);
    this.fetchLocation = this.fetchLocation.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.geoError = this.geoError.bind(this);
  }

  // Functions

  /* fetchWeather (Lat - Lataude CoOrds, Long - Longatude CoOrds)  */
  // Get the Weather from Dark Sky
  fetchWeather(lat,long) {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const apiKeyDS = process.env.REACT_APP_DS_KEY;
    const apiDS = `${proxy}https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly&appid=${apiKeyDS}`
    fetch(apiDS)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoadedDS: true,
            itemsDS: result
          });
        },
        /* NOTE: This should be done instead of catch to avoid confusion with component bugs */
        error => {
          this.setState({
            isLoadedDS: true,
			isError: true,
            errorLocation: "Opean Weather API",
            error: error
          });
        }
      );
  }

  /* fetchLocation (Lat - Lataude CoOrds, Long - Longatude CoOrds) */
  // Get the location from Google Maps
  fetchLocation(lat,long) {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const apiKeyGM = process.env.REACT_APP_GM_KEY;
    const apiGM = `${proxy}https://maps.google.com/maps/api/geocode/json?latlng=${lat},${long}&sensor=false&key=${apiKeyGM}`;
    fetch(apiGM)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoadedGM: true,
            itemsGM: result
          });
        },
        error => {
          this.setState({
            isLoadedGM: true,
            errorLocation: "Google Maps API",
			isError: true,
            error: error
          });
        }
      );
  }

  /* geoerror (Err - Error object) */
  // Throws Error if GeoLocation does not fire correctly
  geoError(err) {
    this.setState({
      isLoadedGM: true,
      errorLocation: "Location Services",
	  isError: true,
      error: err
    })
  }

  /* React Hooks */
  
  /* Component did mount */
  // Inital fetching of geolocation and consumption of weather and location apis
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude
      const long = position.coords.longitude   
      this.fetchWeather(lat,long);
      this.fetchLocation(lat,long);
    },this.geoError,{timeout: 5000});
  }

  /* handleSelect (newValue - Value passed on from "Search" component) */
  // Handles selection of location from Search component and refreshes page
  handleSelect(newValue){
    // Spagetify new value's coordinates into array
    const newCoOrds = newValue.split(",")
    // Convert newCoOrds array into lat and long veriables
    const lat = newCoOrds[0]
    const long = newCoOrds[1]
    // Set Loaded Status to false to bring app to "Loading" State
    this.setState({
      isError: false,
      isLoadedDS: false,
      isLoadedGM: false
    })
    // Set Weather and Location
    this.fetchWeather(lat,long)
    this.fetchLocation(lat,long)
  }

  /* Render Point */
  render() {
    // Bring state veriables into render point
    var { isLoadedDS, isLoadedGM, itemsDS, itemsGM, isError, error, errorLocation} = this.state;

    /* Error State */
    // Display Error screen with Location and Error Data
    if (isError){
      return(
        <div className="App">
          <SearchBar handleSelect = {this.handleSelect.bind(this)} selectedValue = {this.selectedValue} />
          <Error errorLocation = {errorLocation} errorData = {error}/>
        </div>
      )
    }
    /* Loading State */
    // Displays loader if ether API has yet to load data
    else if (!isLoadedDS || !isLoadedGM) {
      return (
        <div className="App">
          <Loader />
        </div>
      );
    /* Main State */  
    // Displays app when there is no errors and all API have loaded
    } else {
      return (
      <div className="App">
        <SearchBar handleSelect = {this.handleSelect.bind(this)} selectedValue = {this.selectedValue} />
        <Divider />
        <Location locationData = {itemsGM.results[4].formatted_address} timeData = {itemsDS.current.dt}/>
        <Divider />
        <Today weatherDataToday = {itemsDS.daily[0]}/>
        <Divider />
        <Next weatherDataNext = {itemsDS.daily}/>
      </div>
      );
    }
  }
}

export default App;
