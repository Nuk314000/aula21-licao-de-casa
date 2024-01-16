
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var leftSide, rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1698, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);


	var ball_options = {
		isStatic:false,
		restitution:0.1,
		friction:0,
		density:1.2
	}

	var options = {

		isStatic:true
	}

	ball = Bodies.circle(200, 100, 20, ball_options);
	World.add(world, ball);

	rectMode(CENTER);
	ellipseMode(RADIUS);

	groundObj = Bodies.rectangle(width/2, 670, width, 20, options);
	World.add(world, groundObj);

	leftSide = Bodies.rectangle(1100, 600, 20, 120, options);
	World.add(world, leftSide);

	rightSide = Bodies.rectangle(1400, 600, 20, 120, options);
	World.add(world, rightSide);
}


function draw() {
  rectMode(CENTER);
  background(0);

	ellipse(ball.position.x, ball.position.y, 20);
	rect(groundObj.position.x, groundObj.position.y, width, 20);
	rect(leftSide.position.x, leftSide.position.y, 20, 120);
	rect(rightSide.position.x, rightSide.position.y, 20, 120);

  drawSprites();
 



}

function keyPressed() {

	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball,{x:0,y:0},{x:90,y:-100});
  	
	}

}