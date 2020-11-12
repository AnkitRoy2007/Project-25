const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var ground,paper;

function preload(){

  dustbinImage = loadImage("sprites/dustbin.png");
}

function setup(){
    var canvas = createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;

    ball = new Paper(100,375,40,40);

    ground = new Ground(600,height-10,1200,10);
    
    log1 = new log(900,375,100,15);
    log2 = new log(857,318,15,130);
    log3 = new log(943,318,15,130);
    
    dustbin = new dustbin(905,303,280,210);
    Engine.run(engine);
}

function draw(){
    background(25);

    text(mouseX+" "+mouseY,mouseX,mouseY);
    console.log(ball.x);

    Engine.update(engine);
    ball.display();
    
    log1.display();
    log2.display();
    log3.display();
    
    dustbin.display();

    ground.display();

    keyPressed();
}
function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(ball.body,ball.body.position,{x : 0.3,y : -2});
     }
    if(keyCode === DOWN_ARROW) {
        Matter.Body.applyForce(ball.body,ball.body.position,{x : 2,y : 5});
    }
 }