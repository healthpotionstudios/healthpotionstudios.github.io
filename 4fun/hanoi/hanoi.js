var cwidth = 600;
var cheight = 400;
var diskAmount = 5;
var pegHeight = 16 * diskAmount + 25;

var pegarray = [[], [], []];

var selected = -1;

var peg1x = cwidth * 0.2;
var peg2x = cwidth * 0.5;
var peg3x = cwidth * 0.8;

var diskOutline = false;
var showMouseArea = false;
var showDiskNum = true;
var showPegArrayP = false;

var currentMove = 0;
var perfectMove = Math.pow(2, diskAmount) - 1;

var gameOver = false;

var failedPos = 0;
var timer = 0;
var timer2 = 0;


function setup() {
  var c = createCanvas(cwidth, cheight);
  c.id("gamecanvas");
  c.parent("sketch-holder");

  for (var i = diskAmount; i >= 1; i--) {
    pegarray[0].push(i);
  }
}

function resetgame()
{
    diskAmount = document.getElementById("myRange").value;
    pegHeight = 16 * diskAmount + 25;
    pegarray = [[], [], []];
    selected = -1;
    currentMove = 0;
    perfectMove = Math.pow(2, diskAmount) - 1;
    gameOver = false;
    
    setup();
}

//main loop
function draw() {
  background(220);
  strokeWeight(7);
  stroke(160, 100, 20);
  line(peg1x, cheight, peg1x, cheight - pegHeight);
  line(peg2x, cheight, peg2x, cheight - pegHeight);
  line(peg3x, cheight, peg3x, cheight - pegHeight);

  drawHanoi(1, peg1x);
  drawHanoi(2, peg2x);
  drawHanoi(3, peg3x);

  if (!gameOver) {
    drawSelected(selected);
    mouseArea(peg1x);
    mouseArea(peg2x);
    mouseArea(peg3x);
    mouseCursor();
  } else {
    noStroke();
    textSize(60);
    text("You Win!", peg2x, 160);
  }
  if (timer > 0) {
    drawX(failedPos);
  }
  drawMoves();

  timer--;
  timer2++;
}

//disk color
function gradColor(percent) {
    //percent = 1 - percent;
    if (percent > 0.98) {
      percent = 0.98;
    }
    var colors = [[255, 0, 0], [255, 127, 0], [255, 255, 0], [38, 237, 35], [0, 0, 255], [148, 0, 211]];
    var cID = Math.floor(colors.length * percent);
    var c1 = colors[cID];
  
    return c1;
  }

//arrow over peg
function drawSelected(peg) {
  if (selected == -1) {
    peg = -100;
  } else if (selected == 1) {
    peg = peg1x;
  } else if (selected == 2) {
    peg = peg2x;
  } else {
    peg = peg3x;
  }
  stroke(0);
  strokeWeight(5);
  var y = 3 * sin(timer2 * 0.2);
  line(peg, cheight - pegHeight - 25 + y, peg - 15, cheight - pegHeight - 15 - 25 + y);
  line(peg, cheight - pegHeight - 25 + y, peg + 15, cheight - pegHeight - 15 - 25 + y);
}

//X over invalid moves
function drawX(pegNum) {
    var pegx = 0;
    if (pegNum == 1) {
      pegx = peg1x;
    }
    if (pegNum == 2) {
      pegx = peg2x;
    }
    if (pegNum == 3) {
      pegx = peg3x;
    }
    stroke(255, 0, 0);
    strokeWeight(5);
    line(pegx - 10, cheight - pegHeight - 40 - 10, pegx + 10, cheight - pegHeight - 40 + 10);
    line(pegx - 10, cheight - pegHeight - 40 + 10, pegx + 10, cheight - pegHeight - 40 - 10);
  }
  

  function drawHanoi(pegNum, pegx) {
    for (var i = 0; i < pegarray[pegNum - 1].length; i++) {
      var w = 8 * pegarray[pegNum - 1][i] + 10;
      if (diskOutline) {
        strokeWeight(17.5);
        stroke(0);
        line(pegx - w, cheight - i * 16 + 8 - 16, pegx + w, cheight - i * 16 + 8 - 16);
      }
      strokeWeight(16);
      stroke(gradColor(1 - pegarray[pegNum - 1][i] / diskAmount));
      line(pegx - w, cheight - i * 16 + 8 - 16, pegx + w, cheight - i * 16 + 8 - 16);
  
      if (showDiskNum) {
        textAlign(CENTER);
        strokeWeight(2.5);
        stroke(255);
        textSize(13);
        text(pegarray[pegNum - 1][i], pegx, cheight - i * 16 + 8 - 16 + 5);
      }
    }
  }

