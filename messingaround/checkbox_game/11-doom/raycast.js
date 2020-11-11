var renderer = new Renderer();
var objects = [];
var activeObjects = [];

var camStartAngle;
var camEndAngle;

var drawCanvas = false;
var drawDebug = false;

var shooting = 0;
var shootingTimer = 0;

var l = 30;
var r = 50;
var bulletSpeed = .025;

visibleEnemies = 0;

var health = 100;
var ammo = 35;
var gameover = false;

var bloodTimer = 0;

currentLevel = 0;

var miniPlayerOn = true;
var miniTimer = 10;


playerStart = [[17.5, 18.2], [18.5, 15.5], [18.5, 15.5]];
level1Data = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
level2Data = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1], [1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
level3Data = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1], [1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1], [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1], [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1], [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1], [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];

//music
let hurtSound, shootSound, impSound, cacoSound, dieSound, levelMusic, reloadSound,healthSound,doorSound,enemySound,enemyHitSound;

imageSizes = [
    [35,40], //0
    [30,34], //1
    [26,30], //2
    [23,26], //3
    [18,20], //4
    [14,16], //5
    [9,10],  //6
];
    
imageOffsets = [
    [0,0],   //0
    [3,4],   //1
    [5,6],   //2
    [7,7],   //3
    [9,11],  //4
    [11,13], //5
    [14,16], //6
];

/**
 * This p5.js sketch creates a maze and renders it in 3D using a form of 
 * "raycasting" similar to the method used in Wolfenstein 3D by id Software. It 
 * can also display the maze from a top-down 2D map-perspective. I was inspired
 * to write this after watching https://www.youtube.com/watch?v=eOCQfxRQ2pY
 * and while working on my own basic ray tracing renderer.
 * 
 * Originally written in December 2018 by Ben (quillaja).
 * Live demo at: http://quillaja.net/raymaze/sketch.html
 * Github: https://github.com/quillaja/raymaze
 */

/**
 * The camera, which is the player's point of view.
 * @type {Camera}
 */
let cam;
/**
 * List of direction rays to sample.
 * @type {p5.Vector[]}
 */
let dirs;

/**
 * The maze information.
 * @type {Grid}
 */
let grid;

/**
 * Image used as the maze background.
 * @type {p5.Graphics}
 */
let bg;


// horizontal and vertical size of the maze.
// used in calcuateRenderParams()
const gridw = 10;
const gridh = 10;

// colors for wall and exit.
let wallColor;
let exitColor;

// textures for walls and exit.
const textures = {
    /**
     * @type {p5.Image[]}
     */
    walls: [],

    /**
     * @type {p5.Image[]}
     */
    doors: [],
};

/**
 * @type {p5.Image[]}
 */
let tex;
let imagetextures;


// set in calculateRenderParams()
let scalef = 1; // scales map view
let raywidth = 0; // alters number of rays used/"resolution" of walls. 



/**
 * load necessary resources.
 */
function preload() {


    hurtSound = loadSound('hurt.wav');
    shootSound = loadSound('shoot.wav');
    impSound = loadSound('imp.wav');
    cacoSound = loadSound('cacodemon.wav');
    dieSound = loadSound('die.wav');
    reloadSound = loadSound('reload.wav');
    healthSound = loadSound('health.wav');
    doorSound = loadSound('door.wav');
    enemySound = loadSound('enemyDie.wav');
    enemyHitSound = loadSound('enemyHit.wav');

    levelMusic = loadSound('level.mp3');

}

/**
 * Set up the sketch.
 */
function setup() {
    
    renderer.Init();


    createUIGrid("gameWindow", "ui");
    updateUI("     Prfss fntfr"); //e was overridden 

    createCanvas(800, 500);

    calculateRenderingParams();
    createGridAndPlaceCam();
}

/**
 * Render the sketch.
 */
