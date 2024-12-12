let offset
let r,g,b
let shape
function setup() {
  createCanvas(600, 600);
  noStroke();
}

function draw() {
  r = random(0,255)
  g = random(0,255)
  b = random(0,255)
  
  background("white");  
  translate(width/2,height/2)
  drawFragment(250,80)
  offset = millis()/1200
  shape = 5 * sin(millis()/10000)
}

function drawFragment(radius, amount) {
  let angleStep = TWO_PI / amount;
  
  for (let i = 0; i < amount; i++) {
    let angle = i * angleStep;
    let nextAngle = (i + 1) * angleStep;

    if (i % 2 == 0) {
      fill("white");
    } else if (i % 3 == 0) {
      fill("black");
    } else {
      fill("rgb(42,69,179)");
    }

    let startX = radius * sin(angle * shape + offset);
    let startY = radius * cos(angle + offset);
    let endX = radius * sin(nextAngle * shape + offset);
    let endY = radius * cos(nextAngle + offset);

    for (let j = 0; j < 1; j++) { 
      beginShape();
      vertex(0, 0);
      vertex(startX, startY);
      vertex(endX, endY);
      endShape();
    }
  }

  
}