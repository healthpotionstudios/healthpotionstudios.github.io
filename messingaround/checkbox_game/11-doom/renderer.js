class Renderer 
{
    constructor()
    {
        
        this.width = 80;
        this.height = 50;
        this.pixels = {}; //current pixels
        this.lastFramePixels = {} //pixels to turn off
    }

    Init()
    {
        this.createGrid("gameWindow", "window");
        document.getElementById("loadingtext").innerHTML = "";
    }
    
    createGrid(appendID, ID) 
    {
        for (var y = 0; y < this.height; y++) 
        { 
            for (var x = 0; x < this.width; x++) 
            { 
                var box = document.createElement("INPUT");
                box.setAttribute("type", "checkbox");
                box.className = "myCheckbox";
                box.id = ID + "-" + y.toString() + "," + x.toString();
                document.getElementById(appendID).appendChild(box);
            }
        document.getElementById(appendID).innerHTML += '<br>';
        }
    }

    StartFrame()
    {
        this.lastFramePixels = this.pixels;
        this.pixels = {}
    }

    InBounds(pt)
    {
        if (pt[0] < 0)
        {
            return false;
        }
        else if (pt[0] > this.width)
        {
            return false;
        }
        else if (pt[1] < 0)
        {
            return false;
        }
        else if (pt[1] > this.height)
        {
            return false;
        }
        return true;
    }

    SetPixel(pt)
    {
        if (!this.InBounds(pt))
        {
            return;
        }

        if (!(pt in this.pixels))
        {
            this.pixels[pt] = pt;
            delete this.lastFramePixels[pt]; 
        }
    }

    UnsetPixel(pt)
    {
        if (this.InBounds(pt))
        {
            delete this.pixels[pt]; 
        }
    }

    refreshDisplay(ID)
    {
        var backupID = ID;
        for (var key in this.lastFramePixels)
        {
            ID = backupID + "-" + this.lastFramePixels[key][1].toString() + "," + this.lastFramePixels[key][0].toString();
            try{
                document.getElementById(ID).checked = false;
            }
            catch(err)
            {
                //console.log("Failed to assign pixel: " + ID);
            }
        }
    }

    updateDisplay(ID)
    {
        var backupID = ID;
        for (var key in this.pixels)
        {
            ID = backupID + "-" + this.pixels[key][1].toString() + "," + this.pixels[key][0].toString();
            try
            {
                document.getElementById(ID).checked = true;
            }
            catch(err)
            {
                //console.log("Failed to assign pixel: " + ID);
            }
        }
    }

    clear(ID)
    {
        var backupID = ID;
        for (var key in this.lastFramePixels)
        {
            ID = backupID + "-" + this.pixels[key][1].toString() + "," + this.pixels[key][0].toString();
            try{
                document.getElementById(ID).checked = false;
            }
            catch(err)
            {
                //console.log("Failed to assign pixel: " + ID);
            }
        }
        for (var key in this.pixels)
        {
            ID = backupID + "-" + this.pixels[key][1].toString() + "," + this.pixels[key][0].toString();
            try{
                document.getElementById(ID).checked = false;
            }
            catch(err)
            {
                //console.log("Failed to assign pixel: " + ID);
            }
        }
        this.pixels = {};
        this.lastFramePixels = {};
    }

    updateScore()
    {
        resetUI();
        score++;
        updateUI("snake   score=" + score.toString());
    }



    //==============================================================================================Shape system
    //https://www.redblobgames.com/grids/line-drawing.html
    diagonal_distance(p0x, p0y, p1x, p1y) {
        var dx = p1x - p0x, dy = p1y - p0y;
        return Math.max(Math.abs(dx), Math.abs(dy));
    }
    
    round_point(p) {
        return [Math.round(p[0]), Math.round(p[1])];
    }
    
    lerp_point(p0x, p0y, p1x, p1y, t) {
        return [this.lerp(p0x, p1x, t), this.lerp(p0y, p1y, t)];
    }
    
    lerp(start, end, t) {
        return start + t * (end-start);
    }

    DrawLine(p0x, p0y, p1x, p1y) {    
        var N = this.diagonal_distance(p0x, p0y, p1x, p1y);
        for (var step = 0; step <= N; step++) {
            var t = N == 0? 0.0 : step / N;
            this.SetPixel(this.round_point(this.lerp_point(p0x, p0y, p1x, p1y, t)));
        }
    }

    DrawPoint(pt)
    {
        this.SetPixel(pt);
    }

    DrawSquare(p0x, p0y, p1x, p1y)
    {
        for (var x = p0x; x < p1x; x++)
        {
            for (var y = p0y; x < p1y; y++)
            {
                this.SetPixel([x,y]);
            }
        }
    }

    InsideCircle(cx, cy, x, y, r) {
        var dx = cx - x;
        var dy = cy - y;
        var distance_squared = dx*dx + dy*dy;
        return distance_squared <= r*r;
    }

    DrawCircle(cx,cy,r)
    {
        var top = max(0, cy - r);
        var bottom = min(this.height, cy + r);
        var left = max(0, cx - r);
        var right = min(this.width, cx + r);

        for (var y = top; y <= bottom; y++) 
        {
            for (var x = left; x <= right; x++) 
            {
                if (this.InsideCircle(cx, cy, x, y, r))
                {
                    this.SetPixel([x,y]);
                }
            }
        }
    }


    DrawSprite(x,y,type,distance, spriteSheet = 0)
    {
        if (spriteSheet == 0) //regular sprite manager
        {
            for (var i = 0; i < spriteManager[type][distance].length; i++) 
            {
                if (spriteManager[type][distance][i][2] == 1) //on
                {
                    this.SetPixel([x + spriteManager[type][distance][i][0],y + spriteManager[type][distance][i][1]]);
                }
                else if (spriteManager[type][distance][i][2] == 2) //force off
                {
                    this.UnsetPixel([x + spriteManager[type][distance][i][0],y + spriteManager[type][distance][i][1]]);
                }
            }
        }
        else if (spriteSheet == 1) //gun
        {
            for (var i = 0; i < gun[type].length; i++) 
            {
                if (gun[type][i][2] == 1) //on
                {
                    this.SetPixel([x + gun[type][i][0],y + gun[type][i][1]]);
                }
                else if (gun[type][i][2] == 2) //force off
                {
                    this.UnsetPixel([x + gun[type][i][0],y + gun[type][i][1]]);
                }
            }
        }
        else if (spriteSheet == 2) //on screen text
        {
            for (var i = 0; i < onScreenText[type].length; i++) 
            {
                if (onScreenText[type][i][2] == 1) //on
                {
                    this.SetPixel([x + onScreenText[type][i][0],y + onScreenText[type][i][1]]);
                }
                else if (onScreenText[type][i][2] == 2) //force off
                {
                    this.UnsetPixel([x + onScreenText[type][i][0],y + onScreenText[type][i][1]]);
                }
            }
        }
        else if (spriteSheet == 3) //blood
        {
            for (var i = 0; i < blood.length; i++) 
            {
                if (blood[i][2] == 1) //on
                {
                    this.SetPixel([x + blood[i][0],y + blood[i][1]]);
                }
                else if (blood[i][2] == 2) //force off
                {
                    this.UnsetPixel([x + blood[i][0],y + blood[i][1]]);
                }
            }
        }
        else if (spriteSheet == 4) //title screen
        {
            for (var i = 0; i < titleScreen.length; i++) 
            {
                if (titleScreen[i][2] == 1) //on
                {
                    this.SetPixel([x + titleScreen[i][0],y + titleScreen[i][1]]);
                }
                else if (titleScreen[i][2] == 2) //force off
                {
                    this.UnsetPixel([x + titleScreen[i][0],y + titleScreen[i][1]]);
                }
            }
        }
    }
}