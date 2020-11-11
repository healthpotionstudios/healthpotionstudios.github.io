
width = 80; //80
height = 50; //50



sleepTime = 100;

var snake;

var apple = {
    x:0,
    y:0
};

var score = 0;


let pixels = []; //global variable

function updateSleepTime(time)
{
    sleepTime = time;
}

function createGrid(appendID, ID) 
{
    for (var y = 0; y < height; y++) 
    { 
        for (var x = 0; x < width; x++) 
        { 
            var box = document.createElement("INPUT");
            box.setAttribute("type", "checkbox");
            box.className = "myCheckbox";
            box.id = ID + "-" + y.toString() + "," + x.toString();
            /*
            var testnum = 0;
            if (digits[testnum][y][x])
            {
                box.setAttribute("checked", (digits[testnum][y][x]).toString());
            }
            */
            document.getElementById(appendID).appendChild(box);
        }
    document.getElementById(appendID).innerHTML += '<br>';
    }
}


function init()
{
   sleepTime = document.getElementById("myRange").value;

    snake = new Snake(width, height, 4);


    setTimeout(function(){},20);
    createUIGrid("gameWindow", "ui");
    createGrid("gameWindow", "window");
    document.getElementById("loadingtext").innerHTML = "";
    updateUI("snake   score=0");
    genApple();
    startTime();
}

function startTime() 
{
    refreshDisplay("window");
    pixels = [];
    pixels.push([apple.x,apple.y]);
    updateSnake();
    updateDisplay("window");

    var t = setTimeout(startTime, sleepTime);
}

function refreshDisplay(ID)
{
    var backupID = ID;

    for (var i = 0; i < pixels.length; i++)
    {
        if (pixels[i][0] > -1 && pixels[i][0] < width && pixels[i][1] > -1 && pixels[i][1] < height)
        {
            ID = backupID + "-" + pixels[i][1].toString() + "," + pixels[i][0].toString();
            document.getElementById(ID).checked = false;
        }
    }
}

function refreshFullDisplay(ID)
{
    var backupID = ID;
    for (var y = 0; y < height; y++) 
    { 
        for (var x = 0; x < width; x++) 
        {
            ID = backupID + "-" + y.toString() + "," + x.toString();
            document.getElementById(ID).checked = false;
        }
    }
}

function updateDisplay(ID)
{
    var backupID = ID;

    for (var i = 0; i < pixels.length; i++)
    {
        if (pixels[i][0] > -1 && pixels[i][0] < width && pixels[i][1] > -1 && pixels[i][1] < height)
        {
            ID = backupID + "-" + pixels[i][1].toString() + "," + pixels[i][0].toString();
            document.getElementById(ID).checked = true;
        }
    }
}

function updateSnake() 
{
    snake.update();
}

function updateScore()
{
    resetUI();
    score++;
    updateUI("snake   score=" + score.toString());
}

function genApple() {
    var x = this.getRndInteger(1,width-1);
    var y = this.getRndInteger(1,height-1);
    var valid = false;
    while(!valid)
    {
        if (!snake.checkCollision(x,y))
        {
            valid = true;
            break;
        }
        x = this.getRndInteger(1,width-1);
        y = this.getRndInteger(1,height-1);
    }
    apple.x = x;
    apple.y = y;

    if (sleepTime > 15)
    {
        sleepTime -= 2;
        var slider = document.getElementById("myRange");
        slider.value = sleepTime;
        var output = document.getElementById("slidervalue");
        output.innerHTML = slider.value;
    }
}

function getRndInteger(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


document.addEventListener('keydown', function(e) 
{
    // prevent snake from backtracking on itself by checking that it's 
    // not already moving on the same axis (pressing left while moving
    // left won't do anything, and pressing right while moving left
    // shouldn't let you collide with your own body)
    
    // left arrow key
    if (e.which === 37) {
        if (snake.snakeXMove != 1)
        {
            snake.updateMovement(-1,0);
        }
    }
    // up arrow key
    else if (e.which === 38) {
        if (snake.snakeYMove != 1)
        {
            snake.updateMovement(0,-1);
        }
    }
    // right arrow key
    else if (e.which === 39) {
        if (snake.snakeXMove != -1)
        {
            snake.updateMovement(1,0);
        }
    }
    // down arrow key
    else if (e.which === 40) {
        if (snake.snakeYMove != -1 && (snake.snakeXMove != 0 || snake.snakeYMove != 0))
        {
            snake.updateMovement(0,1);
        }
    }
/*
    // left arrow key
    if (e.which === 37 && snake.dx === 0) {
        snake.dx = -grid;
        snake.dy = 0;
      }
      // up arrow key
      else if (e.which === 38 && snake.dy === 0) {
        snake.dy = -grid;
        snake.dx = 0;
      }
      // right arrow key
      else if (e.which === 39 && snake.dx === 0) {
        snake.dx = grid;
        snake.dy = 0;
      }
      // down arrow key
      else if (e.which === 40 && snake.dy === 0) {
        snake.dy = grid;
        snake.dx = 0;
      }*/
  });