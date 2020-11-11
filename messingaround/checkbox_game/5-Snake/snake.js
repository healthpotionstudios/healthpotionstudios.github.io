class Snake 
{
    

    constructor(width, height, initSize) 
    {
        this.snakeX = Math.floor(width/2);
        this.snakeY = Math.floor(height/2);
        this.body = []
        for (var i = 0; i < initSize; i++) 
        { 
            this.body.push([this.snakeX,this.snakeY + i])
        }

        this.snakeXMove = 0;
        this.snakeYMove = 0;

        this.dead = false;

        this.inputDelay = 0;
    }

    getRndInteger(min, max) 
    {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    update(pixels)
    {
        if(!this.dead)
        {
            this.movement();
        }
        this.sendPixels();
    }

    movement()
    {
        

        this.snakeX += this.snakeXMove;
        this.snakeY += this.snakeYMove;
        this.wrap();

        if (this.snakeXMove != 0 || this.snakeYMove != 0)
        {
            if ( this.checkCollision(this.snakeX, this.snakeY))
            {
                this.dead = true;
                resetUI();
                updateUI("game over score=" + score.toString());
                return;
            }
        }

        if (this.snakeX == apple.x && this.snakeY == apple.y)
        {
            var last = this.body[this.body.length - 1];
            this.body.push(last);
            updateScore();
            genApple();
        }

        if (this.snakeXMove !=0 || this.snakeYMove != 0)
        {
            this.body.unshift([this.snakeX,this.snakeY]);
            var last = this.body.pop();
            document.getElementById("window" + "-" + last[1].toString() + "," + last[0].toString()).checked = false;
        }

        this.inputDelay++;
    }

    wrap()
    {
        if (this.snakeX == -1)
        {
            this.snakeX = width-1;
        }
        if (this.snakeX == width)
        {
            this.snakeX = 0;
        }
        if (this.snakeY == -1)
        {
            this.snakeY = height-1;
        }
        if (this.snakeY == height)
        {
            this.snakeY = 0;
        }
    }

    checkCollision(x, y)
    {
        for (var i = 0; i < this.body.length; i++) 
        { 
            if (x == this.body[i][0] && y == this.body[i][1])
            {
                return true;
            }
        }
        return false;
    }

    sendPixels()
    {
        for (var i = 0; i < this.body.length; i++) 
        {  
            pixels.push(this.body[i]);
        }
        /*for (var y = 0; y < this.size; y++) 
        { 
            for (var x = 0; x < this.size; x++) 
            {
                if (sprites[this.spriteIndex][y][x] == 1)
                {
                    pixels.push([this.snakeX + x,this.snakeY + y]);
                }
            }
        }*/
    }

    updateMovement(x,y)
    {
        if (!this.dead && this.inputDelay > 0)
        {
            this.snakeXMove = x;
            this.snakeYMove = y;
            this.inputDelay = 0;
        }
        
    }


}


