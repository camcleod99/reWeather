//ToDo: Keep eye on this, if anything glaring shows up, deal with it.
function skyconWasher(weatherIn){
  var icon

  if (weatherIn.includes('cloudy')){
    icon = 'cloudy'
  }
  if (weatherIn.includes('clouds')){
    icon = 'cloudy'
  }  
  else if (weatherIn.includes('rain')){
    icon = 'rain'
  }
  else if (weatherIn.includes('sleet')){
    icon = 'sleet'
  }
  else if (weatherIn.includes('snow')){
    icon = 'snow'
  }
  else if (weatherIn.includes('wind')){
    icon = 'wind'
  }
  else if (weatherIn.includes('fog')){
    icon = 'fog'
  }
  else{
    icon = 'clear-day'
  }
  
  return icon

}
export default skyconWasher; 