//draws clickable mouse area
function mouseArea(peg) {
  if (showMouseArea) {
    stroke(0);
    strokeWeight(1);
    line(peg - cwidth * 0.12, cheight, peg - cwidth * 0.12, cheight - pegHeight - 35);
    line(peg + cwidth * 0.12, cheight, peg + cwidth * 0.12, cheight - pegHeight - 35);
    line(peg - cwidth * 0.12, cheight - pegHeight - 35, peg + cwidth * 0.12, cheight - pegHeight - 35);
  }
}

//changes cursor to pointer
function mouseCursor() {
  if (mouseY > cheight - pegHeight - 35 && mouseY < cheight) {
    if (mouseX > peg1x - cwidth * 0.12 && mouseX < peg1x + cwidth * 0.12) {
      cursor("pointer");
    } else if (mouseX > peg2x - cwidth * 0.12 && mouseX < peg2x + cwidth * 0.12) {
      cursor("pointer");
    } else if (mouseX > peg3x - cwidth * 0.12 && mouseX < peg3x + cwidth * 0.12) {
      cursor("pointer");
    } else {
      cursor("default");
    }
  } else {
    cursor("default");
  }
}

//is mouse in click area
function mousePressed() {
  if (!gameOver && mouseY > cheight - pegHeight - 35 && mouseY < cheight) {
    if (mouseX > peg1x - cwidth * 0.12 && mouseX < peg1x + cwidth * 0.12) {
      initMove(1);
    } else if (mouseX > peg2x - cwidth * 0.12 && mouseX < peg2x + cwidth * 0.12) {
      initMove(2);
    } else if (mouseX > peg3x - cwidth * 0.12 && mouseX < peg3x + cwidth * 0.12) {
      initMove(3);
    }
  }
}

// main game code
function initMove(pegNum) {
  pegNum--;
  if (selected == -1) {
    if (pegarray[pegNum].length != 0) {
      selected = pegNum + 1;
    }
  } else {
    if (pegarray[pegNum] != undefined) {
      if (pegarray[selected - 1][pegarray[selected - 1].length - 1] > pegarray[pegNum][pegarray[pegNum].length - 1]) {
        failedPos = pegNum + 1;
        timer = 25;
      } else {
        if (selected - 1 != pegNum) {
          pegarray[pegNum].push(pegarray[selected - 1][pegarray[selected - 1].length - 1]);
          pegarray[selected - 1].pop();
          currentMove++;
          selected = -1;
          if (showPegArrayP) {
            document.getElementById("a1").innerHTML = "[" + pegarray[0] + "]";
            document.getElementById("a2").innerHTML = "[" + pegarray[1] + "]";
            document.getElementById("a3").innerHTML = "[" + pegarray[2] + "]";
          } else {
            document.getElementById("a1").innerHTML = "";
            document.getElementById("a2").innerHTML = "";
            document.getElementById("a3").innerHTML = "";
          }

          gameOver = checkWin();
        }
        if (selected - 1 == pegNum) {
          selected = -1;
        }
      }
    }
  }
}

function checkWin() {
  var didWin = true;
  if (pegarray[2].length != diskAmount) {
    didWin = false;
  }
  return didWin;
}

//text on screen
function drawMoves() {
  textAlign(CENTER);
  noStroke();
  textSize(20);
  text("Perfect Game", peg3x, 40);
  text("Current Moves", peg1x, 40);
  noStroke();
  textSize(40);
  text(perfectMove, peg3x, 85);
  text(currentMove, peg1x, 85);
}


//VVVVV     toggleables      VVVVVV
function setoutline() {
  diskOutline = !diskOutline;
}

function setdisknumber() {
  showDiskNum = !showDiskNum;
}

function setmouseoutline() {
  showMouseArea = !showMouseArea;
}

function showPegArrays() {
  showPegArrayP = !showPegArrayP;
  if (showPegArrayP) {
    document.getElementById("a1").innerHTML = "[" + pegarray[0] + "]";
    document.getElementById("a2").innerHTML = "[" + pegarray[1] + "]";
    document.getElementById("a3").innerHTML = "[" + pegarray[2] + "]";
  } else {
    document.getElementById("a1").innerHTML = "";
    document.getElementById("a2").innerHTML = "";
    document.getElementById("a3").innerHTML = "";
  }
}
