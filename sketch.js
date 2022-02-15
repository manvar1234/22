const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;




function setup() {
  createCanvas(400,400);
  engine = Engine.create()
  world = engine.world
  
  var ground_options = {
    isStatic : true
  }
  
  ground = Bodies.rectangle(200,390,200,1,ground_options)
  World.add(world,ground)

  var ball_options = {
    restitution : 5.0
  }
  ball = Bodies.rectangle(200,100,50,80,ball_options)
  World.add(world,ball)


}

function draw() {
  background("black");

  Engine.update(engine)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,35,35)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,10)
} 