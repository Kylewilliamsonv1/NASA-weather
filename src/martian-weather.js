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
        const firstDay = response.sol_keys[0]; // 675

        // these are the same, if 675 is our first day
        // const temperature = response[firstDay].AT.av;
        // const temperature = response[675].AT.av;

        const temperature = response[firstDay].AT.av; //first day/675 (675 represents a day) represent the element in the array
        const atmosphericPressure = response[firstDay].PRE.av; // notice the element is a string here
        const windDirection = response[firstDay].WD.most_common.compass_degrees; //^^ and here
        const windSpeed = response[firstDay].HWS.av; 
        const date = new Date(response[firstDay].First_UTC);

        //toDateString()
        //toTimeString()
        

        console.log(response);
        console.log(temperature);
        console.log(atmosphericPressure);
        console.log(windDirection);
        console.log(windSpeed);
        console.log(date);

        return {
          temperature,
          atmosphericPressure,
          windDirection,
          windSpeed,
          date: date.toDateString(),
          time: date.toTimeString(),
        };

      })
      .catch(function(error){
        console.error(`Alert! We have an error: ${error.message}`);
      });

  }
}

//data to get back -->
//temperature, atomospheric pressure, wind direction, wind speed
//temp in F
