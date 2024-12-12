function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(220);

  let x = 150;
  let y = 150;
  let a = 200;

  drawRoughCurve(x, y, a);
  drawBody(x, y);
  drawRotatedCurves(168, 274, 5)
  DrawLeg();
  DrawFeet();
  
}


function drawRoughCurve(x, y, a) {
  beginShape();
  
  vertex(x, y);
  let offset = sin(millis() / 1000) * 10
  let control1X = 170 + random(-offset, offset);
  let control1Y = 0 + random(-offset, offset);
  let control2X = 200 + random(-offset, offset);
  let control2Y = 0 + random(-offset, offset);
  
  bezierVertex(control1X, control1Y, control2X, control2Y, a, y);


  stroke("black");
  strokeWeight(3); 


  fill("rgb(0,0,0)");
  
  endShape();
}
function drawBody(a, b) {
  let x2 = 133;  
  let y2 = 243;  

  beginShape();
  vertex(a, b);  

  
  let control1X = 140;
  let control1Y = 200;
  let control2X = 140;
  let control2Y = 200;
  bezierVertex(control1X, control1Y, control2X, control2Y, x2, y2);  
  endShape();

  beginShape();
  vertex(x2, y2);  

 
  let control3X = 110;
  let control3Y = 260;
  let control4X = 100;
  let control4Y = 260;
  bezierVertex(control3X, control3Y, control4X, control4Y, 94, 300);
  
  vertex(94, 300);
  vertex(240, 300);
  
  vertex(240, 300);
   let control5X = 240;
  let control5Y = 260;
  let control6X = 220;
  let control6Y = 250;
  bezierVertex(control5X, control5Y, control6X, control6Y,200, y2);
  
  vertex(200, y2);
  let control7X = 200;
  let control7Y = 260;
  let control8X = 200;
  let control8Y = 260;
   bezierVertex(control7X, control1Y, control8X, control1Y,200, 150);
  
  vertex(200, 150);
  vertex(150, 150);
  
  
  endShape();
  
  beginShape();
  fill("black")
  vertex(200,213)
  bezierVertex(210,195,220,175,233,210)
  vertex(233,210)
  bezierVertex(247,199,250,205,266,206)
  vertex(266,206)
   bezierVertex(278,180,300,180,300,250)
  vertex(300,250)
   bezierVertex(300,275,243,288,225,288) 
  
  vertex(225,288)
  bezierVertex(204,269,195,288,200,213) 

    
  
  endShape();
  
  fill("rgb(255,255,255)")
  
  let size = Math.abs(sin(millis()/1000))*10+5

  rect(214,218,15,5,5)
   rect(264,218,15,5,5)
  ellipse(224,238,20,size)
  ellipse(270,238,20,size)
  
  ellipse(168,274,20,15)
  
  triangle(235,259,256,262,245,274)

  
  
}

function drawRotatedCurves(centerX, centerY, numCurves) {
  stroke("black"); 
  strokeWeight(2); 
  noFill();

  for (let i = 0; i < numCurves; i++) {
    let angle = TWO_PI / numCurves * i; 
    let offsetX = cos(angle) * 1; 
    let offsetY = sin(angle) * 1;
    
  
    let control1X = centerX + offsetX + cos(angle + radians(72)) * 6; 
    let control1Y = centerY + offsetY + sin(angle + radians(72)) * 6;
    let control2X = centerX + offsetX + cos(angle) * 6; 
    let control2Y = centerY + offsetY + sin(angle) * 6; 
    let endX = centerX + offsetX + 8 * cos(angle);
    let endY = centerY + offsetY + 7 * sin(angle); 
    beginShape(); 
    vertex(centerX + offsetX, centerY + offsetY); 
    bezierVertex(control1X, control1Y, control2X, control2Y, endX, endY); 
    endShape(); 
    
  }
}

function DrawLeg(){
  beginShape()
  fill(0,0,0)
  vertex(94,300)
   bezierVertex(87,342,95,414,100,450); 
    vertex(100,450)
    vertex(150,450)
   vertex(158,379)
   vertex(170,450)
   vertex(226,450)
   bezierVertex(240,400,245,340,240, 300); 
   vertex(240, 300)
   vertex(94,300) 
  endShape();
  
  push()
  beginShape()
  stroke("white")
  vertex(157,303)
   bezierVertex(158,314,165,314,170,305); 
    vertex(170,305)
   bezierVertex(180,314,182,314,184,303); 
  endShape();
  pop()
  
  
}

function DrawFeet() {

  beginShape();
  vertex(100,450);
  bezierVertex(110,500,120,550,130,570);
  bezierVertex(140,550,150,500,150,450);
  endShape();
  

  beginShape();
  vertex(170,450);
  bezierVertex(180,500,190,550,200,570);
  bezierVertex(210,550,220,500,226,450);
  endShape();
  

  push();
  fill("white");
  ellipse(130,560,40,30);
  ellipse(200,560,40,30);
  pop();
}