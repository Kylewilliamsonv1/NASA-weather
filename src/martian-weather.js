export default class MartianWeather {
  static getMartianWeather () {
    return fetch(`https://mars.nasa.gov/rss/api/?feed=weather&category=insight_temperature&feedtype=json&ver=1.0&api_key=${process.env.API_KEY}`) // our particular API doesn't require an API key but this is an example if one was needed.  note the "&" when combining parameters.
      .then(function(response) {
        if (!response.ok) {
          throw Error (response.statusText);
        }
        return response.json();
      })
      .then(function (response) {
        const temperature = response['675'].AT.av;
        console.log(temperature);
        const atomosphericPressure = response['675'].PRE.av;
        console.log(atomosphericPressure);
        const windDirection = response['675'].WD.most_common.compass_degrees; 
        console.log(windDirection);
        const windSpeed = response['675'].HWS.av; 
        console.log(windSpeed);
      })
      .catch(function(error){
        console.error(`Alert! We have an error: ${error.message}`);
      });
  }
}

//data to get back -->
//temperature, atomospheric pressure, wind direction, wind speed
//temp in F