function draw() {

    if (currentLevel == 0)
    {
        renderer.DrawSprite(0,0,0,0,4); //draw title
        renderer.updateDisplay("window");
        return;
    }
    else if (currentLevel == 4)
    {
        renderer.clear("window");
        renderer.DrawSprite(0,0,1,0,2); //draw you win
        renderer.updateDisplay("window");
        return;
    }

    // move player
    if (health != 0)
    {
        if (keyIsDown(LEFT_ARROW)) {
            cam.rotateCW();
        }
        if (keyIsDown(RIGHT_ARROW)) {
            cam.rotateCCW();
        }
        if (keyIsDown(UP_ARROW)) {
            cam.moveForward();
        }
        if (keyIsDown(DOWN_ARROW)) {
            cam.moveBackward();
        }
    }


    if (shootingTimer != 0)
    {
        shootingTimer--;
        if (shootingTimer == 0)
        {
            shooting = 0;
        }
    }


    // check and correct player intersection with walls
    cam.checkCollisions(grid);
    if (currentLevel != 4)
    {
        renderer.StartFrame();
        renderer.refreshDisplay("window");
        background(30);

        grid.unhideCell(cam.pos.x, cam.pos.y);

        // Draw either the map view or 3d "raycast" view
        // based on the player-controlled toggle.
        if (drawDebug)
        {
            // 2d map view
            push();
            scale(scalef, scalef);

            noStroke();
            for (let y = 0; y < grid.height; y++) {
                for (let x = 0; x < grid.width; x++) {
                    if (grid.match(x, y, SOLID)) {
                        fill(75);
                        rect(x, y, 1, 1);
                    }
                }
            }

            strokeWeight(0.01);
            noFill();

            
            {
                let hit = new Hit();
                for (const dir of cam.getRays(dirs)) {
                    stroke(0, 0, 255);
                    line(cam.pos.x, cam.pos.y, cam.pos.x + dir.x, cam.pos.y + dir.y);
                    
                    marchRay(hit, cam.pos, dir, grid)
                    stroke(0, 255, 0);
                    ellipse(hit.pos.x, hit.pos.y, 0.1);
                }

                noStroke();
                fill(0, 0, 255);
                ellipse(cam.pos.x, cam.pos.y, 0.2);
                

                

                stroke(255,0,0);
                // line(P1.x,P1.y,P2.x,P2.y);
                // line(P3.x,P3.y,P2.x,P2.y);

                
            } 
            pop();

        

        } 
        
        //draws 3d view
         {
            // 3d view
            push();


            // draw walls
            rectMode(CENTER);
            translate(0, height / 2);
            cam.getRays(dirs); // get a list of directional rays to cast
            const lookx = Math.cos(cam.rot); // calculate look direction vector
            const looky = Math.sin(cam.rot);
            let hit = new Hit(); // create only one Hit obj and reuse to reduce garbage generation.
            for (let i = 0; i < dirs.length; i++) {
                let dir = dirs[i];
                //console.log(cam.pos);
                marchRay(hit, cam.pos, dir, grid); // do the "raycast"
                // dot product ray dir with look dir to scale d so straight lines look straight.
                let d = hit.d * (dir.x * lookx + dir.y * looky);

                noStroke();
                {
                    // figure out the horizontal point in the range [0,1]
                    // at which to sample the texture
                    let sampleX = Math.abs(hit.pos.x - Math.floor(hit.pos.x));
                    if (sampleX < 0.001 || sampleX > 0.999) {
                        sampleX = Math.abs(hit.pos.y - Math.floor(hit.pos.y));
                    }

                    
                    var x=(i + 0.5) * raywidth; //0 - 800
                    var y=height / d /2;
                    y = constrain(y, 0, 300);
                    var xx = int(x - (x%10));
                    var yy = int(y - (y%10));

                    if (drawCanvas)
                    {
                        fill(255,255,0);
                        circle(xx, -yy, 2);
                        circle(xx, +yy, 2);
                    }
                    
                    renderer.SetPixel([int(x/10),25 + int(-y/10)]); //wall top
                    renderer.SetPixel([int(x/10),25 + int(y/10)]); //wall bottom

                    if (sampleX < 0.04 || sampleX > .96)
                    {
                        if (drawCanvas)
                        {
                            stroke(255,255,0);
                            strokeWeight(3);
                            line(xx, -yy, xx, +yy);
                        }
                        renderer.DrawLine(int(x/10),25 + int(-y/10),int(x/10),25 + int(y/10)) //vertical wall
                    }
                }
            }
            pop();

            activeObjects = [];

            for (var i = 0; i < objects.length; i ++)
            {
                if (objects[i].type != 0 && objects[i].type != 2)
                {
                    objects[i].update();
                }

                var P2 = createVector(objects[i].pos.x+10, objects[i].pos.y);
                var P1 = createVector(objects[i].pos.x, objects[i].pos.y);
                var P3 = createVector(cam.pos.x,cam.pos.y);
                var result = atan2(P3.y - P1.y, P3.x - P1.x) - atan2(P2.y - P1.y, P2.x - P1.x);

                P2 = createVector(cam.pos.x+10, cam.pos.y);
                P1 = createVector(cam.pos.x, cam.pos.y);
                P3 = createVector(cam.pos.x + dirs[0].x,cam.pos.y + dirs[0].y);
                var pleft = atan2(P3.y - P1.y, P3.x - P1.x) - atan2(P2.y - P1.y, P2.x - P1.x);
                if (pleft < 0)
                {
                    pleft = TWO_PI + pleft;
                }

                P2 = createVector(cam.pos.x+10, cam.pos.y);
                P1 = createVector(cam.pos.x, cam.pos.y);
                P3 = createVector(cam.pos.x + dirs[dirs.length-1].x,cam.pos.y + dirs[dirs.length-1].y);
                var pright = atan2(P3.y - P1.y, P3.x - P1.x) - atan2(P2.y - P1.y, P2.x - P1.x);
                if (pright < 0)
                {
                    pright = TWO_PI + pright;
                }

                if (pleft > pright)
                {
                    pright = pright + TWO_PI;
                }

                result = result + PI;

                fill(255);
                textSize(15);

                if (drawDebug)
                {
                    stroke(255);
                    noFill();
                    ellipse(objects[i].pos.x * scalef, objects[i].pos.y * scalef, 20);
                }

                var a = objects[i].pos.x - cam.pos.x;
                var b = objects[i].pos.y - cam.pos.y;
                var pdist = Math.sqrt( a*a + b*b );
                objects[i].pdist = pdist;
                if (pdist < .6)
                {
                    objects[i].proximityEvent();
                }

                
                if (pleft < result && pright > result)
                {

                    marchRay(hit, objects[i].pos, p5.Vector.fromAngle(result-PI), grid);
                    

                    if (pdist < hit.d && pdist > .6 && pdist < 9.5)
                    {

                        if (objects[i].type == 0 || objects[i].type == 2)
                        {
                            objects[i].update();
                        }

                        if (drawDebug)
                        {
                            fill(255,0,255);
                            circle(hit.pos.x*scalef,hit.pos.y*scalef,5);
                            fill(255, 0, 0);
                            ellipse(objects[i].pos.x * scalef, objects[i].pos.y * scalef, 20);
                        }
                        

                        var percent = ((result-pleft) / (pright- pleft));
                        //console.log(percent.toString(), "%");
                        //          0   1  2  3  4  5  6
                        var arr = [200,170,150,130,100,80,50];
                        var index = 0;
                        if (0 <= pdist && pdist < .95)
                        {
                            index = 0;
                        }
                        else if (.95 <= pdist && pdist < 1.5)
                        {
                            index = 1;
                        }
                        else if (1.5 <= pdist && pdist < 2)
                        {
                            index = 2;
                        }
                        else if (2 <= pdist && pdist < 2.7)
                        {
                            index = 3;
                        }
                        else if (2.7 <= pdist && pdist < 3.5)
                        {
                            index = 4;
                        }
                        else if (3.5 <= pdist && pdist < 4.5)
                        {
                            index = 5;
                        }
                        else if (4.5 <= pdist)
                        {
                            index = 6;
                        }

                        //circle(width*percent, height/2, arr[ round(map(pdist,1,6,0,5))]);
                        //circle(width*percent, height/2, arr[index]);
                        //renderer.DrawCircle(int(renderer.width*percent),25, int(arr[index]/10));
                        //renderer.DrawSprite(int(renderer.width*percent) - 17, 10-index, objects[i].getArt(), index);
                        //                               0                       1      2    3      4
                        //                               x                       y    index  0-6   dist   
                        activeObjects.push([int(renderer.width*percent) - 17, 10-index, i, index, pdist]);
                        //text((pdist).toString(), cam.pos.x * scalef,cam.pos.y * scalef);
                    }
                }
            }

            activeObjects = activeObjects.sort((a, b) => b[4] - a[4]); //sort by distance

            //render objects
            for (var i = 0; i < activeObjects.length; i ++)
            {
                if (objects[activeObjects[i][2]].type == 4) //bullet
                {
                    //renderer.DrawCircle(activeObjects[i][0] + int(imageSizes[activeObjects[i][3]][0]/2) + imageOffsets[activeObjects[i][3]][0],
                    //                   25, 7 - int(activeObjects[i][4]));
                    renderer.DrawSprite(activeObjects[i][0], activeObjects[i][1], 4, activeObjects[i][3], 0);
                }
                else //anything else
                {
                    //                                   x                    y                       object                          index
                    renderer.DrawSprite(activeObjects[i][0], activeObjects[i][1], objects[activeObjects[i][2]].getArt(), activeObjects[i][3], 0);
                }
            }

            for (var i = 0; i < objects.length; i ++)
            {
                if (objects[i].queuedForDeletion)
                {
                    delete objects[i];
                    objects.splice(i,1);
                    i = 0;
                }
            }

            
            //show shoot range
            //renderer.DrawLine(l,0,l,50);
            //renderer.DrawLine(r,0,r,50);

            renderer.DrawSprite(35,36,shooting,0,1);
        }

        if (bloodTimer != 0)
        {
            bloodTimer--;
            renderer.DrawSprite(0,0,0,0,3);
        }

        if (health == 0)
        {
            renderer.DrawSprite(0,0,0,0,2);
        }

        
        updateMiniMap();

        renderer.updateDisplay("window");
    }

}


