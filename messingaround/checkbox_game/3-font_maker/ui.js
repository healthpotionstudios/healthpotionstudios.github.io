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
            if (y == 6)
            {
                box.setAttribute("checked", true);
            }
            box.id = ID + "-" + y.toString() + "," + x.toString();

            document.getElementById(appendID).appendChild(box);
        }
    document.getElementById(appendID).innerHTML += '<br>';
    }
}

var a = [
    [0,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,1,1,1,1],
    [1,0,0,0,1],
];

function updateUI(message, ID) 
{
    var backupID = ID;

    for(var i = 0; i < message.length; i++)
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
                ID = backupID + "-" + y.toString() + "," + (x + i*6).toString();
                if (letter[y][x] == 1)
                {
                    document.getElementById(ID).checked = true;
                }
            }   
        }
    }
}





var font = {
    "null":[
            [1,1,1,1,1],
            [1,1,1,1,1],
            [1,1,1,1,1],
            [1,1,1,1,1],
            [1,1,1,1,1],
        ],
    "a":[
            [0,1,1,1,0],
            [1,0,0,0,1],
            [1,0,0,0,1],
            [1,1,1,1,1],
            [1,0,0,0,1],
        ],
    "b":[
            [1,1,1,1,0],
            [1,0,0,0,1],
            [1,1,1,1,0],
            [1,0,0,0,1],
            [1,1,1,1,0],
        ],
    "c":[
            [0,1,1,1,0],
            [1,0,0,0,1],
            [1,0,0,0,0],
            [1,0,0,0,1],
            [0,1,1,1,0],
        ],
    "d":[
            [1,1,1,1,0],
            [1,0,0,0,1],
            [1,0,0,0,1],
            [1,0,0,0,1],
            [1,1,1,1,0],
        ],
    "e":[
            [1,1,1,1,1],
            [1,0,0,0,0],
            [1,1,1,1,0],
            [1,0,0,0,0],
            [1,1,1,1,1],
        ],
    "f":[
            [1,1,1,1,1],
            [1,0,0,0,0],
            [1,1,1,1,0],
            [1,0,0,0,0],
            [1,0,0,0,0],
        ],
    "g":[
            [0,1,1,1,0],
            [1,0,0,0,0],
            [1,0,0,1,1],
            [1,0,0,0,1],
            [0,1,1,1,0],
        ],
}