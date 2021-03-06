//https://i.pinimg.com/originals/de/7c/a5/de7ca50052191cc84c662a64d4b4b8b4.jpg

function createUIGrid(appendID, ID) 
{
    for (var y = 0; y < 7; y++) 
    {
        for (var x = 0; x < 135; x++) 
        {
            var box = document.createElement("INPUT");
            box.setAttribute("type", "checkbox");
            box.className = "uiCheckbox";
            if (y == 0) 
            {
                box.setAttribute("checked", true);
            }
            box.id = ID + "-" + y.toString() + "," + x.toString();

            document.getElementById(appendID).appendChild(box);
        }
        document.getElementById(appendID).innerHTML += '<br>';
    }
}


function updateUI(message) 
{
    resetUI();
    var limit = Math.min(message.length, 22);
    for (var i = 0; i < limit; i++) 
    {
        var letter = [];
        if (font[message[i].toLowerCase()]) 
        {
            letter = font[message[i].toLowerCase()];
        }
        else 
        {
            letter = font["null"];
        }
        for (var y = 0; y < 5; y++) 
        {
            for (var x = 0; x < 6; x++) 
            {
                ID = "ui" + "-" + (y+2).toString() + "," + (x + i * 6 + 2).toString();
                if (letter[y][x] == 1) 
                {
                    document.getElementById(ID).checked = true;
                }
            }
        }
    }
}

function resetUI() {
    for (var y = 0; y < 7; y++) 
    {
        for (var x = 0; x < 135; x++) 
        {
            ID = "ui" + "-" + y.toString() + "," + x.toString();
                if (y != 0) 
                {
                    document.getElementById(ID).checked = false;
                }
                else
                {
                    document.getElementById(ID).checked = true;
                }
        }
    }
}

function testUpdateUI() {
    var x = document.getElementById("myText").value;
    resetUI();
    updateUI(x);
}



//abcdefghijklmnopqrstuvwxyz 1234567890?!@<>*+-=_#%/\\.,;:(){}[]$|~'\"
//@ is a heart

