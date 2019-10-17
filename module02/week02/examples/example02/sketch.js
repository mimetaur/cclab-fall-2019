// Examples use OpenWeatherMap API:
// https://openweathermap.org/current

let akWeather;
let laWeather;

let t = 0;
let tSpeed = 0.001;
let tCount = 0;

let akTemp;
let akHue;
let laTemp;
let laHue;

function preload() {

  // get weather in two locations - #1 alaska
  let akUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Anchorage&APPID=a8e27297355ca6f3d759a6a18fc680a3';
  akWeather = loadJSON(akUrl);

  // get weather in two locations - #2 los angeles
  let laUrl = 'http://api.openweathermap.org/data/2.5/weather?q=los%20angeles&APPID=a8e27297355ca6f3d759a6a18fc680a3';
  laWeather = loadJSON(laUrl);
}

function setup() {
  createCanvas(400, 400);

  print(akWeather);
  print(laWeather);

  colorMode(HSB);

  akTemp = akWeather.main.temp;
  akHue = map(akTemp, 250, 300, 0, 360);

  laTemp = laWeather.main.temp;
  laHue = map(laTemp, 250, 300, 0, 360);
}

function draw() {
  background(80);

  let currentColor = lerp(akHue, laHue, t);
  fill(currentColor, 100, 100);
  rectMode(CENTER);
  rect(width / 2, height / 2, 130, 130, 6)

  incrementTime();
}

function incrementTime() {
  t = t + tSpeed;
  if (t > 1 || t < 0) {
    tSpeed = tSpeed * -1;
  }
}

