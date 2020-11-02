var roof1,ball1,ball2,ball3,ball4,ball5;
var chain1,chain2,chain3,chain4,chain5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{}

function setup() {
	createCanvas(1600,800);
	engine = Engine.create();
	world = engine.world;

	bobdiameter=40
	bobx=width/2
	boby=height/4+500

roof1= new roof(width/2,height/4,800,20)

   ball3=new ball(bobx,boby,bobdiameter)
   ball2=new ball(bobx-bobdiameter*2,boby,bobdiameter)
   ball1=new ball(bobx+bobdiameter*2,boby,bobdiameter)
   ball4=new ball(bobx+bobdiameter*4,boby,bobdiameter)
   ball5=new ball(bobx-bobdiameter*4,boby,bobdiameter)
   chain3=new rope(ball3.body,roof1.body,0,0)
   chain2=new rope(ball2.body,roof1.body,-bobdiameter*2,0)
   chain1=new rope(ball1.body,roof1.body,+bobdiameter*2,0)
   chain4=new rope(ball4.body,roof1.body,+bobdiameter*4,0)
   chain5=new rope(ball5.body,roof1.body,-bobdiameter*4,0)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  roof1.display();
  chain2.display();
  chain3.display();
  chain1.display();
  ball3.display();
  ball2.display();
  ball1.display();
  chain4.display();
  ball4.display();
  chain5.display();
  ball5.display();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-45})
    
  }
}