function spawnEnemyBullet(x,y)
{
        var distanceX = x - cam.pos.x;
        var distanceY = y - cam.pos.y;
        
        var magnitude = Math.sqrt( distanceX * distanceX + distanceY * distanceY );

        var deltaX = distanceX * bulletSpeed / magnitude;
        var deltaY = distanceY * bulletSpeed / magnitude;

        objects.push(new NPC(x,y,4,-2,true,[deltaX,deltaY],objects.length)); //bullet
}

/**
 * handle key presses that control toggle-able options.
 */
function keyPressed() {
    if (keyCode === 32) { // space
        if (shootingTimer == 0 && ammo > 0 && health != 0 && currentLevel != 0)
        {
            shootingTimer = 15;
            shooting = 1;
            ammo--;
            shootSound.play();
            updateGameplayUI();
            for (var i = activeObjects.length-1; i >= 0; i--) //reverse array for distances
            {
                if (objects[activeObjects[i][2]].health < 0)
                {
                    continue;
                }
                if (activeObjects[i][0]+18 > l && activeObjects[i][0]+18 < r)
                {
                    objects[activeObjects[i][2]].takeDamage();
                    break;
                }
            }
        }       
    }
    
    if (keyCode == 13) //enter
    {
        if (currentLevel == 0)
        {
            currentLevel ++;
            levelMusic.loop();
            levelMusic.play();
            updateGameplayUI();

            objects.push(new NPC(4.5,1.5,5,-2)); //door
            objects.push(new NPC(7.5,1.5,7,-2)); //ammo
            objects.push(new NPC(8.5,1.5,7,-2)); //ammo
            objects.push(new NPC(17.5,1.5,6,-2)); //health
            objects.push(new NPC(2.5,2.5,0,3)); //imp
            objects.push(new NPC(17.5,3.5,6,-2)); //health
            objects.push(new NPC(4.5,5.5,2,5)); //caco
            objects.push(new NPC(11.5,5.5,2,5)); //caco
            objects.push(new NPC(18.5,5.5,7,-2)); //ammo
            objects.push(new NPC(16.5,7.5,0,3)); //imp
            objects.push(new NPC(13.5,10.5,0,3)); //imp
            objects.push(new NPC(2.5,11.5,0,3)); //imp
            objects.push(new NPC(5.5,11.5,7,-2)); //ammo
            objects.push(new NPC(9.5,11.5,0,3)); //imp
            objects.push(new NPC(9.5,13.5,0,3)); //imp
            objects.push(new NPC(2.5,16.5,0,3)); //imp
            objects.push(new NPC(1.5,17.5,6,-2)); //health
            objects.push(new NPC(12.5,17.5,0,3)); //imp
            objects.push(new NPC(6.5,18.5,0,3)); //imp
        }
    }
}

