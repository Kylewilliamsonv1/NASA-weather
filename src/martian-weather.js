
export default class MartianWeather {
  static getMartianWeather () {
    return fetch('https://mars.nasa.gov/rss/api/?feed=weather&category=insight_temperature&feedtype=json&ver=1.0')
      .then(function(response) {
        if (!response.ok) {
          throw Error (response.statusText);
        }
        return response.json();
      })
      .catch(function(error){
        return error;
      });
  }
}
