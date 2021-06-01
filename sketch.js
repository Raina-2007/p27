
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1 , bob2 , bob3 , bob4 , bob5 , Roof , rope1 , rope2 , rope3 , rope4 , rope5;
var bobDiameter;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	//bobDiameter = 130;
	//Create the Bodies Here.
	bob1 = new Bob (450,500);
	bob2 = new Bob (550,500);
	bob3 = new Bob (650,500);
	bob4 = new Bob (750,500);
	bob5 = new Bob (850,500);
	Roof = new roof(650,50,700,25);
	rope1 = new rope(bob1.body,Roof.body,-200,0);
	rope2 = new rope(bob2.body,Roof.body,-100,0);
	rope3 = new rope(bob3.body,Roof.body,0,0);
	rope4 = new rope(bob4.body,Roof.body,100,0);
	rope5 = new rope(bob5.body,Roof.body,200,0);

	Engine.run(engine);
}


function draw() {
  //rectMode(CENTER);
  background(230);
  Roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  //drawSprites();
 
}

function keyPressed (){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-830,y:750});
	}
}
