let fps = 19;
const canvasSize = 600;
const squaresSize = 24;
const squaresNumber = canvasSize / squaresSize; //If this is not an integer it all screws up
const directions = ["up", "down", "left", "right"];

function randomDirection() {
  randomIndex = Math.floor(Math.random() * 4);
  return directions[randomIndex];
}

class basicSnake {
  constructor(direction, virtualX, virtualY) {
    if ((virtualX === undefined) && (virtualY === undefined)) {
      //we use virtual (from 1 to squaresNumber) and true coordinates (from 0 to canvasSize)
      this.virtualX = Math.floor(Math.random() * squaresNumber) + 1; //1 -> squaresNumber
      this.virtualY = Math.floor(Math.random() * squaresNumber) + 1;
    } else {
      this.virtualX = virtualX;
      this.virtualY = virtualY;
    }
    this.trueX = (this.virtualX - 1) * squaresSize; //converting virtual to true coordinates
    this.trueY = (this.virtualY - 1) * squaresSize;

    this.direction = direction; //"up", "down", "left", "right"
  }
  setX(number) { //number refers to virtual coordinates (1 -> squaresNumber)
    this.virtualX = number;
    this.trueX = (number - 1) * squaresSize;
  }
  setY(number) { //number refers to virtual coordinates (1 -> squaresNumber)
    this.virtualY = number;
    this.trueY = (number - 1) * squaresSize;
  }
  replaceOnScreen() { //replace basic snake on the opposite side of the screen,
    //if it goes out of screen
    if (this.virtualX > squaresNumber) {
      this.setX(1);
    } else if (this.virtualX < 1) {
      this.setX(squaresNumber);
    } else if (this.virtualY > squaresNumber) {
      this.setY(1);
    } else if (this.virtualY < 1) {
      this.setY(squaresNumber);
    }
  }
  moveX(number) { //number refers to virtual coordinates (1 -> squaresNumber)
    this.setX(this.virtualX + number);
  }
  moveY(number) { //number refers to virtual coordinates (1 -> squaresNumber)
    this.setY(this.virtualY + number);
  }
  move(direction) {
    switch (direction) {
      case "up":
        this.moveY(-1);
        break;
      case "down":
        this.moveY(1);
        break;
      case "left":
        this.moveX(-1);
        break;
      case "right":
        this.moveX(1);
        break;
    }
    this.direction = direction;
    this.replaceOnScreen();
  }
};

class snake {
  constructor() {
    this.basicSnakes = [new basicSnake(randomDirection())];
    this.gameOver = false;
    this.score = 0;
  }
  //we visualise the snake as an array of basic snakes
  //where the head of the snake is the last element of that array
  getSnakeHead() {
    return this.basicSnakes[this.basicSnakes.length - 1];
  }
  getSnakeTail() {
    return this.basicSnakes[0];
  }
  move(direction) {
    let change_direction = true;
    //change direction of first basic snake if specified
    if (this.basicSnakes.length >= 2) {
      //we can't go down if we go up etc
      let current_direction = this.getSnakeHead().direction;
      switch (direction) {
        case "up":
          if (current_direction === "down") {
            change_direction = false;
          }
          break;
        case "down":
          if (current_direction === "up") {
            change_direction = false;
          }
          break;
        case "left":
          if (current_direction === "right") {
            change_direction = false;
          }
          break;
        case "right":
          if (current_direction === "left") {
            change_direction = false;
          }
          break;
      }
    }

    //PEU IMPORTE LA TAILLE DU SERPENT
    //on fait bouger tous les basic snakes sauf le tout premier
    for (let i = 0; i <= this.basicSnakes.length - 2; i++) {
      this.basicSnakes[i].setX(this.basicSnakes[i + 1].virtualX);
      this.basicSnakes[i].setY(this.basicSnakes[i + 1].virtualY);
      this.basicSnakes[i].direction = this.basicSnakes[i + 1].direction;
      this.basicSnakes[i].replaceOnScreen();
    }

    if (change_direction) {
      //change first basic snake's direction if we are authorized to do so
      this.basicSnakes[this.basicSnakes.length - 1].direction = direction;
    }

    //move first basic snake towards its direction
    this.getSnakeHead().move(this.getSnakeHead().direction);
    //ligne suivante pas nécessaire car présent dans la méthode move    
    /*this.getSnakeHead().replaceOnScreen();*/

    //gameOver si le serpent se mord
    if (this.basicSnakes.length >= 2) {
      for (let i = 0; i <= this.basicSnakes.length - 2; i++) {
        if ((this.basicSnakes[i].virtualX === this.getSnakeHead().virtualX) &&
          (this.basicSnakes[i].virtualY === this.getSnakeHead().virtualY)) {
          this.gameOver = true;
        }
      }
    }
  }
  eatFood(food) {
    //we add a basic snake that has the same direction as the last basic snake of the list

    let snakeTail = this.getSnakeTail();
    let direction = snakeTail.direction;
    let virtualX;
    let virtualY;

    //en fonction de la direction on n'ajoute pas le dernier basic snake au même endroit
    switch (direction) {
      case "up":
        virtualX = snakeTail.virtualX;
        virtualY = snakeTail.virtualY + 1;
        break;
      case "down":
        virtualX = snakeTail.virtualX;
        virtualY = snakeTail.virtualY - 1;
        break;
      case "left":
        virtualX = snakeTail.virtualX + 1;
        virtualY = snakeTail.virtualY;
        break;
      case "right":
        virtualX = snakeTail.virtualX - 1;
        virtualY = snakeTail.virtualY;
        break;
    }

    this.basicSnakes.unshift(new basicSnake(direction, virtualX, virtualY));
    //si jamais on a ajouté la queue hors cadre:
    this.basicSnakes[this.basicSnakes.length - 1].replaceOnScreen();
  }
};

