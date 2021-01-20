const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, engine, world,dustbin,paper;

function preload() {
  dustbinImg=loadImage("sprites/dustbin.png")
}
function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  dustbin=createSprite(700, 290);
  dustbin.addImage(dustbinImg);
  dustbin.scale=0.7;
  dustbin1 = new Dustbin(700, 500, 150, 20);
  dustbin2 = new Dustbin(800, 400, 20, 450);
  dustbin3 = new Dustbin(600, 400, 20, 450);

  paper = new Paper(160, 300, 70);
  ground = Bodies.rectangle(width / 2, 400, width, 10,
  {
    isStatic: true
  });
  World.add(world, ground);
}
function draw() {
    rectMode(CENTER);
    background("white");
    paper.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
    
    drawSprites();
   
   
  }



function keyPressed(){
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, { x: 895,y: -894});
  }
}
