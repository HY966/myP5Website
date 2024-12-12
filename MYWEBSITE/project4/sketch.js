function setup() {
  createCanvas(400, 600);
}

function draw() {
   background("#FF9800");

  let x = 150;
  let y = 150;
  let a = 200;
  drawBody(1, 1);


  drawRoughCurve(x, y, a);
  body();
  

    
  //feet part
  drawFoot(163,509)
  function drawFoot(x,y){
  fill('black');
  ellipse(x,y,80,120)
  ellipse(x+80,y,80,120)
  };
      fill(250);  
  beginShape();
  vertex(150,300);  
  vertex(width-150,300);   
  vertex(width-100, 500); 
  vertex(100, 500); 
  endShape(CLOSE);
  
  
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

function body(){
   let myColour2 = color(random(255), random(255), random(255));
  frameRate(5)
  fill(myColour2)
  ellipse(200,160,150,20)
  ellipse(200,230,15, 110)
  //left ribs
  ellipse(165,180,40,10)
  ellipse(160,200,45,10)
  ellipse(157,220,47,10)
  ellipse(157,240,49,10)
  ellipse(157,260,51,10)
  
  //right ribs
  ellipse(235,180,40,10)
  ellipse(240,200,45,10)
  ellipse(243,220,47,10)
  ellipse(243,240,49,10)
  ellipse(243,260,51,10)
  
  //pelvis top
  ellipse(200,293,95,15)
  
  //left arm
  circle(120, 175, 22)
  push()
  translate(110,230)
  rotate(-50)
  ellipse(0, 0, 20,80)
  pop()
  circle(90,265,12)
  push()
  translate(80,230)
  rotate(50)
  ellipse(0, 0, 17,55)
  pop()
  ellipse(72,190, 20,25)
  ellipse( 76, 178, 8,15)
  
  //right arm
  circle(280, 175, 22)
  push()
  translate(290,230)
  rotate(50)
  ellipse(0, 0, 20,80)
  pop()
  circle(310,265,12)
  push()
  translate(320,230)
  rotate(-50)
  ellipse(0, 0, 17,55)
  pop()
  ellipse(330,190, 20,25)
  ellipse( 325, 178, 8,15)
  
}

function drawBody(a, b) {
  beginShape();
  fill("black")
  vertex(200,73) 
  bezierVertex(210,55,220,35,233,70) 
  vertex(233,70)
  bezierVertex(247,59,250,65,266,66)
  vertex(266,66)
  bezierVertex(278,40,300,40,300,110)
  vertex(300,110)
  bezierVertex(300,135,243,148,225,148)
  
  vertex(225,148)
  bezierVertex(204,129,195,148,200,73)

  endShape();
  
  fill("rgb(255,255,255)")
  
  let size = Math.abs(sin(millis()/1000)) * 10 + 5

  rect(214,78,15,5,5)
  rect(264,78,15,5,5)
  ellipse(224,98,20,size)
  ellipse(270,98,20,size)
  
  ellipse(168,134,20,15)
  
  triangle(235,119,256,122,245,134)
}