class food {
  constructor(screenSnake) {
    let collision = true;
    while (collision === true) {
      collision = false;

      this.virtualX = Math.floor(Math.random() * squaresNumber) + 1;
      this.virtualY = Math.floor(Math.random() * squaresNumber) + 1;

      for (const basicSnake of screenSnake.basicSnakes) {
        if ((this.virtualX === basicSnake.virtualX) &&
          (this.virtualY === basicSnake.virtualY)) {
          collision = true;
        }
      }
    }
    this.trueX = (this.virtualX - 1) * squaresSize;
    this.trueY = (this.virtualY - 1) * squaresSize;
    this.snake = screenSnake;
  }
  setX(number) { //number refers to virtual coordinates
    this.virtualX = number;
    this.trueX = (number - 1) * squaresSize;
  }
  setY(number) { //number refers to virtual coordinates
    this.virtualY = number;
    this.trueY = (number - 1) * squaresSize;
  }
  resetPos() {
    let collision = true;
    while (collision === true) {
      collision = false;

      this.virtualX = Math.floor(Math.random() * squaresNumber) + 1;
      this.virtualY = Math.floor(Math.random() * squaresNumber) + 1;

      for (const basicSnake of screenSnake.basicSnakes) {
        if ((this.virtualX === basicSnake.virtualX) &&
          (this.virtualY === basicSnake.virtualY)) {
          collision = true;
        }
      }
    }
    this.trueX = (this.virtualX - 1) * squaresSize;
    this.trueY = (this.virtualY - 1) * squaresSize;
  }
};

function reset() {
  screenSnake = new snake();
  direction = screenSnake.getSnakeHead().direction;
  screenFood = new food(screenSnake);
}

/*function changeSpeed() {
  gameSpeed = prompt("Choose snake speed (1-10)"); //FPS
  //We will only use the name of the attributes of validInputs:
  //their value has no importance.
  let validInputs = {1: 1,2: 2,3: 3,4: 4,5: 5,6: 6,7: 7,8: 8,9: 9,10: 10};
  while (!(gameSpeed in validInputs)){
    gameSpeed = prompt("Speed must be between 1 and 10");
  }
  fps = 10 + (Number(gameSpeed) * 3); //speed from 10 to 40
  frameRate(fps);
}*/

function setup() {
  createCanvas(canvasSize, canvasSize);
  background(200);
  frameRate(fps); // Attempt to refresh at starting FPS
  
  screenSnake = new snake();
  direction = screenSnake.getSnakeHead().direction;
  screenFood = new food(screenSnake);

  button2 = createButton('Reset game');
  button2.position(canvasSize + squaresSize, squaresSize * 0.5);
  button2.mousePressed(reset);  
  
  button1 = createButton('Current score: '+screenSnake.score);
  button1.position(canvasSize + squaresSize, squaresSize * 1.5);
  
  button3 = createButton('Change speed');
  button3.position(canvasSize + squaresSize, squaresSize * 3.5);
  /*button3.mousePressed(changeSpeed);*/
  
  // create sliders
  slider = createSlider(10, 40, 20);
  slider.position(canvasSize + squaresSize, squaresSize * 4.5);
}

function draw() {
  frameRate (slider.value());
  stroke(0,0,0);
  strokeWeight(1);
  background(200);
  fill(76, 110, 202);
  for (const basicSnake of screenSnake.basicSnakes) {
    rect(basicSnake.trueX, basicSnake.trueY, squaresSize, squaresSize);
  }
  fill(100, 100, 100);
  rect(screenFood.trueX, screenFood.trueY, squaresSize, squaresSize);
  if (screenSnake.gameOver === false) {
    if ((screenSnake.getSnakeHead().virtualX === screenFood.virtualX) &&
      (screenSnake.getSnakeHead().virtualY === screenFood.virtualY)) {
      screenSnake.eatFood();
      screenSnake.score += 1;
      button1 = createButton('Current score: '+screenSnake.score);
      button1.position(canvasSize + squaresSize, squaresSize * 1.5);
      screenFood.resetPos();
    }

    screenSnake.move(direction);

    if (keyIsDown(UP_ARROW)) {
      direction = "up";
    }
    if (keyIsDown(DOWN_ARROW)) {
      direction = "down";
    }
    if (keyIsDown(LEFT_ARROW)) {
      direction = "left";
    }
    if (keyIsDown(RIGHT_ARROW)) {
      direction = "right";
    }
    if ((screenSnake.virtualX === screenFood.virtualX) &&
      (screenSnake.virtualY === screenFood.virtualY)) {
      screenFood.resetPos();
    }
  }
  else {
    fill(150, 0, 0);
    rect(screenSnake.getSnakeHead().trueX, screenSnake.getSnakeHead().trueY,squaresSize,squaresSize);
    noFill();
    stroke(150, 0, 0);
    circle(screenSnake.getSnakeHead().trueX + (squaresSize / 2), screenSnake.getSnakeHead().trueY + (squaresSize / 2), 2 * squaresSize);
    if (keyIsPressed)  {
      reset();
    }
  }
}