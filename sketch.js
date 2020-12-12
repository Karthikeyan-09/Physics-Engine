const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var  engine, world;
var ball, ground;

function setup () {
createCanvas(400,400);

engine = Engine.create();
world = engine.world;

var boptions =  {
  restitution: 1.5
}
ball = Bodies.circle(200,200,30, boptions);

World.add(world,ball);

var goptions =  {
  isStatic : true
}
ground = Bodies.rectangle(200,360,400,20, goptions);

World.add(world,ground);


}

function draw () {
background("orange");
Engine.update(engine);
rectMode(CENTER);
fill("brown");
rect(ground.position.x, ground.position.y,400,20);
fill("green");
ellipseMode(RADIUS);
ellipse(ball.position.x, ball.position.y,30,30);
}