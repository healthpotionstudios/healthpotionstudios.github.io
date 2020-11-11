
width = 5; //80
height = 5; //50



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


    setTimeout(function(){},20);
    createGrid("gameWindow", "window");
    document.getElementById("loadingtext").innerHTML = "";
    //startTime();
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


/*
"a":[
    [0,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,1,1,1,1],
    [1,0,0,0,1],
],
*/

function gen()
{
    var output = "\"a\":[<br>";

    var backupID = "window";
    for (var y = 0; y < height; y++) 
    { 
        output += "["
        for (var x = 0; x < width; x++) 
        {
            ID = backupID + "-" + y.toString() + "," + x.toString();
            if (document.getElementById(ID).checked)
            {
                output += "1";
            }
            else
            {
                output += "0";
            }
            if (x != width)
            {
                output += ",";
            }
        }
        output += "],<br>"
    }
    output += "],"

    document.getElementById("font").innerHTML = output;
}

function reset() {
    var backupID = "window";
    for (var y = 0; y < height; y++) 
    { 
        for (var x = 0; x < width; x++) 
        {
            ID = backupID + "-" + y.toString() + "," + x.toString();
            document.getElementById(ID).checked = false;
        }
    }
}