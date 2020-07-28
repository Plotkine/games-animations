class bird {
  constructor(screenSize, x, y, size, orientation, speed, randomness, random_cycle_size, random_cycle) { 
//orientation is clockwise angle
//from east direction
    
    this.screenSize = screenSize;
    this.x = x;
    this.y = y;
    this.size = size;
    this.orientation = orientation;
    this.speed = speed;
    this.randomness = randomness;
    this.random_cycle_size = random_cycle_size;
    this.random_cycle = random_cycle;

    //speed vector
    this.vx = 0;
    this.vy = 0;
    this.update_speed_vector();
    
    //neighbors
    this.neighbors = [];
  }
  update_speed_vector() {
    angleMode(DEGREES);
    this.vx = cos(this.orientation) * this.speed;
    this.vy = -sin(this.orientation) * this.speed;
  }
  fly(fps) {
    this.x = this.x + this.vx*this.speed; //speed will depend on fps
    this.y = this.y + this.vy*this.speed;
    
    //randomness
    //this.orientation = (this.orientation + this.randomness/this.random_cycle_size) % 360;    
    
    //boundary conditions
    if (this.x < 0) {
      this.x = screenSize;
      //this.y = screenSize - this.y;
    }
    else if (this.x > screenSize) {
      this.x = 0;
      //this.y = screenSize - this.y;
    }
    if (this.y < 0) {
      this.y = screenSize;
      //this.x = screenSize - this.x;
    }
    else if (this.y > screenSize) {
      this.y = 0;
      //this.x = screenSize - this.x;
    }
    
    //update speed vector
    this.update_speed_vector();
  }
  interact(interaction_range) {
  
    //parallelism
    for (let i = 0; i < this.neighbors.length; i++) {
    if (dist(this.x, this.y, this.neighbors[i].x, this.neighbors[i].y) <= interaction_range) {
      if (dist(this.x, this.y, this.neighbors[i].x, this.neighbors[i].y) <= (1)*interaction_range) {
        let moving_orientation_speed = 5;
        if (this.neighbors[i].orientation > this.orientation) {
          if (this.neighbors[i].orientation - this.orientation < 180) {
            this.orientation += min(moving_orientation_speed,this.neighbors[i].orientation - this.orientation);
          }
          else {
            this.orientation -= min(moving_orientation_speed,this.neighbors[i].orientation - this.orientation);
          }
        }
        else {
          if (this.orientation - this.neighbors[i].orientation < 180) {
            this.orientation -= min(moving_orientation_speed,this.orientation - this.neighbors[i].orientation);
          }
          else {
            this.orientation += min(moving_orientation_speed,this.orientation - this.neighbors[i].orientation);
          }
        }
      } //end if dist >= ... (parallelism)
    
      //avoiding themselves
      /*else if (dist(this.x, this.y, this.neighbors[i].x, this.neighbors[i].y) < (1/3)*interaction_range) {
        let moving_orientation_speed = 5;
        if (this.neighbors[i].orientation > this.orientation) {
          if (this.neighbors[i].orientation - this.orientation < 180) {
            this.orientation -= moving_orientation_speed;
          }
          else {
            this.orientation += moving_orientation_speed;
          }
        }
        else {
          if (this.orientation - this.neighbors[i].orientation < 180) {
            this.orientation += moving_orientation_speed;
          }
          else {
            this.orientation -= moving_orientation_speed;
          }
        }
      } //end if dist <= ... (avoiding)*/
      }
      ///////////////////////////////////
      //boundary conditions
      this.orientation = this.orientation % 360;
      if (this.x < 0) {
        this.x = screenSize;
        //this.y = screenSize - this.y;
      }
      else if (this.x > screenSize) {
        this.x = 0;
        //this.y = screenSize - this.y;
      }
      if (this.y < 0) {
        this.y = screenSize;
        //this.x = screenSize - this.x;
      }
      else if (this.y > screenSize) {
        this.y = 0;
        //this.x = screenSize - this.x;
      }
      //update speed vector
      this.update_speed_vector();
      ///////////////////////////////////
    } //end for bird in neighboor
  } //end interact
} //end class