function playerGotHit()
{
    health -= 7;
    if (health <= 0)
    {
        if (!gameover)
        {
            gameover = true;
            dieSound.play();
        }
        health = 0;
    }
    if (!gameover)
    {
        hurtSound.play();
    }
    bloodTimer = 20;
    updateGameplayUI();
}

function updateGameplayUI()
{
    var str = "@";
    //  @###|~## |a|
    if (health == 100)
    {
        str += "100";
    }
    else if (health < 100 && health > 9)
    {
        str += " ";
        str += health.toString();
    }
    else if (health < 10 && health > 0)
    {
        str += "  ";
        str += health.toString();
    }
    else if (health == 0)
    {
        str += "  0";
    }
    str += "%|~";
    if (ammo < 100 && ammo > 9)
    {
        str += ammo.toString();
    }
    else if (ammo < 10 && ammo > 0)
    {
        str += " ";
        str += ammo.toString();
    }
    else if (ammo == 0)
    {
        str += " 0";
    }
    str += "|";
    if (health == 100)
    {
        str += "a|";
    }
    else if (health == 0)
    {
        str += "e|"
    }
    else if (health < 100 && health > 66)
    {
        str += "b|";
    }
    else if (health < 67 && health > 33)
    {
        str += "c|";
    }
    else if (health < 34 && health > 0)
    {
        str += "d|";
    }

    str += "  lfvfl: " + currentLevel.toString();

    updateUI(str);
}


