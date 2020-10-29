var renderer = new Renderer();
var rick = new Rick();


sleepTime = 25;



function updateSleepTime(time)
{
    sleepTime = time;
}


function init()
{

    setTimeout(function(){},20);
   
    createUIGrid("gameWindow", "ui");
    renderer.Init();

    
    updateUI("heyoooooo");
    //genApple();
    GameTick();
}

function GameTick() 
{
    renderer.StartFrame();

    rick.update();
    
    renderer.refreshDisplay("window");
    renderer.updateDisplay("window");

    var t = setTimeout(GameTick, sleepTime);
}

