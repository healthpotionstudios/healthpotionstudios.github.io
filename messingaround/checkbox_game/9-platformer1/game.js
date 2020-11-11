var renderer = new Renderer();
var player = new Player();


sleepTime = 100;


var score = 0;

var groundLevel = 45;


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
   

    
    updateUI("use arrows and space");
    //genApple();
    GameTick();
}

function GameTick() 
{
    renderer.StartFrame();

    renderer.DrawLine(0,groundLevel,80,groundLevel);

    player.update();
    
    renderer.refreshDisplay("window");
    renderer.updateDisplay("window");

    var t = setTimeout(GameTick, sleepTime);
}


function getRndInteger(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


//https://stackoverflow.com/questions/56484999/running-code-repeatedly-while-key-pressed-in-javascript
/* A map that stores real-time "press state" for corresponding key */
const currentKeysPressed = {};

function onKeypress(event) {

  /* Update keys pressed state for event.key to true
  signifiying the key that caused the event is now pressed */
  currentKeysPressed[event.key] = true;
  //console.log(currentKeysPressed);
}

/* Defined new event listener to reset key state
on key release */
function onKeyUp(event) {

  currentKeysPressed[event.key] = false;
}

window.addEventListener('keydown', onKeypress);
window.addEventListener('keyup', onKeyUp);