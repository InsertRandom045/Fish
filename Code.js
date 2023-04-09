let circleX = 400;
let circleY = 300;
let r = 180;
let fishFds = []

function setup() {
  createCanvas(800, 600);
  angleMode(DEGREES);
  for (let fd = 0; fd < 1; fd++) {
    fishFds.push(new FishFood())
  }

}

function draw() {
  push();
  for (let i = 0; i <= 600; i++) {
    let inter = map(i, 0, 600, 0, 1);
    let c = lerpColor(color(3, 206, 206), color(0, 0, 100), inter);
    stroke(c);
    line(0, i, 800, i);
  }
  pop();
  for (let i = 0; i < fishFds.length; i++) {
    fishFds[i].display();
    fishFds[i].update();
  }

  fill("#FCBF00");
  strokeWeight(2.5);
  stroke("#FF9800");
  push();
  translate(circleX, circleY);
  rotate(r);
  triangle(0, 0, 65, -35, 65, 35);
  pop();
  ellipse(circleX, circleY, 100, 65);
  push()

  //hitbox
  rectMode(CENTER)
  rect(circleX, circleY, 125, 65)
  pop()

  //W
  if (keyIsDown(87) && circleY - 40 > 10) {
    circleY -= 2;
  }
  //S
  if (keyIsDown(83) && circleY + 40 < 590) {
    circleY += 3;
  }
  //A
  if (keyIsDown(65) && circleX - 40 > 25) {
    r = 360;
    circleX -= 2.5;
  }
  //D
  if (keyIsDown(68) && circleX + 40 < 776) {
    circleX += 2.5;
    r = 180;
  }
  push();
  strokeWeight(25);
  stroke("rgb(248,223,120)");
  line(0, 0, 800, 0);
  line(0, 0, 0, 600);
  line(800, 0, 800, 600);
  line(0, 600, 800, 600);
  pop();
}

class FishFood {
  constructor() {
    rectMode(CENTER)
    let w = random(10, 25);
    let h = random(9, 20);
    let x = random(27, 573);
    let spd = random(0.5, 1.5);
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = 0;
    this.colr = "rgb(104,56,6)";
    this.spd = spd;
  }
  display() {
    fill(this.colr);
    stroke("rgb(93,49,0)");
    rect(this.x, this.y, this.w, this.h);
  }
  update() {
    this.y += this.spd;
  }

  //touchingFish(fishX, fishY, fishW, fishH) {
    // Right side of fish: fishX + fishW/2
    // Left side of fish: fishX-fishW/2
    // Top side of fish: fishY - fishH/2
    // Bottom side of fish: fishY + fishH/2

    // food X: this.x
    // food Y: this.y
    // food width: this.w
    // food height: this.h

    // Right side of food: this.x + this.w/2  
    // Left side of food: this.x - this.w/2
    // Top side of food: this.y - this.h/2
    // Bottom side of food: this.y + this.h/2

    // 1. Right side of food > Left side of fish
    // 2. Left side of food < Right side of fish
    // 3. Top side of food < Bottom side of fish
    // 4. Bottom side of food > Top side of fish


      
  
  

//class Rectangle{
//     constructor(x,y,w,h);{
//       this.x = x;
//       this.y = y;
//       this.w = w;
//       this.h = h;
//     }
//     display () {
//       rect(this.x,this.y,this.w,this,h)
//     }

//   rect1 = new Rectangle (150,150,100,100);
// rect2 = new Rectangle(50,50,50,50)
//   
}
  