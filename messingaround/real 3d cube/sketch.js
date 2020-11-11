var cube = new Cube(100);



function setup() {
    createCanvas(800, 500, WEBGL);
    
    // Init the functionality calling this function: 
    addScreenPositionFunction();



    tex = loadImage("tex.png")
    
  }
  
  function draw() {
    background(200);
    //rotateX(frameCount * 0.01);
push();
    rotateY(frameCount * 0.001);
    

    
    //noFill();
    texture(tex);
    fill(0,0,255,50);
    beginShape();
    for (var i = 0; i < cube.vert.length; i++)
    {
        vertex(cube.vert[i][0],cube.vert[i][1],cube.vert[i][2]);
    }
    endShape(CLOSE);


    fill(255,255,0)
    var pos = []
    for (var i = 0; i < cube.vert.length; i++)
    {
        pos.push(screenPosition(cube.vert[i]));
        circle(pos.x,pos.y,5);
    }
    pop();

    for (var i = 0; i < pos.length; i++)
    {
        circle(pos[i].x,pos[i].y,5);
    }

  }