function endOfLevel()
{
    for (var i = 0; i < objects.length; i ++)
    {
        objects[i].queuedForDeletion = true;
    }

    currentLevel ++;
    if (currentLevel == 2)
    {
        if (!levelMusic.isPlaying())
        {
            levelMusic.play();
        }
        updateGameplayUI();
        cam.moveCam(playerStart[1][0], playerStart[1][1]);
        grid = new Grid(level2Data);

        objects.push(new NPC(8.5,1.5,7,-2)); //ammo
        objects.push(new NPC(17.5,1.5,6,-2)); //health
        objects.push(new NPC(8.5,2.5,7,-2)); //ammo
        objects.push(new NPC(9.5,2.5,7,-2)); //ammo
        objects.push(new NPC(11.5,2.5,0,3)); //imp
        objects.push(new NPC(12.5,2.5,0,3)); //imp
        objects.push(new NPC(14.5,2.5,0,3)); //imp
        objects.push(new NPC(8.5,3.5,6,-2)); //health
        objects.push(new NPC(9.5,3.5,6,-2)); //health
        objects.push(new NPC(2.5,5.5,0,3)); //imp
        objects.push(new NPC(18.5,5.5,0,3)); //imp
        objects.push(new NPC(1.5,6.5,7,-2)); //ammo
        objects.push(new NPC(7.5,6.5,2,5)); //caco
        objects.push(new NPC(12.5,6.5,0,3)); //imp
        objects.push(new NPC(14.5,6.5,0,3)); //imp
        objects.push(new NPC(7.5,8.5,2,5)); //caco
        objects.push(new NPC(5.5,10.5,0,3)); //imp
        objects.push(new NPC(8.5,10.5,0,3)); //imp
        objects.push(new NPC(13.5,10.5,2,5)); //caco
        objects.push(new NPC(2.5,11.5,0,3)); //imp
        objects.push(new NPC(18.5,11.5,2,5)); //caco
        objects.push(new NPC(11.5,13.5,0,3)); //imp
        objects.push(new NPC(13.5,13.5,2,5)); //caco
        objects.push(new NPC(9.5,14.5,5,-2)); //door
        objects.push(new NPC(3.5,15.5,7,-2)); //ammo
        objects.push(new NPC(13.5,15.5,0,3)); //imp
        objects.push(new NPC(1.5,17.5,6,-2)); //health
        objects.push(new NPC(5.5,18.5,0,3)); //imp

    }
    else if (currentLevel == 3)
    {
        if (!levelMusic.isPlaying())
        {
            levelMusic.play();
        }
        updateGameplayUI()
        cam.moveCam(playerStart[2][0], playerStart[2][1]);
        grid = new Grid(level3Data);

        objects.push(new NPC(2.5,1.5,7,-2)); //ammo
        objects.push(new NPC(4.5,1.5,7,-2)); //ammo
        objects.push(new NPC(21.5,1.5,6,-2)); //health
        objects.push(new NPC(3.5,2.5,6,-2)); //health
        objects.push(new NPC(7.5,2.5,2,5)); //caco
        objects.push(new NPC(12.5,2.5,0,3)); //imp
        objects.push(new NPC(14.5,2.5,0,3)); //imp
        objects.push(new NPC(17.5,2.5,0,3)); //imp
        objects.push(new NPC(18.5,3.5,0,3)); //imp
        objects.push(new NPC(17.5,4.5,0,3)); //imp
        objects.push(new NPC(2.5,5.5,0,3)); //imp
        objects.push(new NPC(21.5,5.5,0,3)); //imp
        objects.push(new NPC(1.5,6.5,7,-2)); //ammo
        objects.push(new NPC(7.5,6.5,2,5)); //caco
        objects.push(new NPC(12.5,6.5,0,3)); //imp
        objects.push(new NPC(14.5,6.5,0,3)); //imp
        objects.push(new NPC(7.5,8.5,2,5)); //caco
        objects.push(new NPC(23.5,8.5,0,3)); //imp
        objects.push(new NPC(1.5,9.5,2,5)); //caco
        objects.push(new NPC(12.5,9.5,2,5)); //caco
        objects.push(new NPC(21.5,9.5,0,3)); //imp
        objects.push(new NPC(2.5,11.5,0,3)); //imp
        objects.push(new NPC(10.5,11.5,0,3)); //imp
        objects.push(new NPC(11.5,11.5,0,3)); //imp
        objects.push(new NPC(7.5,12.5,2,5)); //caco
        objects.push(new NPC(15.5,12.5,0,3)); //imp
        objects.push(new NPC(17.5,13.5,6,-2)); //health
        objects.push(new NPC(19.5,13.5,7,-2)); //ammo
        objects.push(new NPC(10.5,15.5,6,-2)); //health
        objects.push(new NPC(11.5,15.5,7,-2)); //ammo
        objects.push(new NPC(13.5,15.5,0,3)); //imp
        objects.push(new NPC(11.5,17.5,2,5)); //caco
        objects.push(new NPC(2.5,18.5,2,5)); //caco
        objects.push(new NPC(8.5,18.5,0,3)); //imp
        objects.push(new NPC(5.5,20.5,0,3)); //imp
        objects.push(new NPC(22.5,20.5,7,-2)); //ammo
        objects.push(new NPC(23.5,20.5,6,-2)); //health
        objects.push(new NPC(11.5,21.5,5,-2)); //door
        objects.push(new NPC(18.5,21.5,2,5)); //caco
        objects.push(new NPC(23.5,21.5,7,-2)); //ammo
        objects.push(new NPC(20.5,23.5,2,5)); //caco
    }   
}


