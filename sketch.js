function randomColor(){
  return color(random(255),random(255),random(255));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  background(255);
  
  noLoop();
}

function cicleRing(){
  let centerX = width / 2;
  let centerY = height / 2;
  let radius = 200;
  let numRects = 25; 
  let rectWidth = 30;
  let rectHeight = 30;
  let cornerRadius = 10;
  let layerNum = 5;
  fill(randomColor());
  stroke(0,0);
  for(let a = 0; a < layerNum; a++){

    for (let i = 0; i < numRects; i++) {
      let angle = TWO_PI / numRects * i;
      let x = centerX + cos(angle) * radius;
      let y = centerY + sin(angle) * radius;
      
      push();
      translate(x, y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, rectWidth, rectHeight, cornerRadius);
      pop();
  }
   radius = radius + 40;
   numRects = numRects +10;
  }
  
}

function drawConcentricCircles(x, y, maxDiameter, numCircles) {
  let step = maxDiameter / numCircles;
  for (let i = 0; i < numCircles; i++) {
    let diameter = maxDiameter - i * step;
    let offsetX = random(-5, 5);
    let offsetY = random(-5, 5);
    fill(randomColor());
    stroke(randomColor());
    strokeWeight(2);
    ellipse(x + offsetX, y + offsetY, diameter, diameter);
  }
}




function draw() {

  let centerX = width / 2;
  let centerY = height / 2;
  fill(randomColor());
  stroke(randomColor());
  strokeWeight(random(5,20));
  circle(centerX,centerY,800);
  fill(randomColor());
  ellipse(centerX,centerY,300,300);
  drawConcentricCircles(centerX, centerY, 300, 10);

 
  cicleRing();
}
