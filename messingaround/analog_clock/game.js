var renderer = new Renderer();



sleepTime = 250;


var score = 0;


function init()
{
    setTimeout(function(){},20);
   
    renderer.Init();
    
   

    GameTick();
}

function GameTick() 
{
    renderer.StartFrame();

    var step = 1;  // see note 1
    var cx = 25; 
    var cy = 25;
    var r = 22;

    for(var theta=1;  theta < 360;  theta+=step)
    { 
        
        var x = Math.floor(cx + r*Math.cos(theta * (180/Math.PI)));
        var y = Math.floor(cy + r*Math.sin(theta * (180/Math.PI))); 
        //console.log(x);
        renderer.SetPixel([x,y]);
    }

    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();

    var hr = 9;
    var mr = 15;
    var sr = 19;

    Math.TAU = 2 * Math.PI;

    var armRadians = (Math.TAU * s/60) - (Math.TAU/4);
    var x = Math.round(cx + sr*Math.cos(armRadians));
    var y = Math.round(cy + sr*Math.sin(armRadians)); 
    renderer.DrawLine(cx, cy, x, y);

    armRadians = (Math.TAU * m/60) - (Math.TAU/4);
    x = Math.round(cx + mr*Math.cos(armRadians));
    y = Math.round(cy + mr*Math.sin(armRadians)); 
    renderer.DrawLine(cx, cy, x, y);

    armRadians = (Math.TAU * h/12) - (Math.TAU/4);
    x = Math.round(cx + hr*Math.cos(armRadians));
    y = Math.round(cy + hr*Math.sin(armRadians)); 
    renderer.DrawLine(cx, cy, x, y);
    //console.log(s);
    
    renderer.refreshDisplay("window");
    renderer.updateDisplay("window");

    var t = setTimeout(GameTick, sleepTime);
}


function getRndInteger(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