function updateMiniMap()
{
    var px = Math.floor(cam.pos.x) - 4;
    var py = Math.floor(cam.pos.y) - 4;
    miniTimer--;
    if (miniTimer == 0)
    {
        miniTimer = 10;
        miniPlayerOn = !miniPlayerOn;
    }
    for(var y = 0; y < 11; y++)
    {
        for(var x = 0; x < 11; x++)
        {
            if (px+x >= 0 && px+x < grid.width && py+y >= 0 && py+y < grid.height)
            {
                if (grid.data[py+y][px+x] == 1)
                {
                    renderer.SetPixel([x,y]);
                }
                else
                {
                    renderer.UnsetPixel([x,y]);
                }
            }
            else
            {
                renderer.UnsetPixel([x,y]);
            }
        }
    }
    if (miniPlayerOn)
    {
        renderer.SetPixel([4,4]);
    }
}



/**
 * set up params for doing rendering calcs
 */
function calculateRenderingParams() {
    if (width > height) {
        scalef = Math.ceil(height / (gridh + 1));
    } else {
        scalef = Math.ceil(width / (gridw + 1));
    }

    raywidth = 5;
    dirs = new Array(80*2);
    for (let i = 0; i < dirs.length; i++) { dirs[i] = createVector(); }
}



/**
 * initialize system.
 */
function createGridAndPlaceCam() {

    grid = new Grid(level1Data);
    let pos = findPlaceNotInWall(grid.data);
    cam = new Camera(playerStart[0][0], playerStart[0][1]);
}

/**
 * Camera encapsulates the point of view of the player.
 * Most importantly, it generates rays to cast and manages wall collision.
 */
class Camera {
    /**
     * create a camera.
     * @param {number} x x position
     * @param {number} y y position
     * @param {number} rot initial angle in radians
     * @param {number} fov desired field of view.
     */
    constructor(x = 0, y = 0, rot = PI + PI/2, fov = QUARTER_PI) {
        this.pos = createVector(x, y);
        this.prevPos = createVector();
        this.rot = rot; //radians
        this.moved = true;
        this.fov = fov * (width / height); // scale ideal fov by aspect ratio
    }

