class Player 
{
    constructor()
    {
        this.x = renderer.width / 2;
        this.y = renderer.height / 2;
        this.size = 5;
        this.spriteIndex = 0;

        this.gravity = 1;
        this.accel = 0;
        this.hSpeed = 2;
    }

    update()
    {
        this.spriteIndex = 0;
        this.jump();
        this.horizontalMovement();
        this.setGravity();
        this.sendPixels();
    }

    setGravity()
    {
        if (this.accel < 3)
        {
            this.accel += this.gravity;
        }
        this.y += this.accel;
        if (this.y > groundLevel - this.size)
        {
            this.y = groundLevel - this.size;
            this.accel = 0;
        }
    }

    jump()
    {
        if(currentKeysPressed[' ']) { //spacebar
            if (this.y == groundLevel - this.size)
            {
                //this.spriteIndex = 3;
                this.accel = -6;
            }
        }
    }

    horizontalMovement()
    {
    
        if ((currentKeysPressed['ArrowLeft'] && this.x > 0) || (currentKeysPressed['ArrowRight'] && this.x < renderer.width - this.size - 1))
        {
            var x = currentKeysPressed['ArrowLeft'] ? -1 : currentKeysPressed['ArrowRight'] ? 1 : 0;
            this.spriteIndex = x == -1 ? 2 : x == 1 ? 1 : 0;
            this.x += x * this.hSpeed;
        }
    }

    sendPixels()
    {
        for (var y = 0; y < this.size; y++) 
        { 
            for (var x = 0; x < this.size; x++) 
            {
                if (sprites[this.spriteIndex][y][x] == 1)
                {
                    renderer.SetPixel([this.x + x, this.y + y]);
                }
            }
        }
    }
}