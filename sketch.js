const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine,world;


function setup(){
    createCanvas(400,400)
    engine = Engine.create();
    world = engine.world;

    wall1 = new Wall(200,0,400,1);//top wall
    wall2 = new Wall(200,400,400,1)//bottom wall
    wall3  = new Wall(0,200,1,400)//left wall
    wall4 = new Wall(400,200,1,400)//right wall

    box1 = new Box(200,200,50,50,"red")
    console.log(box1)
}

function draw(){
    background(255);
text("Click Mouse to make the body fall", 100,100)
    Engine.update(engine);

    wall1.display()
    wall2.display()
    wall3.display()
    wall4.display()
    box1.display();

    
}

function mouseClicked(){
Matter.Body.setPosition(box1.body, {x:200 , y: 372},{isStatic :false});


}