    /**
     * rotate camera counter clockwise
     * @param {number} speed rotation speed
     */
    rotateCCW(speed = PI / 180) {
        this.rot += speed;
        if (this.rot > TWO_PI) {
            this.rot -= TWO_PI; // keep in [0,2PI]
        }
        this.moved = true;
    }

    /**
     * rotate camera clockwise
     * @param {number} speed rotation speed
     */
    rotateCW(speed = PI / 180) {
        this.rot -= speed;
        if (this.rot < 0) {
            this.rot = TWO_PI - this.rot; // keep in [0,2PI]
        }
        this.moved = true;
    }

    /**
     * move camera forward
     * @param {number} speed move speed
     */
    moveForward(speed = 0.02) {
        this.prevPos.x = this.pos.x;
        this.prevPos.y = this.pos.y;
        this.pos.x += Math.cos(this.rot) * speed;
        this.pos.y += Math.sin(this.rot) * speed;
        this.moved = true;
    }

    /**
     * move camera backward
     * @param {number} speed move speed
     */
    moveBackward(speed = 0.02) {
        this.moveForward(-speed);
    }

    moveCam(x,y,rot = PI + PI / 2)
    {
        this.pos.x = x;
        this.pos.y = y;
        this.rot = rot;
    }

    /**
     * check if camera has moved since the last time this method was called.
     * this is used in the draw() function as part of check to redraw
     * a frame or not.
     */
    hasMoved() {
        let temp = this.moved;
        this.moved = false;
        return temp;
    }

    /**
     * generate a list of direction vectors (rays) to cast from the camera
     * out into the world. 
     * 
     * The rays are an arc covering "FOV" radians and
     * centered at the camera's current rotation direction (ie the direction
     * the player is looking). 
     * @param {p5.Vector[]} directions list contents will be overwritten
     */
    getRays(directions) {
        // use length of directions list to determine how many to "cast"
        let n = directions.length;
        let start = p5.Vector.fromAngle(this.rot - this.fov / 2);
        let end = p5.Vector.fromAngle(this.rot + this.fov / 2);
        directions[0] = start;
        for (let i = 1; i <= n - 2; i++) {
            directions[i].x = lerp(start.x, end.x, i / (n - 1));
            directions[i].y = lerp(start.y, end.y, i / (n - 1));
            directions[i].normalize();
        }
        directions[n - 1] = end;
        return directions;

    }

    /**
     * Checks for wall collision, including the EXIT. Resets the maze if
     * the exit is found.
     * @param {Grid} grid 
     */
    checkCollisions(grid) {
        this.correctWallViolation(grid);
    }

    /**
     * Does the actual work of wall collision detection and correction.
     * @param {Grid} grid 
     */
    correctWallViolation(grid) {
        let wall = grid.match(this.pos.x, this.pos.y, SOLID);
        if (wall) {
            // inside a wall
            this.pos.x = this.prevPos.x;
            this.pos.y = this.prevPos.y;
        }
    }
}

/**
 * Hit encapsulates the results of a ray hitting a wall.
 */
class Hit {
    constructor() {
        this.pos = createVector();
        this.gridpos = createVector();
        this.cell = 0;
        this.d = 0;
    }
}

/**
 * The marchRay function uses a style of "raycasting" inspired by the 
 * Wolfenstein 3D game--not actual ray casting in the normal sense (intersecting
 * geometries), and not ray marching (using distance functions).
 * 
 * A ray moves across a regular grid of "walls" and 
 * "free space". If the grid square is free space, the position on the opposite
 * side of the grid square is calculated to determine which grid square the ray
 * hits next. This process repeats until a wall is hit.
 * 
 * This is done basically by determining where the ray hits on the "horizontal"
 * lines between grid cells and on the "vertical" lines between cells. The 
 * new position is the closest of these 2 intersection points.
 * 
 * See this video for a good explanation of how this style of raycasting works:
 * https://www.youtube.com/watch?v=eOCQfxRQ2pY
 * 
 * @param {Hit} hit the result of the cast. will be modfied by function.
 * @param {p5.Vector} dir direction of the ray to cast
 * @param {p5.Vector} pos starting position of the ray (camera's location)
 * @param {Grid} grid the 'world'
 */
