
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground1,ground2,ground3,ground4,ground5,ground6,ground7,ground8,ground9,ground10,ground11,ground12,ground13,ground14,ground15,ground16,ground17,ground18,ground19,ground20,ground21,ground22,ground23,ground24,ground25,ground26,ground27,ground28,ground29,ground30,ground31,ground32,ground33,ground34,ground35,ground36,ground37,ground38;

function preload(){
  forestImage=loadImage("forest background.jpg")
  groundImage=loadImage("GroundImage.png")
  kid_running=loadAnimation("kid1.png","kid2.png","kid3.png")
  pinImage=loadImage("pin.png")
}

function setup() {
  createCanvas(7400,600);

  engine = Engine.create();
  world = engine.world;
  
  ground1=new Ground(90,500,200,50);

  ground2=new Ground(320,420,200,50);

  ground3=new Ground(490,320,200,50);
  

  ground4=new Ground(660,450,200,50);
 

  ground5=new Ground(860,350,200,50);
  

  ground6=new Ground(1050,240,200,50);
 

  ground7=new Ground(1200,340,200,50);
 

  ground8=new Ground(1400,400,200,50);
 

  ground9=new Ground(1600,320,200,50);
 

  ground10=new Ground(1600,320,200,50);
 

  ground11=new Ground(1800,240,200,50);
  

  ground12=new Ground(2000,320,200,50);
 

  ground13=new Ground(2000,320,200,50);
  

  ground14=new Ground(2200,400,200,50);
 

  ground15=new Ground(2400,320,200,50);
 

  ground16=new Ground(2600,240,200,50);
  

  ground17=new Ground(2800,320,200,50);
  

  ground18=new Ground(3000,400,200,50);
  

  ground19=new Ground(3200,320,200,50);
  

  ground20=new Ground(3400,240,200,50);
 

  ground21=new Ground(3600,320,200,50);
 

  ground22=new Ground(3800,400,200,50);
  

  ground23=new Ground(4000,320,200,50);


  ground24=new Ground(4200,240,200,50);
  

  ground25=new Ground(4400,320,200,50);
  

  ground26=new Ground(4600,400,200,50);
  

  ground27=new Ground(4800,320,200,50);
 

  ground28=new Ground(5000,240,200,50);
 

  ground29=new Ground(5200,320,200,50);
  

  ground30=new Ground(5400,400,200,50);
  

  ground31=new Ground(5600,320,200,50);
  

  ground32=new Ground(5800,240,200,50);
 

  ground33=new Ground(6000,320,200,50);
  
  ground34=new Ground(6200,400,200,50);
  

  ground35=new Ground(6400,320,200,50);
  

  ground36=new Ground(6600,240,200,50);
 

  ground37=new Ground(6800,320,200,50);
  
  ground38=new Ground(7000,400,200,50);
  
 //ground1.shapeColor="brown"
 //ground1.addImage(groundImage)
// ground1.scale=0.4
  

  //kid=createSprite(80,450,150,30)
// kid.addAnimation("running",kid_running)
// kid.scale=0.4

 //ground1.setCollider("rectangle",0,35)

 kid1=new Kid();
 
}

function draw() {
  background(forestImage);
  Engine.update(engine);
  //if(keyDown("space")){
//    kid.velocityY=-4;
 // }
 // if(keyDown("right_arrow")){
 //   kid.x=kid.x+10;
  //}
  //if(keyDown("left_arrow")){
 //   kid.x=kid.x-10;
 // }
 // kid.velocityY=kid.velocityY+0.5;
// createObstacles();
// kid.collide(ground1)
ground1.display();
ground2.display();
ground3.display();
ground4.display();
ground5.display();
ground6.display();
ground7.display();
ground8.display();
ground9.display();
ground10.display();
ground11.display();
ground12.display();
ground13.display();
ground14.display();
ground15.display();
ground16.display();
ground17.display();
ground18.display();
ground19.display();
ground20.display();
ground21.display();
ground22.display();
ground23.display();
ground24.display();
ground25.display();
ground26.display();
ground27.display();
ground28.display();
ground29.display();
ground30.display();
ground31.display();
ground32.display();
ground33.display();
ground34.display();
ground35.display();
ground36.display();
ground37.display();
ground38.display();
kid1.display()

}

//function createObstacles(){
//for(i=600;i<7000;i=i+600){
  //pin=createSprite(i,320,50,30)
  //pin.addImage(pinImage)
  //pin.scale=0.2
//}
//}