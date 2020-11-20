const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground , ground2 ; 
var block8  , block8 , block9 , block10 , block11 , block12 , block13 , block14 , block15 , block16 ; 
var ball, slingshot , ball_img ; 
var gameState ; 
var score = 0 ;

function preload(){
  ball_img = loadImage("ball.jpg");
  blockimg1 = loadImage("box1.jpg");
  
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
  ball = new Ball(50,200,50,50);
  

  slingshot = new SlingShot(ball.body,{x:100,y:200});
  ground = new Ground (400 , 400 , 800 , 50);
  ground2 = new Ground (400, 300 , 200 , 20);
  block8 = new Box (330 , 235 ,30,40);
  block9 = new Box (360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);
  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);
  block16 = new Box(390,155,30,40);
}

function draw() {
  background(0);
  Engine.update(engine);
  

  ball.display();
  ground.display();
  ground2.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  slingshot.display();
  
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  
  //getBackground();
  fill("pink");
  text("SCORE :" + score , 550, 40)

}

function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  slingshot.fly();
 // gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
      //ball.trajectory = [] ; 
     // ball.body.speed = 0;
      slingshot.attach(ball.body);
  }
}

/*
async function getBackground(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
    background(209,229,110);
  }
  else{
    background(12,32,98);
  }
}
*/
 
