//Sprites\0-imp
//Sprites\1-imp dead
//Sprites\2-cacodemon
//Sprites\3-cacodemon dead
//Sprites\4-fire ball
//Sprites\5-door
//Sprites\6-health
//Sprites\7-ammo

class NPC 
{
    constructor(x, y, type , health, move = false, movement = [0,0], indexToObjectsList = -1)
    {
        this.pos = createVector(x, y);
        this.type = type;
        this.health = health;
        this.move = move;
        this.movement = movement;
        this.indexToObjectsList = indexToObjectsList;
        this.pdist = 99;
        this.isDead = false;

        this.maxTimer = 0;
        this.timer = 0;

        this.queuedForDeletion = false;

        if (type == 0) //imp
        {
            this.maxTimer = 2*60;
            this.timer = this.maxTimer;
        }
        else if (type == 2) // cacodemon
        {
            this.maxTimer = 3*60;
            this.timer = this.maxTimer;
        }
    }

    update()
    {
        if (this.maxTimer != 0)
        {
            this.timer--;
            if (this.timer <= 0 && this.health != -2)
            {
                this.event();
                this.timer = this.maxTimer;
            }
        }
        if (this.move)
        {
            this.pos.x -= this.movement[0];
            this.pos.y -= this.movement[1];
            if (this.pos.x < 0 || this.pos.y < 0 || this.pos.x > grid.width || this.pos.y > grid.height)
            {
                //objectsQueuedForDeletion.push(this.indexToObjectsList);
                this.queuedForDeletion = true;
            }
            else if (grid.data[Math.floor(this.pos.y)][Math.floor(this.pos.x)] == 1)
            {
                //console.log("delete");
                //objectsQueuedForDeletion.push(this.indexToObjectsList);
                this.queuedForDeletion = true;
            }
        }
    }

    takeDamage() {
        if (this.health != -2) //has health
        {
            this.health--;
            enemyHitSound.volume(.85 - (this.pdist/10));
            enemyHitSound.play();
            if (this.health == 0)
            {
                this.health = -2;
                this.isDead = true;
            }
        }
        // if (this.health != -1)
        // {
        //     this.health = -1;
        //     enemySound.setVolume(1 - (this.pdist/10));
        //     enemySound.play();
        // }
        // else{
        //     this.health = 1;
        // }
    }

    getArt()
    {
        if (this.isDead )
        {
            return this.type + 1;
        }
        return this.type;
    }

    event()
    {
        if (this.type == 0)
        {
            impSound.volume(1 - (this.pdist/10));
            impSound.play();
        }
        else if (this.type == 2)
        {
            cacoSound.volume(1 - (this.pdist/10));
            cacoSound.play();
        }
        spawnEnemyBullet(this.pos.x, this.pos.y);
    }

    proximityEvent()
    {
        if (this.type == 4) //bullet
        {
            playerGotHit();
            this.queuedForDeletion = true;
        }
        else if (this.type == 5) // door
        {
            doorSound.play();
            this.queuedForDeletion = true;
            endOfLevel();
        }
        else if (this.type == 6) // health
        {
            healthSound.play();
            health += 25;
            if (health > 100)
            {
                health = 100;
            }

            updateGameplayUI();
            this.queuedForDeletion = true;
        }
        else if (this.type == 7) // ammo
        {
            reloadSound.play();
            ammo += 14;
            updateGameplayUI();
            this.queuedForDeletion = true;
        }
    }

}