var font = {
    "null": [
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
    ],
    " ": [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ],
    "a": [
        [0, 1, 0, 1, 0],
        [0, 0, 0, 0, 0],
        [1, 0, 0, 0, 1],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
    ],
    "b": [
        [0, 1, 0, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0],
    ],
    "c": [
        [0, 1, 0, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
    ],
    "d": [
        [1, 1, 0, 1, 1],
        [1, 0, 0, 0, 1],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [1, 1, 1, 1, 1],
    ],
    "e": [
        [0, 1, 1, 1, 0],
        [1, 0, 1, 0, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 0, 1, 0, 1],
    ],
    "f": [
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0],
        [1, 1, 1, 1, 0],
        [1, 0, 0, 0, 0],
        [1, 1, 1, 1, 1],
    ],
    "g": [
        [0, 1, 1, 1, 0],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 1, 1],
        [1, 0, 0, 0, 1],
        [0, 1, 1, 1, 0],
    ],
    "h": [
        [1, 0, 0, 0, 1,],
        [1, 0, 0, 0, 1,],
        [1, 1, 1, 1, 1,],
        [1, 0, 0, 0, 1,],
        [1, 0, 0, 0, 1,],
    ],
    "i": [
        [0, 1, 1, 1, 0,],
        [0, 0, 1, 0, 0,],
        [0, 0, 1, 0, 0,],
        [0, 0, 1, 0, 0,],
        [0, 1, 1, 1, 0,],
    ],
    "j": [
        [0, 0, 0, 1, 1,],
        [0, 0, 0, 0, 1,],
        [0, 0, 0, 0, 1,],
        [1, 0, 0, 0, 1,],
        [0, 1, 1, 1, 0,],
    ],
    "k": [
        [1, 0, 0, 1, 0,],
        [1, 0, 1, 0, 0,],
        [1, 1, 0, 0, 0,],
        [1, 0, 1, 0, 0,],
        [1, 0, 0, 1, 0,],
    ],
    "l": [
        [1, 0, 0, 0, 0,],
        [1, 0, 0, 0, 0,],
        [1, 0, 0, 0, 0,],
        [1, 0, 0, 0, 0,],
        [1, 1, 1, 1, 0,],
    ],
    "m": [
        [1, 0, 0, 0, 1,],
        [1, 1, 0, 1, 1,],
        [1, 0, 1, 0, 1,],
        [1, 0, 0, 0, 1,],
        [1, 0, 0, 0, 1,],
    ],
    "n": [
        [1, 0, 0, 1, 0,],
        [1, 1, 0, 1, 0,],
        [1, 0, 1, 1, 0,],
        [1, 0, 0, 1, 0,],
        [1, 0, 0, 1, 0,],
    ],
    "o": [
        [0, 1, 1, 0, 0,],
        [1, 0, 0, 1, 0,],
        [1, 0, 0, 1, 0,],
        [1, 0, 0, 1, 0,],
        [0, 1, 1, 0, 0,],
    ],
    "p": [
        [1, 1, 1, 0, 0,],
        [1, 0, 0, 1, 0,],
        [1, 1, 1, 0, 0,],
        [1, 0, 0, 0, 0,],
        [1, 0, 0, 0, 0,],
    ],
    "q": [
        [0, 1, 1, 0, 0,],
        [1, 0, 0, 1, 0,],
        [1, 0, 0, 1, 0,],
        [1, 0, 0, 1, 0,],
        [0, 1, 1, 1, 1,],
    ],
    "r": [
        [1, 1, 1, 0, 0,],
        [1, 0, 0, 1, 0,],
        [1, 1, 1, 0, 0,],
        [1, 0, 0, 1, 0,],
        [1, 0, 0, 1, 0,],
    ],
    "s": [
        [0, 1, 1, 1, 0,],
        [1, 0, 0, 0, 0,],
        [0, 1, 1, 0, 0,],
        [0, 0, 0, 1, 0,],
        [1, 1, 1, 0, 0,],
    ],
    "t": [
        [1, 1, 1, 1, 1,],
        [0, 0, 1, 0, 0,],
        [0, 0, 1, 0, 0,],
        [0, 0, 1, 0, 0,],
        [0, 0, 1, 0, 0,],
    ],
    "u": [
        [1, 0, 0, 1, 0,],
        [1, 0, 0, 1, 0,],
        [1, 0, 0, 1, 0,],
        [1, 0, 0, 1, 0,],
        [0, 1, 1, 0, 0,],
    ],
    "v": [
        [1, 0, 0, 1, 0,],
        [1, 0, 0, 1, 0,],
        [1, 0, 0, 1, 0,],
        [1, 0, 1, 0, 0,],
        [0, 1, 0, 0, 0,],
    ],
    "w": [
        [1, 0, 0, 0, 1,],
        [1, 0, 0, 0, 1,],
        [1, 0, 1, 0, 1,],
        [1, 0, 1, 0, 1,],
        [0, 1, 0, 1, 0,],
    ],
    "x": [
        [1, 0, 0, 0, 1,],
        [1, 1, 0, 0, 1,],
        [0, 1, 1, 1, 0,],
        [1, 0, 0, 1, 1,],
        [1, 0, 0, 0, 1,],
    ],
    "y":[
        [1,0,0,0,1,],
        [0,1,0,1,0,],
        [0,0,1,0,0,],
        [0,0,1,0,0,],
        [0,0,1,0,0,],
    ],
    "z": [
        [1, 1, 1, 1, 0,],
        [0, 0, 0, 1, 0,],
        [0, 1, 1, 0, 0,],
        [1, 0, 0, 0, 0,],
        [1, 1, 1, 1, 0,],
    ],
    "1": [
        [0, 0, 1, 0, 0,],
        [0, 1, 1, 0, 0,],
        [0, 0, 1, 0, 0,],
        [0, 0, 1, 0, 0,],
        [0, 1, 1, 1, 0,],
    ],
    "2": [
        [1, 1, 1, 0, 0,],
        [0, 0, 0, 1, 0,],
        [0, 0, 1, 0, 0,],
        [0, 1, 0, 0, 0,],
        [1, 1, 1, 1, 0,],
    ],
    "3": [
        [1, 1, 1, 0, 0,],
        [0, 0, 0, 1, 0,],
        [0, 1, 1, 0, 0,],
        [0, 0, 0, 1, 0,],
        [1, 1, 1, 0, 0,],
    ],
    "4": [
        [0, 0, 1, 1, 0,],
        [0, 1, 0, 1, 0,],
        [1, 0, 0, 1, 0,],
        [0, 1, 1, 1, 0,],
        [0, 0, 0, 1, 0,],
    ],
    "5": [
        [0, 1, 1, 1, 0,],
        [1, 0, 0, 0, 0,],
        [1, 1, 1, 0, 0,],
        [0, 0, 0, 1, 0,],
        [1, 1, 1, 0, 0,],
    ],
    "6": [
        [0, 1, 1, 0, 0,],
        [1, 0, 0, 0, 0,],
        [1, 1, 1, 0, 0,],
        [1, 0, 0, 1, 0,],
        [0, 1, 1, 0, 0,],
    ],
    "7": [
        [1, 1, 1, 1, 0,],
        [0, 0, 0, 1, 0,],
        [0, 0, 1, 0, 0,],
        [0, 1, 0, 0, 0,],
        [0, 1, 0, 0, 0,],
    ],
    "8": [
        [0, 1, 1, 0, 0,],
        [1, 0, 0, 1, 0,],
        [0, 1, 1, 0, 0,],
        [1, 0, 0, 1, 0,],
        [0, 1, 1, 0, 0,],
    ],
    "9": [
        [0, 1, 1, 0, 0,],
        [1, 0, 0, 1, 0,],
        [0, 1, 1, 1, 0,],
        [0, 0, 0, 1, 0,],
        [0, 1, 1, 0, 0,],
    ],
    "0": [
        [0, 0, 1, 0, 0,],
        [0, 1, 0, 1, 0,],
        [0, 1, 0, 1, 0,],
        [0, 1, 0, 1, 0,],
        [0, 0, 1, 0, 0,],
    ],
    "?": [
        [0, 1, 1, 0, 0,],
        [0, 0, 0, 1, 0,],
        [0, 0, 1, 0, 0,],
        [0, 0, 0, 0, 0,],
        [0, 0, 1, 0, 0,],
    ],
    "!": [
        [0, 0, 1, 0, 0,],
        [0, 0, 1, 0, 0,],
        [0, 0, 1, 0, 0,],
        [0, 0, 0, 0, 0,],
        [0, 0, 1, 0, 0,],
    ],
    "@": [
        [0, 1, 0, 1, 0,],
        [1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1,],
        [0, 1, 1, 1, 0,],
        [0, 0, 1, 0, 0,],
    ],
    "<": [
        [0, 0, 0, 1, 0,],
        [0, 0, 1, 0, 0,],
        [0, 1, 0, 0, 0,],
        [0, 0, 1, 0, 0,],
        [0, 0, 0, 1, 0,],
    ],
    ">": [
        [0, 1, 0, 0, 0,],
        [0, 0, 1, 0, 0,],
        [0, 0, 0, 1, 0,],
        [0, 0, 1, 0, 0,],
        [0, 1, 0, 0, 0,],
    ],
    "*": [
        [0, 0, 0, 0, 0,],
        [0, 1, 0, 1, 0,],
        [0, 0, 1, 0, 0,],
        [0, 1, 0, 1, 0,],
        [0, 0, 0, 0, 0,],
    ],
    "+": [
        [0, 0, 0, 0, 0,],
        [0, 0, 1, 0, 0,],
        [0, 1, 1, 1, 0,],
        [0, 0, 1, 0, 0,],
        [0, 0, 0, 0, 0,],
    ],
    "-": [
        [0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0,],
        [0, 1, 1, 1, 0,],
        [0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0,],
    ],
    "=": [
        [0, 0, 0, 0, 0,],
        [1, 1, 1, 1, 0,],
        [0, 0, 0, 0, 0,],
        [1, 1, 1, 1, 0,],
        [0, 0, 0, 0, 0,],
    ],
    "_": [
        [0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0,],
        [1, 1, 1, 1, 0,],
    ],
    "#": [
        [0, 1, 0, 1, 0,],
        [1, 1, 1, 1, 1,],
        [0, 1, 0, 1, 0,],
        [1, 1, 1, 1, 1,],
        [0, 1, 0, 1, 0,],
    ],
    "%": [
        [0, 1, 0, 1, 0,],
        [0, 0, 0, 1, 0,],
        [0, 0, 1, 0, 0,],
        [0, 1, 0, 0, 0,],
        [0, 1, 0, 1, 0,],
    ],
    "/": [
        [0, 0, 0, 1, 0,],
        [0, 0, 1, 0, 0,],
        [0, 0, 1, 0, 0,],
        [0, 0, 1, 0, 0,],
        [0, 1, 0, 0, 0,],
    ],
    "\\": [
        [0, 1, 0, 0, 0,],
        [0, 0, 1, 0, 0,],
        [0, 0, 1, 0, 0,],
        [0, 0, 1, 0, 0,],
        [0, 0, 0, 1, 0,],
    ],
    ".": [
        [0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0,],
        [0, 1, 1, 0, 0,],
        [0, 1, 1, 0, 0,],
    ],
    ",": [
        [0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0,],
        [0, 0, 1, 0, 0,],
        [0, 0, 1, 0, 0,],
    ],
    ";": [
        [0, 0, 1, 0, 0,],
        [0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0,],
        [0, 0, 1, 0, 0,],
        [0, 0, 1, 0, 0,],
    ],
    ":": [
        [0, 1, 1, 0, 0,],
        [0, 1, 1, 0, 0,],
        [0, 0, 0, 0, 0,],
        [0, 1, 1, 0, 0,],
        [0, 1, 1, 0, 0,],
    ],
    "(": [
        [0, 0, 1, 0, 0,],
        [0, 1, 0, 0, 0,],
        [0, 1, 0, 0, 0,],
        [0, 1, 0, 0, 0,],
        [0, 0, 1, 0, 0,],
    ],
    ")": [
        [0, 0, 1, 0, 0,],
        [0, 0, 0, 1, 0,],
        [0, 0, 0, 1, 0,],
        [0, 0, 0, 1, 0,],
        [0, 0, 1, 0, 0,],
    ],
    "{": [
        [0, 0, 1, 1, 0,],
        [0, 0, 1, 0, 0,],
        [0, 1, 1, 0, 0,],
        [0, 0, 1, 0, 0,],
        [0, 0, 1, 1, 0,],
    ],
    "}": [
        [0, 1, 1, 0, 0,],
        [0, 0, 1, 0, 0,],
        [0, 0, 1, 1, 0,],
        [0, 0, 1, 0, 0,],
        [0, 1, 1, 0, 0,],
    ],
    "[": [
        [0, 1, 1, 0, 0,],
        [0, 1, 0, 0, 0,],
        [0, 1, 0, 0, 0,],
        [0, 1, 0, 0, 0,],
        [0, 1, 1, 0, 0,],
    ],
    "]": [
        [0, 0, 1, 1, 0,],
        [0, 0, 0, 1, 0,],
        [0, 0, 0, 1, 0,],
        [0, 0, 0, 1, 0,],
        [0, 0, 1, 1, 0,],
    ],
    "$": [
        [0, 1, 1, 1, 1,],
        [1, 0, 1, 0, 0,],
        [0, 1, 1, 1, 0,],
        [0, 0, 1, 0, 1,],
        [1, 1, 1, 1, 0,],
    ],
    "|": [
        [0, 0, 1, 0, 0,],
        [0, 0, 1, 0, 0,],
        [0, 0, 1, 0, 0,],
        [0, 0, 1, 0, 0,],
        [0, 0, 1, 0, 0,],
    ],
    "~": [
        [0, 0, 1, 0, 0,],
        [0, 1, 1, 1, 0,],
        [0, 1, 1, 1, 0,],
        [0, 1, 1, 1, 0,],
        [0, 1, 1, 1, 0,],
    ],
    "\'":[
        [0,0,1,0,0,],
        [0,0,1,0,0,],
        [0,0,0,0,0,],
        [0,0,0,0,0,],
        [0,0,0,0,0,],
        ],
        "\"":[
            [0,1,0,1,0,],
            [0,1,0,1,0,],
            [0,0,0,0,0,],
            [0,0,0,0,0,],
            [0,0,0,0,0,],
            ],
}