class birds {
  constructor(screenSize, number, size, speed, randomness, random_cycle_size) {//randomness is a number between 0 and 360
    this.number = number;
    this.size = size;
    this.speed = speed;
    this.randomness = randomness;
    this.screenSize = screenSize;
    this.random_cycle_size = random_cycle_size;

    this.birds = []
    for (let i = 0; i < number; i++) {
      //screenSize, x, y, size, orientation, speed, randomness, random_cycle_size, random_cycle
      this.birds.push(new bird(screenSize, random(0,screenSize), random(0,screenSize), this.size, random(0,361), this.speed, this.randomness, this.random_cycle_size, random(0,this.random_cycle_size)));
    }
  }
  fly() {
    this.birds.forEach(bird => bird.fly());
  }
}

function deep_copy(bird) {
  res = 1;
  return bird(bird.screenSize, bird.x, bird.y, bird.size, bird.orientation, bird.speed, bird.randomness, bird.random_cycle_size);
}

function setup() {
  fps = 30;
  screenSize = 650;
  
  birds_density = 35; //# 10*(birds/100x100) pixels
  birds_size = 6.5;
  birds_speed = 65;
  
  randomness = 50;
  random_cycle_size = 1; //# seconds to make its random move
  
  interaction_range = 75;
  
  /////////////////////////////////////////////////
  frameRate(fps);
  birds_speed = birds_speed/fps;
  birds_number = birds_density*(screenSize/100)*(screenSize/100)/10;
  random_cycle_size = random_cycle_size*fps;
  interaction_range = interaction_range/screenSize/screenSize*422500;
  //= interaction_range = interaction_range/422500*422500 if screenSize = 650
  /////////////////////////////////////////////////
  
  //screenSize, number, size, speed, randomness, random_cycle_size
  birdss = new birds(screenSize, birds_number, birds_size, birds_speed, randomness, random_cycle_size);
  createCanvas(screenSize, screenSize);
  
  //random_cycle = 0;
}

function draw() {
  //console.log(birdss.birds[0].random_cycle);
  background(200);
  angleMode(DEGREES);
  
  for (let i = 0; i < birdss.birds.length; i++) {
    //random cycles
    if (birdss.birds[i].random_cycle === 0) {
      temp = random(0,2); //will tell if clockwise or not
      if (temp === 0) {
        birdss.birds[i].randomness = random(91); //clockwise
      }
      else {
        birdss.birds[i].randomness = -random(91); //anti - clockwise
      }
    }
    birdss.birds[i].random_cycle = (birdss.birds[i].random_cycle + 1) % random_cycle_size
    
    //update neighbors
    birdss.birds[i].neighbors = [];
    for (let j = 0; ((j < birdss.birds.length) && (j != i)); j++) {
      bird_j = birdss.birds[j];
      if (dist(bird_j.x, bird_j.y, birdss.birds[i].x, birdss.birds[i].y) < interaction_range) {
        birdss.birds[i].neighbors.push(new bird(bird_j.screenSize, bird_j.x, bird_j.y, bird_j.size, bird_j.orientation, bird_j.speed, bird_j.randomness, bird_j.random_cycle_size));
      }
    }
    
    //interactions with neighbors
    birdss.birds[i].interact(interaction_range);
    
    //drawing
    translate(birdss.birds[i].x, birdss.birds[i].y);
    rotate(-birdss.birds[i].orientation);
    translate(-birdss.birds[i].x, -birdss.birds[i].y);
    
    fill(50,50,255);
    triangle(birdss.birds[i].x + birds_size, birdss.birds[i].y, birdss.birds[i].x - birds_size, birdss.birds[i].y + birds_size/1.5, birdss.birds[i].x - birds_size, birdss.birds[i].y - birds_size/1.5);
    
    translate(birdss.birds[i].x, birdss.birds[i].y);
    rotate(birdss.birds[i].orientation);
    translate(-birdss.birds[i].x, -birdss.birds[i].y);
    
    noFill();
    //circle(birdss.birds[i].x, birdss.birds[i].y, (1)*interaction_range)
    
  }
  
  birdss.fly();
}
