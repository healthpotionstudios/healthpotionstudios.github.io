var renderer = new Renderer();




sleepTime = 100;

var snake = [];

var apple = {
    x:0,
    y:0
};

var score = 0;




function updateSleepTime(time)
{
    sleepTime = time;
}


function init()
{
   sleepTime = document.getElementById("myRange").value;

   for (var i = 0; i < 20; i++)
   {
        snake.push(new Snake(getRndInteger(5,renderer.width-5), getRndInteger(5,renderer.height-5), getRndInteger(6,30)));
   }

    setTimeout(function(){},20);
   
    createUIGrid("gameWindow", "ui");
    renderer.Init();
   

    
    updateUI("new system is faster");
    //genApple();
    GameTick();
}

function GameTick() 
{
    renderer.StartFrame();

    updateSnake();
    //renderer.DrawLine(5,5,getRndInteger(-15,30),getRndInteger(-15,30));
    
    renderer.refreshDisplay("window");
    renderer.updateDisplay("window");

    var t = setTimeout(GameTick, sleepTime);
}

function updateSnake() 
{
    for (var i = 0; i < snake.length; i++)
    {
        snake[i].update();
    }
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