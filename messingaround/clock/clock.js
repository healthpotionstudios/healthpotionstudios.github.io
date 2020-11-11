
var h = 0;
var m = 0;
var s = 0;

var colon = [
    [false,false],
    [false,false],
    [true,true],
    [true,true],
    [false,false],
    [true,true],
    [true,true],
    [false,false],
    [false,false]
]

var digits = [
    [//0
        [false,true,true,true,false],
        [true,false,false,false,true],
        [true,false,false,false,true],
        [true,false,false,false,true],
        [false,false,false,false,false],
        [true,false,false,false,true],
        [true,false,false,false,true],
        [true,false,false,false,true],
        [false,true,true,true,false]
    ],
    [//1
        [false,false,false,false,false],
        [false,false,false,false,true],
        [false,false,false,false,true],
        [false,false,false,false,true],
        [false,false,false,false,false],
        [false,false,false,false,true],
        [false,false,false,false,true],
        [false,false,false,false,true],
        [false,false,false,false,false]
    ],
    [//2
        [false,true,true,true,false],
        [false,false,false,false,true],
        [false,false,false,false,true],
        [false,false,false,false,true],
        [false,true,true,true,false],
        [true,false,false,false,false],
        [true,false,false,false,false],
        [true,false,false,false,false],
        [false,true,true,true,false]
    ],
    [//3
        [false,true,true,true,false],
        [false,false,false,false,true],
        [false,false,false,false,true],
        [false,false,false,false,true],
        [false,true,true,true,false],
        [false,false,false,false,true],
        [false,false,false,false,true],
        [false,false,false,false,true],
        [false,true,true,true,false]
    ],
    [//4
        [false,false,false,false,false],
        [true,false,false,false,true],
        [true,false,false,false,true],
        [true,false,false,false,true],
        [false,true,true,true,false],
        [false,false,false,false,true],
        [false,false,false,false,true],
        [false,false,false,false,true],
        [false,false,false,false,false]
    ],
    [//5
        [false,true,true,true,false],
        [true,false,false,false,false],
        [true,false,false,false,false],
        [true,false,false,false,false],
        [false,true,true,true,false],
        [false,false,false,false,true],
        [false,false,false,false,true],
        [false,false,false,false,true],
        [false,true,true,true,false]
    ],
    [//6
        [false,true,true,true,false],
        [true,false,false,false,false],
        [true,false,false,false,false],
        [true,false,false,false,false],
        [false,true,true,true,false],
        [true,false,false,false,true],
        [true,false,false,false,true],
        [true,false,false,false,true],
        [false,true,true,true,false]
    ],
    [//7
        [false,true,true,true,false],
        [false,false,false,false,true],
        [false,false,false,false,true],
        [false,false,false,false,true],
        [false,false,false,false,false],
        [false,false,false,false,true],
        [false,false,false,false,true],
        [false,false,false,false,true],
        [false,false,false,false,false]
    ],
    [//8
        [false,true,true,true,false],
        [true,false,false,false,true],
        [true,false,false,false,true],
        [true,false,false,false,true],
        [false,true,true,true,false],
        [true,false,false,false,true],
        [true,false,false,false,true],
        [true,false,false,false,true],
        [false,true,true,true,false]
    ],
    [//9
        [false,true,true,true,false],
        [true,false,false,false,true],
        [true,false,false,false,true],
        [true,false,false,false,true],
        [false,true,true,true,false],
        [false,false,false,false,true],
        [false,false,false,false,true],
        [false,false,false,false,true],
        [false,true,true,true,false]
    ]

]



function createGrid(appendID, ID) 
{
    
    for (var y = 0; y < 9; y++) 
    { 
        for (var x = 0; x < 5; x++) 
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

function createColon(appendID, ID) 
{
    for (var y = 0; y < 9; y++) 
    { 
        for (var x = 0; x < 2; x++) 
        { 
            var box = document.createElement("INPUT");
            box.setAttribute("type", "checkbox");
            box.className = "myCheckbox";
            box.id = ID + "-" + y.toString() + "," + x.toString();
            
            if (colon[y][x])
            {
                box.setAttribute("checked", (colon[y][x]).toString());
            }
            else
            {
                box.setAttribute("disabled", "true");
            }
            
            document.getElementById(appendID).appendChild(box);
        }
    document.getElementById(appendID).innerHTML += '<br>';
    }
}

function init()
{
    createGrid("hour10", "hour10");
    createGrid("hour", "hour");

    createColon("colonhour", "colonhour");

    createGrid("min10", "min10");
    createGrid("min", "min");

    createColon("colonmin", "colonmin");

    createGrid("sec10", "sec10");
    createGrid("sec", "sec");

    startTime();

}

function startTime() 
{
    var today = new Date();
    h = today.getHours();
    m = today.getMinutes();
    s = today.getSeconds();
    h = checkhour(h);
    //document.getElementById('time').innerHTML = h + ":" + m + ":" + s;

    updateDisplay("sec", s, 1);
    updateDisplay("sec10", s, 10);
    updateDisplay("min", m, 1);
    updateDisplay("min10", m, 10);
    updateDisplay("hour", h, 1);
    updateDisplay("hour10", h, 10);
    
    var t = setTimeout(startTime, 1000);
}


function checkhour(i)
{
    if (i>12)
    {
        i -= 12;
    }
    return i;
}


function updateDisplay(ID, number, place)
{
    var backupID = ID;
    number = Math.floor((number / place) % 10);
    for (var y = 0; y < 9; y++) 
    { 
        for (var x = 0; x < 5; x++) 
        {
            ID = backupID + "-" + y.toString() + "," + x.toString();
            //console.log(ID);
            if (digits[number][y][x])
            {
                
                document.getElementById(ID).checked = true;
                document.getElementById(ID).disabled = false;
            }
            else
            {
                document.getElementById(ID).checked = false;
                document.getElementById(ID).disabled = true;
            }
        }
    }
}