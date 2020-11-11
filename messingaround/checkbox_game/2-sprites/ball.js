class Ball 
{
    

    constructor(width, height, index) 
    {
        this.width = width;
        this.height = height;
        this.spriteIndex = index;

        this.size = 5+1;

        this.ballX = this.getRndInteger(1,width-this.size-3);
        this.ballY = this.getRndInteger(1,height-this.size-3);
    
        this.timer = Math.floor(Math.random() * 150) + 50;
    
        this.ballXMove = Math.floor(Math.random() * 2) - 1;
        this.ballYMove = Math.floor(Math.random() * 2) - 1;
    }

    getRndInteger(min, max) 
    {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    update(pixels)
    {
        this.movement();
        this.sendPixels();
    }

    movement()
    {
        this.ballX += this.ballXMove;
        this.ballY += this.ballYMove;
        this.timer--;
        if (this.timer == 0)
        {
            this.timer = Math.floor(Math.random() * 150) + 50;
            this.changeDir();
        }
        if (this.ballX <= 0)
        {
            this.ballXMove = 1;
        }
        if (this.ballX >= this.width - this.size)
        {
            this.ballXMove = -1;
        }
        if (this.ballY <= 0)
        {
            this.ballYMove = 1;
        }
        if (this.ballY >= this.height - this.size)
        {
            this.ballYMove = -1;
        }
    }

    changeDir()
    {
        this.ballXMove = Math.floor(Math.random() * 2) - 1;
        this.ballYMove = Math.floor(Math.random() * 2) - 1;
    }

    sendPixels()
    {
        for (var y = 0; y < this.size; y++) 
        { 
            for (var x = 0; x < this.size; x++) 
            {
                if (sprites[this.spriteIndex][y][x] == 1)
                {
                    pixels.push([this.ballX + x,this.ballY + y]);
                }
            }
        }
    }
}