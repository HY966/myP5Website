function setup() {
  // 
  createCanvas(400, 600);
  background('#FCFFF5');
  noStroke();
  colorMode(HSB);
  radians(degrees);  
  noStroke();
  
}

function draw() {
  background('#FCFFF5'); 
  fill(35,72,69);
  circle(170,270,160);
  ellipse(123,335,85,75);
  push();
  rotate(90);
  ellipse(100,375,60,50);
  pop();
  circle(235,260,170);
  ellipse(280,335,85,75);
  ellipse(110,375,60,50);
  ellipse(310,365,60,50);

  push();
  fill(35, 18, 100);
  translate(width/2,height/2,);
  rotate(-45);
  rect(-65,40,40,90,50);
  pop();
  push();
  translate(width/2,height/2,);
  fill(35, 18, 100);
  rotate(45);
  rect(25,45,40,90,50);
  pop();
  
  push();
  translate(width / 2, height / 2);
  fill("#FFECD1");
  rect(10,110,40,90,50);
  rect(-45,110,40,90,50);
  pop();
  
  fill("rgb(255,148,247)");
  triangle((width / 2+10),height / 2,121,440,276,444);
  
  fill(35, 18, 100); 
  rect(118, 150, 185, 190,85);

  drawEyes(); 
  
  fill(40,100,100);
  rect(width/2, 269, 19, 22,80); 
  
  push();
  fill(210, 50, 50); 
  blendMode(ADD);
  fill(1, 1, 10); 
  arc(215, 300, 54, 54, TWO_PI, PI);
  pop();
  

  fill("rgb(255,148,247)");
  rect(118, 85, 185, 135.65, 68);  
  rect(85, 173, 248.16, 47.72, 20);
  
  textSize(32);
  fill('#000000'); 
  text("Move to the face",75,60); 
}


function drawEyes() {
  fill(0, 0, 0); 
  
  if (mouseX > 118 && mouseX < 303 && mouseY > 150 && mouseY < 340) {   
    rect(155, 241, 18, 10, 80); // left 
    rect(width-155, 241, 18, 10, 80); // 
  } else {
    // Normal eyes
    rect(155, 241, 18, 22,80); 
    rect(width-155, 241, 18, 22,80); 
  }
}