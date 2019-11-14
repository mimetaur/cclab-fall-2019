// wall drawing #154
// see documentation at https://bitcraftlab.github.io/p5.gui/


function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(250);

  draw154(width / 2, height / 2, width * 0.8, height * 0.8);
  noLoop();
}

function draw154(x, y, w, h) {
  stroke(20);
  noFill();

  rectMode(CENTER);
  push();
  translate(x, y);
  rect(0, 0, w, h);
  pop();

  fill(0);
  push();
  translate(x - (w / 2), y);
  stroke(220, 0, 0);
  line(0, 0, w * 0.66, 0);
  pop();
}
