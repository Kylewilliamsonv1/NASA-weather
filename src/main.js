import MartianWeather from './martian-weather.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


$('#weatherLocation').click(function() {
  MartianWeather.getMartianWeather();
});
