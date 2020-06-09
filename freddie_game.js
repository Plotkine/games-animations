fps=60;
screenSize=750;

lateralSpeed=140
jumpVelocity=3;

freddieBallSize=50;
freddieBallSpeed=3;
freddieBallDelay=285;

imgSize=125;

shootAnimationTime=0.3*fps;

//don't change those variables
lateralSpeed=lateralSpeed/fps;
jumpVelocity=450*jumpVelocity/fps;
gravity=jumpVelocity*2.5/fps;
oldTime=new Date().getTime() - freddieBallDelay;

class ball {
  constructor(date,img,imgRatio,x,y,speed) {
    this.date=date; //moment of creation
    this.x=x;
    this.y=y;
    this.speed=speed;
    this.img=img;
    this.imgRatio=imgRatio
    this.imgHeight=freddieBallSize*imgRatio;
  }
  draw() {
    image(this.img,this.x,this.y,freddieBallSize,this.imgHeight);
  }
  updatePos() {
    this.x += freddieBallSpeed;
  }
}

class freddie {
  constructor(img,imgRatio) {
    this.x=10;
    this.y=0;
    this.inJump="no";
    this.velocity=jumpVelocity; //for vertical jumps
    this.img=img;
    this.imgRatio=imgRatio
    this.imgHeight=imgSize*imgRatio;
    this.balls=[];
  }
  move(direction) {
    if (direction === "right") {
      this.x+=lateralSpeed;
    }
    else if (direction === "up") {
      this.inJump="up";
    }
    else if (direction === "left") {
      this.x-=lateralSpeed;
    }
    }
  constrain() {
    if (this.x < 0) { //left of screen
      this.x=0;
    }
    else if (this.x > screenSize - imgSize) { //right of screen
      this.x=screenSize - imgSize;
    }
    //if (this.y > 0) { we dont do it here cause it is condition of jump ending
  }
  draw() {
    //replacing freddie
    this.constrain();
    
    //drawing freddie
    image(this.img,this.x,screenSize/5*4 - this.imgHeight + this.y,imgSize,this.imgHeight);
    
    //drawing balls
    fill(255,50,50);
    for (let i=0; i < this.balls.length; i++) {
      this.balls[i].draw();
      this.balls[i].updatePos();
      //clean balls out of screen
      if (this.balls[i].x > screenSize) {
        this.balls.splice(i,1); //delete the ball
      }
    }
    
    //jump position update
    if (this.inJump !== "no") {  //in a jump
      if (this.y > 0) { //end of jump
        this.y=0;
        this.velocity=jumpVelocity;
        this.img=imgStatic;
        this.imgRatio=imgStaticRatio;
        this.inJump="no";
      }
      else { //still in jump
        if (this.velocity < 0){ //we start going down
          this.velocity=0;
          this.inJump="down";
        }
        else if (this.inJump === "up") {
          this.velocity-=gravity;
          this.y-=this.velocity;
        }
        else if (this.inJump ==="down") {
          this.velocity+=gravity;
          this.y+=this.velocity;
        }
      }
    }
  }
}

function setup() {
  createCanvas(screenSize, screenSize);
  frameRate(fps);
  imgJump=loadImage('jump.png'); //493x736
  imgJumpRatio=736/493;
  imgStatic=loadImage('static.png'); //241x377
  imgStaticRatio=377/241;
  imgShoot=loadImage('shoot.png'); //350x631
  imgShootRatio=631/350
  imgFireball=loadImage('fireball.png'); //322x261
  imgFireballRatio=261/322
  /*imgCloud=loadImage('cloud.png'); //350x140
  imgCloudRatio=140/350;*/
  aFreddie=new freddie(imgStatic,imgStaticRatio);
}

function draw() {
  background(220);
  textSize(16);
  fill(100,100,200);
  text('move: left/right/up arrows',10,20);
  text('shoot: spacebar',10,36);
  line(0,screenSize/5*4,screenSize,screenSize/5*4)
  aFreddie.draw();
  if (keyIsDown(RIGHT_ARROW)) {
    aFreddie.move("right");
  }  
  if (keyIsDown(UP_ARROW) && (aFreddie.inJump === "no")) {
    aFreddie.img=imgJump;
    aFreddie.imgRatio=imgJumpRatio;
    aFreddie.move("up");
  }
  if (keyIsDown(LEFT_ARROW)) {
    aFreddie.move("left");
  }
  if (keyIsDown(32)) { //spacebar
    newTime=new Date().getTime();
    if (newTime > oldTime + freddieBallDelay) {
      aFreddie.balls.push(new ball(new Date().getTime(),imgFireball,imgFireballRatio,aFreddie.x + imgSize + 10,screenSize/5*4 - aFreddie.imgHeight + aFreddie.y + 10,freddieBallSpeed));
      /*image(imgCloud,aFreddie.x + imgSize + 10,screenSize/5*4 - aFreddie.imgHeight + aFreddie.y + 10,freddieBallSize,freddieBallSize*imgCloudRatio);*/ //cloud
      aFreddie.img=imgShoot;
      aFreddie.imgRatio=imgShootRatio;
      aFreddie.shootTime=shootAnimationTime+1;
      oldTime=newTime;
    }
  }
  if (aFreddie.shootTime > 0) {
  aFreddie.shootTime-=1;
  }
  else if (aFreddie.img === imgShoot && aFreddie.shootTime === 0) {
    if (aFreddie.y === 0) { //au sol
      aFreddie.img=imgStatic;
      aFreddie.imgRatio=imgStaticRatio;
    }
    else {//jumping
      aFreddie.img=imgJump;
      aFreddie.imgRatio=imgJumpRatio; 
    }
  }
}
