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

  // TODO
  // 1. make some variables to store data from the API
  // 2. remap some values to be more appropriate for pixels or colors
  // 3. write the actual drawing code
}