function marchRay(hit, pos, dir, grid) {
    let starttime = Date.now();
    let posOrig = pos;
    pos = pos.copy();
    let wall = grid.match(pos.x, pos.y, SOLID);

    let p1 = createVector();
    let p2 = createVector();
    while (!wall) {
        p1.x = 0; p1.y = 0; p2.x = 0; p2.y = 0;

        if (dir.x > 0) {
            p1.x = Math.ceil(pos.x);
        } else if (dir.x < 0) {
            p1.x = Math.floor(pos.x);
        }
        if (dir.y > 0) {
            p2.y = Math.ceil(pos.y);
        } else if (dir.y < 0) {
            p2.y = Math.floor(pos.y);
        }

        p1.y = pos.y + dir.y * ((p1.x - pos.x) / dir.x);
        p2.x = pos.x + dir.x * ((p2.y - pos.y) / dir.y);

        let p1len = p5.Vector.dist(pos, p1);
        let p2len = p5.Vector.dist(pos, p2);

        if (p1len <= p2len) {
            pos.set(p1);
        } else {
            pos.set(p2);
        }
        pos.x += dir.x * 0.00000001; // offset the new position slightly
        pos.y += dir.y * 0.00000001; // to ensure the 'next' cell is checked.
        wall = grid.match(pos.x, pos.y, SOLID);
    }

    hit.pos.set(pos);
    hit.cell = grid.cell(pos.x, pos.y);
    hit.d = p5.Vector.dist(posOrig, pos);
    hit.gridpos = getCellCoords(pos);


    return hit;
}

/**
 * gets the grid cell indices from a position.
 * @param {p5.Vector} pos 
 */
function getCellCoords(pos) {
    let gridx = Math.floor(pos.x);
    let gridy = Math.floor(pos.y);
    return createVector(gridx, gridy);
}



/**
 * Grid encapsulates the world. Cells are represented with a 32-bit integer
 * value. The lowest byte is a series of bitflags indicating things such as if
 * the cell is a wall. The higher 3 bytes are used to encode the cell's color
 * (or perhaps texture if I had gotten that far). So there are a lot of
 * bitwise operations performed in later grid/maze manipulation functions.
 */
class Grid {
    constructor(data) {

        this.data = data;


        this.height = this.data.length;
        this.width = this.data[0].length;
    }

    /**
     * Get the data associated with the cell.
     * @param {number} x 
     * @param {number} y 
     * @return {number}
     */
    cell(x, y) {
        
        let gridx = Math.floor(x);
        let gridy = Math.floor(y);
             return this.data[gridy][gridx];
    }

    /**
     * Checks if the cell has the given flags set.
     * @param {number} x 
     * @param {number} y 
     * @param {number} flags set of bitflags to test against the cell
     */
    match(x, y, flags) {
        return cellIs(this.cell(x, y), flags);
    }

    /**
     * unsets the "hidden" flag for the cell.
     * @param {number} x 
     * @param {number} y 
     */
    unhideCell(x, y) {
        let gridx = Math.floor(x);
        let gridy = Math.floor(y);
        this.data[gridy][gridx] &= ~HIDDEN; // unset hidden flag.
    }
}

/**
 * Does the actual work of checking bitflags.
 * @param {number} cell cell's data
 * @param {number} flags bitflags to check
 */
function cellIs(cell, flags) {
    return (cell & flags) == flags;
}

/**
 * This basically just goes around the edge of the grid and makes every
 * cell solid.
 * @param {number[][]} grid the 'world' grid in raw data form
 */
function makeExteriorWalls(grid) {
    for (let y = 0; y < grid.length; y++) {
        if (y == 0 || y == grid.length - 1) {
            for (let x = 0; x < grid[y].length; x++) {
                grid[y][x] = SOLID;
            }
        } else {
            grid[y][0] = SOLID ;
            grid[y][grid[y].length - 1] = SOLID ;
        }
    }
}

/**
 * finds a random location that is not in a wall by making a list
 * of the centers of all non-wall cells, then choosing one randomly.
 * @param {number[][]} grid raw grid data
 * @returns {p5.Vector|undefined} position or undefined
 */
function findPlaceNotInWall(grid) {
    const gw = grid[0].length;
    const gh = grid.length;
    let halls = [];
    for (let y = 1; y < gh - 1; y++) {
        for (let x = 1; x < gw - 1; x++) {
            if (!cellIs(grid[y][x], SOLID)) {
                halls.push(createVector(x + 0.5, y + 0.5)); // add 0.5 to get in middle of cell
            }
        }
    }
    return random(halls);
}


//
const NONE = 0;
const SOLID = 0b00000001;
const ENTRY = 0b00000010;
const EXIT = SOLID | ENTRY;
const HIDDEN = 0b00000100;

