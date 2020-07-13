// TempWasher (Kelvin Version)

function tempWasher(value1, value2, type){

  // get averate of top and min temps
  let amount = (value1+value2)/2
  let tempType = type

  if (tempType === "f") {
    return Math.round(amount)+ "°F"
  }
  if (tempType === "c"){
    return Math.round((amount - 273.15))+ "°C"
  }
}
export default tempWasher; 