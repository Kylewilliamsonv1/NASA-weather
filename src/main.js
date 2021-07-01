import MartianWeather from './martian-weather.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$('#weatherLocation').click(function() {
  MartianWeather.getMartianWeather().then(function (formattedData) {
    console.log('did we get here?', formattedData)

    $("#output-temperature").text(formattedData.temperature);
    $("#output-pressure").text(formattedData.atmosphericPressure);
    $("#output-wind-speed").text(formattedData.windSpeed);
    $("#output-wind-direction").text(formattedData.windDirection);
  });

});
