// Examples use OpenWeatherMap API:
// https://openweathermap.org/current
let weather;
function preload() {

  // get weather in New York
  // if you go to this URL, you should be able to see the data you can use
  // and if you install JSONView for Chrome it will be easier to understand
  let url = 'http://api.openweathermap.org/data/2.5/weather?q=New%20York&APPID=a8e27297355ca6f3d759a6a18fc680a3';
  weather = loadJSON(url);
}

function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(240);

  // if you open up the JavaScript console, you should see
  // something similar to clicking on the API url
  print(weather);

  let windAngle = weather.wind.deg;
  let windSpeed = map(weather.wind.speed, 0, 100, 0, width);
  let windGust = map(weather.wind.gust, 0, 100, 4, 10);

  push();
  translate(width / 2, height / 2);
  rotate(windAngle);
  strokeWeight(windGust);
  line(0, 0, windSpeed, windSpeed);
  pop();
}
