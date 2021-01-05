
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperBall;
var floor;

var leftWall, rightWall, bottomWall;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperBall = new BaseClass(200, 450, 70, 70);
	floor = new GroundClass(400, 670, 800, 20);
	
	leftWall = new DustBin(400, 650, 200, 20);

	console.log(paperBall.getObject())

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);


  leftWall.display();
  floor.display();
  paperBall.display();
}

function keyPressed() {
	switch (keyCode) {
		case UP_ARROW:
			Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:0,y:-85});
			break;
		case DOWN_ARROW:
			Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:0,y:85});
			break;
		case RIGHT_ARROW:
			Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:85,y:0});
			break;
		case LEFT_ARROW:
			Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:-85,y:0});
			break;
	} 
}

