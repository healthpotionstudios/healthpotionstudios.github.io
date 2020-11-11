class Rick 
{
    constructor()
    {
        this.spriteIndex = 0;
    }

    update()
    {
        this.spriteIndex++;
        if (this.spriteIndex > sprites.length-1)
        {
            this.spriteIndex = 0;
        }
        this.sendPixels();
    }


    sendPixels()
    {
        for (var y = 0; y < 49; y++) 
        { 
            for (var x = 0; x < 79; x++) 
            {
                if (sprites[this.spriteIndex][y][x] == 1)
                {
                    renderer.SetPixel([x,y+1]);
                }
            }
        }
    }
}