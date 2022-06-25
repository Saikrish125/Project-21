
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundObj;

function preload()
{
	
}

function setup() {
	createCanvas(900, 900);


	engine = Engine.create();
	world = engine.world;

	var ball_options={

		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball = Bodies.circle (150,100, 20, ball_options);
	World.add(world,ball);

	Engine.run(engine);
	groundObj= new ground(width/2,670,width,20)
    leftside = new ground(1100,600,20,120);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y, 20);
  
  
  
  
  groundObj.display();
  
  drawSprites();
  
 
}



