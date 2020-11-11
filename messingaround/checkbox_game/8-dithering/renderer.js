class Renderer 
{
    constructor()
    {
        
        this.width = 80;
        this.height = 50;
        this.pixels = {}; //current pixels
        this.lastFramePixels = {} //pixels to turn off
        this.dither = 0;
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
        this.dither++;
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

    updateScore()
    {
        resetUI();
        score++;
        updateUI("snake   score=" + score.toString());
    }



    //==============================================================================================Shape system
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

    DrawSquare(p0x, p0y, p1x, p1y,doDither = false)
    {
        for (var x = p0x; x < p1x; x++)
        {
            for (var y = p0y; y < p1y; y++)
            {
                if (!doDither)
                {
                    this.SetPixel([x,y]);
                }
                else
                {
                    if (this.dither%2== (x+y)%2)
                    {
                        this.SetPixel([x,y]);
                    }
                }
            }
        }
    }

}