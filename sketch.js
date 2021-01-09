const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1600,700);
    engine = Engine.create();
    world = engine.world;
   
    
   box1 = new Box(1300,550, 100, 100);
   paper = new Paper(500, 660, 70);
   ground = new Ground(800,680,1600,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    paper.display();
    box1.display();
   
    ground.display();
}
function keyPressed(){
    if (keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:55,y:-45})
    }
}