let emotions = [2, 1, 3, 4, 5, 6, 3]; 
let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let barWidth;

const happyEmoji = "😄";
const sadEmoji = "😩";
const neutralEmoji = "😐";

let lastUpdateTime = 0; 
let updateInterval = 50; 
let currentEmotionIndex = 0; 

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("rgb(40,38,74)");
  barWidth = (width - 40) / (days.length - 1); 
  strokeWeight(2);
  stroke(255, 255, 255); 
  
  noFill();


  if (millis() - lastUpdateTime > updateInterval) {
    emotions[currentEmotionIndex] = floor(random(0, 7)); 
    currentEmotionIndex = (currentEmotionIndex + 1) % emotions.length; 
    lastUpdateTime = millis(); 
  }

  
  beginShape();
  for (let i = 0; i < emotions.length; i++) {
    let x = i * barWidth + 20; 
    let y = height - map(emotions[i], 0, 6, 40, height - 40); 
    
    if (i == 0) {
      vertex(x, y); 
    } else {
      let prevX = (i - 1) * barWidth + 20; 
      let prevY = height - map(emotions[i - 1], 0, 6, 40, height - 40); 
      
      let controlX = (prevX + x) / 2; 
      bezierVertex(controlX, prevY, controlX, y, x, y); 
    }
  }
  endShape();


  textSize(14);
  noStroke();   
  fill("white");
  textAlign(CENTER);
  for (let i = 0; i < days.length; i++) {
    let x = i * barWidth + 20;
    text(days[i], x, height - 10); 
  }


  textSize(32); 
  for (let i = 0; i < emotions.length; i++) {
    let x = barWidth * i + 20;
    let y = height - map(emotions[i], 0, 6, 40, height - 40);
    let emoji;
    
    if (emotions[i] > 3) {
      emoji = happyEmoji;
    } else if (emotions[i] < 3) {
      emoji = sadEmoji;
    } else {
      emoji = neutralEmoji;
    }
    
    text(emoji, x, y); 
  }
}