var renderer = new Renderer();
var cube = new Cube(60, 25, 25);
var pyramid = new Pyramid(20, 25, 25);


sleepTime = 100;


var score = 0;




function updateSleepTime(time)
{
    sleepTime = time;
}


function init()
{
   sleepTime = document.getElementById("myRange").value;

    setTimeout(function(){},20);
   
    createUIGrid("gameWindow", "ui");
    renderer.Init();
   

    
    updateUI("3d shapes");
    //genApple();
    GameTick();
}

function GameTick() 
{
    renderer.StartFrame();

    cube.update();
    pyramid.update();
    
    renderer.refreshDisplay("window");
    renderer.updateDisplay("window");

    var t = setTimeout(GameTick, sleepTime);
}


function getRndInteger(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


/*document.addEventListener('keydown', function(e) 
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
  });*/