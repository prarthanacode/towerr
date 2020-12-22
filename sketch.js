const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
    ground = new Ground(500,640,400,20);
    ground1 = new Ground(900,400,300,20);
    ground2 = new Ground(600,height,1200,20);

    brick1 = new Block(430,535,30,40)
    brick2 = new Block(460,535,30,40)
    brick3 = new Block(490,535,30,40)
    brick4 = new Block(520,535,30,40)
    brick5 = new Block(550,535,30,40)


    brick6 = new Block(460,495,30,40)
    brick7 = new Block(490,495,30,40)
    brick8 = new Block(520,495,30,40)


    brick9 = new Block(400,575,30,40)
    brick10 = new Block(430,575,30,40)
    brick11 = new Block(460,575,30,40)
    brick12 = new Block(490,575,30,40)
    brick13 = new Block(520,575,30,40)
    brick14 = new Block(550,575,30,40)
    brick15 = new Block(580,575,30,40)


    brick16 = new Block(490,455,30,40)
	
    
    block1 = new Block(830,235,30,40)
    block2 = new Block(860,235,30,40)
    block3 = new Block(890,235,30,40)
    block4 = new Block(920,235,30,40)
    block5 = new Block(950,235,30,40)


    block6 = new Block(860,195,30,40)
    block7 = new Block(890,195,30,40)
    block8 = new Block(920,195,30,40)


    block9 = new Block(890,155,30,40)

    polygon1 = new Polygon(200,500)

    polygon2 = new Sling(polygon1.body,{x:100,y:500})
  
}


function draw() {
  rectMode(CENTER);
  background(0)
  
  ground.display();
  ground1.display();
  ground2.display();
  brick1.display();
  brick2.display();
  brick3.display();
  brick4.display();
  brick5.display();
  brick6.display();
  brick7.display();
  brick8.display();
  brick9.display();
  brick10.display();
  brick11.display();
  brick12.display();
  brick13.display();
  brick14.display();
  brick15.display();
  brick16.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  polygon1.display();
  polygon2.display();
  
	//bin1.display();		
	//bin2.display();
	//bin3.display();
//	bin.display(850, 605, 150, 150);
	

	
}

function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
  //}
}


function mouseReleased(){
  polygon2.fly();
  
}