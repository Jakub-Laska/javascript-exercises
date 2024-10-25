const convertToCelsius = function(fahren) {
  let conFahren = (fahren - 32) * 5/9;
  let roundedConFahren = Number(conFahren.toFixed(1));
  return roundedConFahren; 

};

const convertToFahrenheit = function(celcius) {
  let conCelsius = celcius * 9/5 + 32;
  let roundedConCelsius = Number(conCelsius.toFixed(1));
  return roundedConCelsius;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};