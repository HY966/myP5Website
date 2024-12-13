let playerCharacter;
let circles = [];
let shots = [];
let particles = [];
let maxCircles = 50;
let health = 100;
let score = 0;
let energy = 0;
let canUseSkill = false;
let shotImages = [];
let playerImage;
let bossMode = false;
let boss;
let level = 1;
let backgroundColor;
let blackParticle = [];
let bossEmojis = ["💀", "👽", "👾", "🤖", "🎃", "👺", "👹", "👿"];
let minionEmojis = ["👻", "👾", "👹", "🤡", "🐉"];
let shotSounds = [];
let gameOver = false;
let gameStarted = false;

function preload() {
  shotImages.push(loadImage("note3.png"));
  shotImages.push(loadImage("note2.png"));
  shotImages.push(loadImage("note1.png"));
}

function setup() {
  createCanvas(600, 400);
  playerCharacter = new Player();
  backgroundColor = color("#1C051F");
}

function draw() {
  if (!gameStarted) {
    background(0); 
    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Click to attack", width / 2, height / 2 - 40);
    text("Press space to use skill", width / 2, height / 2);
    text("Don't let the devil invade your dreams.", width / 2, height / 2 + 40);
    textSize(20);
    return; 
  }

  if (gameOver) {
    
    background(0); 
    fill(255); 
    textSize(50);
    textAlign(CENTER, CENTER);
    text("Game Over", width / 2, height / 2);
    textSize(20);
    text("Click to Restart", width / 2, height / 2 + 50);
    return; 
  }

  background(backgroundColor);
  imageMode(CORNER);

  playerCharacter.display();

 //particle update
  if (frameCount % 5 === 0) {
    blackParticle.push(new BlackParticle()); 
  }
  for (let i = blackParticle.length - 1; i >= 0; i--) {
    let p = blackParticle[i];
    p.update(); 
    p.display(); 

    if (p.isDead()) {
      blackParticle.splice(i, 1);
    }
  }

  //score
  fill(0);
  textSize(20);
  textAlign(LEFT, TOP);
  text(`Score: ${score}`, 10, 10);

  fill(255, 0, 0);
  rect(0, height - 20, health * 3.8, 10);
  noFill();
  stroke(0);
  rect(0, height - 20, width, 10);

  if (health <= 0) {
    gameOver = true;
  }

//skill meter  
  fill(255, 215, 0);
  rect(0, height - 30, energy * 3.8, 6);
  noFill();
  stroke(0);
  rect(0, height - 30, width, 6);
// canUseSkill
  if (energy >= 50) {
    canUseSkill = true;
    fill("white");
    textSize(16);
    textAlign(CENTER, CENTER);
    text("Press SPACE to use skill", width / 2, height / 2);
  }

//switchScene  
  if (score >= 100 && level === 1) {
    level = 2;
    startBossLevel();
  } else if (score >= 200 && level === 2) {
    level = 3;
    startMixedLevel();
  }

  if (bossMode && boss) {
    boss.update();
    boss.display();
    if (boss.y + boss.size / 2 >= height) {
      health = 0;
    }
  } else {
    if (circles.length < maxCircles && frameCount % 60 === 0) {
      circles.push(new Circle(random(width), 0, random(10, 20), random(2, 5)));
    }
    for (let i = circles.length - 1; i >= 0; i--) {
      let c = circles[i];
      c.update();
      c.display();
      if (c.y + c.size / 2 >= height) {
        health -= 10;
        circles.splice(i, 1);
      }
    }
  }

  if (level === 3 && frameCount % 600 === 0) { 
    boss = new Boss();
  }

  //
  for (let i = shots.length - 1; i >= 0; i--) {
    let shot = shots[i];
    shot.update();
    shot.display();

    if (bossMode && boss && shot.checkCollision(boss)) {
      boss.hit();
      score += 10;
      energy = min(50, energy + 5);
      shots.splice(i, 1);
      if (boss.health <= 0) {
        bossMode = false;
        score += 50;
      }
      break;
    }

    for (let j = circles.length - 1; j >= 0; j--) {
      let c = circles[j];
      if (shot.checkCollision(c)) {
        score += 10;
        energy = min(50, energy + 10);
        createParticles(c.x, c.y);
        circles.splice(j, 1);
        shots.splice(i, 1);
        break;
      }
    }
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];
    p.update();
    p.display();
    if (p.lifespan <= 0) {
      particles.splice(i, 1);
    }
  }
}

function mousePressed() {
  if (!gameStarted) {
    gameStarted = true;
    return;
  }

  if (gameOver) {
    resetGame();
    gameOver = false;
    return;
  }

  if (level === 3) {
    for (let i = -2; i <= 2; i++) {
      let angleOffset = i * PI / 10;
      shots.push(new Shot(playerCharacter.x, playerCharacter.y, angleOffset));
    }
  } else {
    shots.push(new Shot(playerCharacter.x, playerCharacter.y, 0));
  }
}

function keyPressed() {
  if (key === ' ' && canUseSkill) {
    useSkill();
  }
}

function useSkill() {
  if (level === 3) {
    for (let i = 0; i < circles.length; i++) {
      let c = circles[i];
      c.velocity.y = -abs(c.velocity.y);
    }
    boss.y -= 200;
  } else if (bossMode) {
    boss.y -= 200;
  } else {
    for (let i = 0; i < circles.length; i++) {
      let c = circles[i];
      c.velocity.y = -abs(c.velocity.y);
    }
  }
  energy = 0;
  canUseSkill = false;
}

function resetGame() {
  health = 100;
  score = 0;
  energy = 0;
  level = 1;
  bossMode = false;
  circles = [];
  shots = [];
  particles = [];
  blackParticle = [];
  backgroundColor = color("#1C051F");
}

function createParticles(x, y) {
  for (let i = 0; i < 10; i++) {
    particles.push(new Particle(x, y));
  }
}

function startBossLevel() {
  bossMode = true;
  boss = new Boss();
  circles = [];
  backgroundColor = color(180, 220, 255);
}

function startMixedLevel() {
  bossMode = true;
  boss = new Boss();
  maxCircles = 10;
  backgroundColor = color(255, 200, 200);
}
