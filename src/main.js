import MartianWeather from './martian-weather.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$('#weatherLocation').click(function() {
  MartianWeather.getMartianWeather().then(function (formattedData) {

    $("#output-start-date").text(formattedData.date);
    $("#output-start-time").text(formattedData.time);
    $("#output-temperature").text(formattedData.temperature + " F°");
    $("#output-pressure").text(formattedData.atmosphericPressure + " Pa");
    $("#output-wind-speed").text(formattedData.windSpeed + " m/s");
    $("#output-wind-direction").text(formattedData.windDirection + " deg");

    $('.compass').show()
    $('.compass .arrow').css('transform', `rotate(${formattedData.windDirection - 90}deg)`);
  });
});