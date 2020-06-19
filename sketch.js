var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody
var redZone1, redZone, redZone2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	redZone1 = createSprite(300,610,20,100);
	redZone = createSprite(width/2, height-45, 200, 20);
	redZone2 = createSprite(500, 610, 20, 100);

	redZone1.shapeColor = "red";
	redZone.shapeColor = "red";
	redZone2.shapeColor = "red";

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.55, isStatic:true});
	World.add(world, packageBody);
	
	redZoneDrop = Bodies.rectangle(width/2, height-65, 200, 20 , {isStatic:true} );
 	World.add(world, redZoneDrop);

	redZoneDrop1 = Bodies.rectangle(300, 610, 20, 200 , {isStatic:true} );
	World.add(world, redZoneDrop1);

	redZoneDrop2 = Bodies.rectangle(500, 610, 20, 200 , {isStatic:true} );
	World.add(world, redZoneDrop2);
	 
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  keyPressed();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
  }
}