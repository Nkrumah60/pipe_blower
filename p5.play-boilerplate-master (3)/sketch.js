const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let blower
let blowerHandle
let ball
let button


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  blowerHandle = new Blower(500,270,150,20);
  blower = new Blower(600,230,120,100);
  ball = new Ball(600,100,50);
  
  button = createButton("Click To Blow");
  button.position(550,300);
  button.mouseClicked(Blow);

}

function draw() {
  background("gray");  
  Engine.update(engine);


  
  blowerHandle.display();
  blower.display();
  ball.display();
  

}

function Blow(){

Matter.Body.applyForce(ball.body,{X:0,y:0},{x:0,y:-0.05});


}