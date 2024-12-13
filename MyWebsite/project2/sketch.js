let faceColor;

function setup() {
  createCanvas(400, 400);
  faceColor = color(252, 237, 207); 
  noseColor = color(255, 200, 180);

}

function draw() {
  background(255);
  
  push();
  translate(200,200);
  textSize(30);
  fill('#000000'); 
  text("Click to change color",-150,-150); 
  pop();

  // mouseX  mouseY 
  let faceWidth = map(mouseX, 0, width, 150, 200);
  let faceHeight = map(mouseY, 0, height, 200, 250);
  let eyeSize = map(mouseX, 0, width, 20, 50);
  let eyeY = map(mouseY, 0, height, 130, 170);
  let mouthY = map(mouseY, 0, height, 240, 270);
  let mouthCurve = map(mouseX, 0, width, -10, 30);
  let noseX = map(mouseX, 0, width, 100, 230);
  let noseY = map(mouseY, 0, height, 160, 300);
  
  // face
  fill(faceColor); // 使用 faceColor 作为脸的颜色
  ellipse(200, 200, faceWidth, faceHeight); 
  
  // eyes
  fill(255);
  ellipse(150, eyeY, eyeSize, eyeSize * 0.6); 
  ellipse(250, eyeY, eyeSize, eyeSize * 0.6); 
  
  fill(0); 
  ellipse(150, eyeY, eyeSize * 0.4, eyeSize * 0.4); 
  ellipse(250, eyeY, eyeSize * 0.4, eyeSize * 0.4); 
  
  // nose
  fill(noseColor); 
  beginShape();
  vertex(190, 180); 
  vertex(noseX, noseY); 
  vertex(210, 220); 
  endShape(CLOSE); 
  
  // mouse
  stroke(0); 
  noFill();
  beginShape();
  curveVertex(170, mouthY); 
  curveVertex(170, mouthY);
  curveVertex(200, mouthY + mouthCurve); 
  curveVertex(230, mouthY); 
  curveVertex(230, mouthY);
  endShape();
}

function mousePressed() {
  let R = random(0, 255);
  let G = random(0, 255);
  let B = random(255, 255);
  
  faceColor = color(R, G, B); 
  noseColor = color(B, R, G);
}