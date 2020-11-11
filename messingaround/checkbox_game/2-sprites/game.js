
width = 80;
height = 50;



sleepTime = 100;

let balls = [];

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

    for (var i = 0; i < 5; i++)
    {
        var ball = new Ball(width, height, i);
        balls.push(ball);
    }

    setTimeout(function(){},20);
    createGrid("gameWindow", "window");
    document.getElementById("loadingtext").innerHTML = "";
    startTime();
}

function startTime() 
{
    refreshDisplay("window");
    pixels = [];
    updateBalls();
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

function updateBalls() 
{
    for (var i = 0; i < balls.length; i++)
    {
        balls[i].update();
    }
}