class NPC 
{
    constructor(x, y, type , health)
    {
        this.pos = createVector(x, y);
        this.type = type;
        this.health = health;
    }

    takeDamage() {
        // if (this.health != -1) //has health
        // {
        //     if (this.health > 0)
        //     {
        //         this.health--;
        //     }
        // }
        if (this.health != 0)
        {
            this.health = 0;
        }
        else{
            this.health = 1;
        }
    }

    getArt()
    {
        if (this.health == 0 )
        {
            return this.type + 1;
        }
        return this.type;
    }

}