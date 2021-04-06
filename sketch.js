
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground;
var box;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2, 790, 800, 10);
	World.add(world, ground);
   
    box = new DustBin(650,680,10,20);

	  paper = new Paper(50,10,70);
	  Engine.run(engine);
  

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  paper.display();
  box.display();

  drawSprites();
 
}

 function keyPressed(){
     if(keyCode=== UP_ARROW){
	  Matter.Body.applyForce(paper.Body, paper.Body.position, {x:85, y:-85});
  }
 }

