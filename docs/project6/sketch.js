let data = [20, 40, 30, 50, 15, 25, 35, 60, 45, 55, 20, 30, 40, 10, 70, 80, 25, 35, 45, 15, 30, 55, 65, 75, 20, 30, 40, 50, 60, 70, 15, 25, 35, 45, 55, 65, 75, 10, 20, 30, 40, 50, 60, 70];
let numBar = data.length
let value
let radius 
let offset =-4.6
let emoji


function setup() {
  createCanvas(400, 400);
  textSize(50)
  textAlign(CENTER,CENTER)  
  emoji ='🫶'
 
}


function draw() {

  let animationValue = sin(millis()/400)
  radius = 70+10*animationValue
  background("rgb(255,255,255)")
  translate(width/2,height/2)
  let angleStep = TWO_PI/numBar
  for(i=0;i<numBar;i++){
  value= data[i]
  let x1 = radius*cos(angleStep*i-offset)
  let y1 = radius*sin(angleStep*i-offset)
  let x2 = (radius+value)*cos(angleStep*i-offset)
  let y2 = (radius+value)*sin(angleStep*i-offset)
  
 
    if (dist(mouseX - width / 2, mouseY - height / 2, (x1 + x2) / 2, (y1 + y2) / 2) < 10) {
      strokeWeight(10);
      stroke('rgb(50,50,246)');
      emoji=GetValue(value)
    } else {
      strokeWeight(5); 
      stroke('rgb(0,0,0)'); 
    }

  line(x1,y1,x2,y2)
  text(emoji,0,0)
   
  }
  push()
  noStroke()
  textSize(30)
  text("Daily Emotion",0,-170)
  pop()

}

function GetValue(FValue){
  if(FValue>40){
  return "😄" 
  }else if(FValue<40&&FValue>20){
   return "🙂" 
  }else{
   return "☹️"  
  } 
}