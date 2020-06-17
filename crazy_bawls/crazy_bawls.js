class point {
  constructor(size, x1, x2, v1, v2, a1, a2, mass, color) { //position = (x1,x2) ; velocity = (v1,v2); mass = g
    this.size = size;
    this.x1 = x1;
    this.x2 = x2;
    this.v1 = v1;
    this.v2 = v2;
    this.a1 = a1;
    this.a2 = a2;
    this.mass = mass;
    this.color = color;
  }
  move(a1, a2, fps) { //acceleration = (a1,a2)
    let t = 1 / fps; //car t = 1 seconde et on calcule move toutes les frames
    this.a1 = a1;
    this.a2 = a2;
    this.v1 += this.a1 * t;
    this.v2 += this.a2 * t;
    this.x1 += this.v1 * t + (t ** 2) * this.a1 / 2;
    this.x2 += this.v2 * t + (t ** 2) * this.a2 / 2;
    this.replace();
  }
  replace() {
    if (this.x1 > 800) {
      this.x1 = 800;
      this.a1 = -this.a1;
      this.a2 = this.a2;
      this.v1 = -this.v1;
      this.v2 = this.v2;
    } else if (this.x1 < 1) {
      this.x1 = 1;
      this.a1 = -this.a1;
      this.a2 = this.a2;
      this.v1 = -this.v1;
      this.v2 = this.v2;
    }
    if (this.x2 > 800) {
      this.x2 = 800;
      this.a1 = this.a1;
      this.a2 = -this.a2;
      this.v1 = this.v1;
      this.v2 = -this.v2;
    } else if (this.x2 < 1) {
      this.x2 = 1;
      this.a1 = this.a1;
      this.a2 = -this.a2;
      this.v1 = this.v1;
      this.v2 = -this.v2;
    }
  }
}

function distance(x1, x2, y1, y2) { //returns distance between vectors (x1,x2) and (y1,y2)
  return Math.max(sqrt((x1 - y1) ** 2 + (x2 - y2) ** 2), 750);
}

function norme(x1, x2) { //returns norm of vector (x1,x2)
  return distance(x1, x2, 0, 0);
}

function unitaryVector(x1, x2) { //return coordinates of same vector with size 1
  return [x1 / norme(x1, x2), x2 / norme(x1, x2)]
}

function bindPoints(x1, x2, y1, y2) { //returns unitary vector going from p1 towards p2
  return unitaryVector(y1 - x1, y2 - x2); //(can be negative)
}

function calcForce(p1, p2) { //force de gravitation entre les points p1 et p2
  return G * p1.mass * p2.mass / (distance(p1.x1, p1.x2, p2.x1, p2.x2) ** 2);
}

function calcAcceleration(p1, p2) { //acceleration of p1 towards p2 induced by gravity
  let vector = bindPoints(p1.x1, p1.x2, p2.x1, p2.x2); //unitary vector going from p1 towards p2
  let acceleration = calcForce(p1, p2) / p1.mass; //norm of acceleration vector
  return [acceleration * vector[0], acceleration * vector[1]];
}

function randomNumber(n) { //returns a random number from 1 to (n - 2)
  return (Math.random() * (n - 4)) + 1;
}

class game {
  constructor(screenSize, ratioPoints, minScreen, idealFps) {
    this.points = [];
    this.points.push(new point(2, 800 / 3, 800 / 3, 0, 0, 0, 0, Math.floor(screenSize / ratioPoints) * 100, [255, 255, 2545]));
    for (let i = 0; i < Math.floor(800000 / ratioPoints) / 2; i++) {
      //(size, x1, x2, v1, v2, mass, color)
      /*let size = Math.random();
      if (size > 0.75) {
        this.points.push(new point(2, randomNumber(windowWidth), randomNumber(windowHeight), 0, 0, 0, 0, 1, [255, 0, 0]));
      }
      else if (0.5 < size < 0.75) {
        this.points.push(new point(2, randomNumber(windowWidth), randomNumber(windowHeight), 0, 0, 0, 0, 2, [100, 100, 0]));
      }
      else if (0.25 < size < 0.5) {
        this.points.push(new point(2, randomNumber(windowWidth), randomNumber(windowHeight), 0, 0, 0, 0, 3, [0, 255, 0]));
      }
      else {
        this.points.push(new point(2, randomNumber(windowWidth), randomNumber(windowHeight), 0, 0, 0, 0, 4, [0, 0, 255]));
      }*/
      this.points.push(new point(2, 800 / 2, 800 / 2, randomNumber(1000), randomNumber(1000), randomNumber(500), randomNumber(500), 1, [190, 0, 0]));
    }
    /*this.points.push(new point(2,300, 300, 0, 0, 0, 0, 100000000000, [0, 0, 0]));
    this.points.push(new point(2, 260, 260, 0, 0, 0, 0, 1000000000000, [0, 0, 0]));*/
    //this.points.unshift();
  }
  nextFrame(fps) {
    for (let i = 0; i < this.points.length; i++) {
      for (let j = i + 1; j < this.points.length; j++) {
        let acceleration;
        acceleration = calcAcceleration(this.points[i], this.points[j]);

        {
          if (i === 0) {
            this.points[i].move(acceleration[0] / 5000, acceleration[1] / 5000, fps);
          } else {
            this.points[i].move(acceleration[0] / 15, acceleration[1] / 15, fps);
          }
          if (i === 0) {
            this.points[j].move(-acceleration[0]/2, -acceleration[1]/2, fps);
          } else {
            this.points[j].move(-acceleration[0] / 15, -acceleration[1] / 15, fps);
          }
        }
        /*else {
           this.points[j].move(- acceleration[0]/2, - acceleration[1]/2, fps);
        }*/
      }
    }
  }
}

function setup() {
  idealFps = 1000;
  fps = idealFps;
  minScreen = Math.min(windowWidth, windowHeight);
  screenSize = windowWidth * windowHeight;
  ratioPoints = 30000; // = number of pixels / number of points | => number of points = screenSize / ratioPoints
  pointsDiameter = 2;
  G = 50000000000; //universal gravitation law constant
  createCanvas(800, 800); //windowWidth, windowHeight);
  background(0);
  frameRate(fps); // Attempt to refresh at starting FPS
  screenGame = new game(screenSize, ratioPoints, minScreen, idealFps);
  k = 0;
}

function draw() {
  background(200);
  //console.log(screenGame.points[1]);
  for (const point of screenGame.points) {
    fill(point.color[0], point.color[1], point.color[2]);
    circle(Math.floor(point.x1), Math.floor(point.x2), 4);
  }
  //console.log(screenGame.points[1]); // marcha pas
  screenGame.nextFrame(fps, k); //quand on fait nextFrame(), x1 n'est plus défini
  console.log(screenGame.points[0].v1);
  k++;
  if (k > 10) {
    k = 0;
  }
}