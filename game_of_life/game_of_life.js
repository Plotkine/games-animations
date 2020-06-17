fps=100;
screenSize=400;
squaresDivision=75;

function isIn(i,j,aList) {//elem is a 2-list, aList is a list of 2-lists
  for (let k = 0; k < aList.length; k++) {
    if ((aList[k][0] === i) && (aList[k][1] === j)) {
      return true;
    }
  }
  return false;
}

function evolve(i,j,aList) { //game of life rules for the cell i,j
  //calculating number of alive neighbors
  aliveNeighbors=0;
  if (isIn((((i-1) % squaresDivision) + squaresDivision) % squaresDivision,(((j-1) % squaresDivision) + squaresDivision) % squaresDivision,aList)) {
    aliveNeighbors+=1;
  }
  if (isIn((((i-1) % squaresDivision) + squaresDivision) % squaresDivision,j % squaresDivision,aList)) {
    aliveNeighbors+=1;
  }
  if (isIn((((i-1) % squaresDivision) + squaresDivision) % squaresDivision,(j+1) % squaresDivision,aList)) {
    aliveNeighbors+=1;
  }
  if (isIn(i % squaresDivision,(((j-1) % squaresDivision) + squaresDivision) % squaresDivision,aList)) {
    aliveNeighbors+=1;
  }
  if (isIn(i % squaresDivision,(j+1) % squaresDivision,aList)) {
    aliveNeighbors+=1;
  }
  if (isIn((i+1) % squaresDivision,(((j-1) % squaresDivision) + squaresDivision) % squaresDivision,aList)) {
    aliveNeighbors+=1;
  }
  if (isIn((i+1) % squaresDivision,j % squaresDivision,aList)) {
    aliveNeighbors+=1;
  }
  if (isIn((i+1) % squaresDivision,(j+1) % squaresDivision,aList)) {
    aliveNeighbors+=1;
  }
  if (isIn(i,j,aList)) { //if the cell (i,j) was alive
    if ((aliveNeighbors !== 2) && (aliveNeighbors !== 3)) {
      return "becomesDead";
    }
    else {
      return "staysAlive";
    }
  }
  else { //if the cell (i,j) was not alive
    if (aliveNeighbors === 3) { //the cell becomes alive
      return "becomesAlive";
    }
    else {
      return "staysDead";
    }
  }
}

function createPattern() {
  return [[5,5],[6,5],[7,5],   [10,10],[10,11],[10,12],    [15,15],[16,16],[17,16],[17,15],[17,14]];
}

function setup() {
  frameRate(fps);
  createCanvas(screenSize, screenSize);
  aliveCells=createPattern();
}

function draw() {
  background(0);
  //we draw the (alive) cells
  for (let i = 0; i <= squaresDivision; i++) {
    for (let j = 0; j <= squaresDivision; j++) {
      if (isIn(i,j,aliveCells)) {
        fill(255, 255, 255); //white square
  rect(i*screenSize/squaresDivision,j*screenSize/squaresDivision,screenSize/squaresDivision,screenSize/squaresDivision);
      }
      else {
        fill(0, 0, 0); //black square
        rect(i*screenSize/squaresDivision,j*screenSize/squaresDivision,screenSize/squaresDivision,screenSize/squaresDivision);
      }
    }
  }
  //we evolve the cells
  aliveCellsBackup=Array.from(aliveCells);
  for (let i = 0; i <= squaresDivision; i++) {
    for (let j = 0; j <= squaresDivision; j++) {
      willEvolve=evolve(i,j,aliveCellsBackup);
      if (willEvolve === "becomesDead") {
        for(var k = 0; k < aliveCells.length; k++) { //we remove the cell from the list
          if ((aliveCells[k][0] === i) && (aliveCells[k][1] === j)) {
            aliveCells.splice(k,1);
            break; //we know it can be there only once
          }
        }
      }
      else if (willEvolve === "becomesAlive") {
        aliveCells.push([i,j]);
      }
    }
  }
}
