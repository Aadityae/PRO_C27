
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Bob1,Bob2,Bob3,Bob4,Bob5
var Roof;
var Rope1,Rope2,Rope3,Rope4,Rope5;
var bobDiameter = 52;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Bob1 = new Bob(300,400)
	Bob2 = new Bob(352,400)
	Bob3 = new Bob(403,400)
	Bob4 = new Bob(456,400)
	Bob5 = new Bob(507,400)

	Roof = new Ground(400,200,300,20)
	
    Rope1 = new Slingshot(Bob1.body,Roof.body,-52*2,0)
	Rope2 = new Slingshot(Bob2.body,Roof.body,-26*2,0)
	Rope3 = new Slingshot(Bob3.body,Roof.body,-0*2,0)
	Rope4 = new Slingshot(Bob4.body,Roof.body,26*2,0)
	Rope5 = new Slingshot(Bob5.body,Roof.body,52*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  Bob1.display()
  Bob2.display()
  Bob3.display()
  Bob4.display()
  Bob5.display()

  Roof.display()
Rope1.display()
Rope2.display()
Rope3.display()
Rope4.display()
Rope5.display()
  drawSprites();
 
}


function keyPressed()
{
   if(keyCode === UP_ARROW)
   {
 
   Matter.Body.applyForce(Bob5.body,Bob5.body.position,{x:80,y:-290});
   }
}

