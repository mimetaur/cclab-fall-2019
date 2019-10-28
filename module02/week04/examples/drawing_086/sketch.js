// wall drawing #86
// adapted for p5.gui
// see documentation at https://bitcraftlab.github.io/p5.gui/

var numLines = 100;
var numLinesMin = 0;
var numLinesMax = 2000;
var numLinesStep = 10;

var lineLength = 120;
var lineLengthMin = 10;
var lineLengthMax = 1000;
var lineLengthStep = 10;

var lineWidth = 2;
var lineWidthMin = 1;
var lineWidthMax = 8;
var lineWidthStep = 1;

var lineColor = '#111111';
var bgColor = '#dddddd';

let gui;
let visible = false;

function setup() {
  createCanvas(600, 400);

  gui = createGui('Settings');
  gui.addGlobals('numLines', 'lineLength', 'lineWidth', 'lineColor', 'bgColor');
  gui.hide();
  noLoop();
}

function draw() {
  background(bgColor);
  stroke(lineColor);
  strokeWeight(lineWidth);
  for (let i = 0; i < numLines; i++) {
    let lineStartX = random(width);
    let lineStartY = random(height);
    applyMatrix();
    translate(lineStartX, lineStartY);
    angleMode(DEGREES);
    rotate(random(360));
    line(0, 0, 0, lineLength);
    resetMatrix();
  }
}

function keyPressed() {
  if (key == ' ') {
    visible = !visible;
    if (visible) gui.show(); else gui.hide();
  }
}
