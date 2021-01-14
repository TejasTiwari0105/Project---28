const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
 
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mago11, mango12;
var tree, ground, stone, launcher;
var boy, boyImage;

function preload(){
	boy = loadImage("Plucking+mangoes/Plucking mangoes/boy.png");
}

function setup(){
	createCanvas(1300, 700);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	stone = new Stone(235, 420, 40);
	
	mango1 = new mango(1100, 100,30);
  	mango2 = new mango(1170,130,30);
	mango3 = new mango(1010,140,30);
	mango4 = new mango(1000,70,30);
	mango5 = new mango(1100,70,30);
	mango6 = new mango(1000,230,30);
	mango7 = new mango(900,230,40);
	mango8 = new mango(1140,150,40);
	mango9 = new mango(1100,230,40);
	mango10 = new mango(1200,200,40);
	mango11 = new mango(1120,50,40);
	mango12 = new mango(900,160,40);

	tree = new Tree(1050, 580)
	
	ground=new Ground(width/2,600,width,20);
	launcher=new Launcher(stone.body,{x:235,y:420})

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });

	Engine.run(engine);
}

function draw(){
  rectMode(CENTER);
  background(230);  

  image(boy ,200,340,200,300);

  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  mango=[]
  
  ground.display();
  stone.display();
  launcher.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  detectCollision(stone,mango12);
  drawSprites();
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased(){
	launcher.fly();
   
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420}) 
	  launcher.attach(stone.body);
	}
  }

function detectCollision(){
	var collision = Matter.SAT.collides(stone,mango1);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(mango1,false);	
	}
	var	mangoBodyPosition=mango1.body.position
	var stoneBodyPosition=stone.body.position

	  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
  	if(distance<= mango1.r +stone.r){
  	  Matter.Body.setStatic(mango1.body,false);
    }
}
