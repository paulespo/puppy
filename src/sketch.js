let vitos = [];


function setup() {
  createCanvas(800, 800);

  for (let i = 0; i < 1000; i++) {
    vitos.push(new Follower());
  }
}

function draw() {
  background(255);
  
  for (let i = 0; i < vitos.length; i++) {
    vitos[i].render();
    vitos[i].update();
  }
}
function mousePressed() {
  for (let i=0; i <vitos.length; i++){
  vitos[i].setTarget(random(width), random(height));
  }
}

class Follower {
  constructor() {
    this.targetX = random(width);
    this.targetY = random(height);
    this.x = 0;
    this.y = 0;
    this.coef = random(0.05, 0.25);
    this.growth = random(1, 40);
    this.opac = random(0, 200);
    this.stroke = random(50, 200);
  }

  setTarget(newTargetX, newTargetY) {
    this.targetX = newTargetX;
    this.targetY = newTargetY;
  }

  render() {
    stroke(this.stroke);
  	fill(0, this.opac);
    ellipse(this.x, this.y, this.growth, this.growth);
  }

  update() {
    this.x += (this.targetX - this.x) * this.coef;
    this.y += (this.targetY - this.y) * this.coef;
  }
}