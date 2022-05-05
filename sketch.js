const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, groundObj, leftSide, rightSide;
var world;
var radius = 70;
var dustbinImg, paperImg

function preload() {
	//find the bug in the below code
	dustbinImg = loadImage("dustbin.png");
	paperImg = loadImage("paper.png");

}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		density: 0.4
	}

	ball = Bodies.circle(260, 100, radius / 2.6, ball_options);
	World.add(world, ball);

	ground = new Ground(width / 2, 670, width, 20);
	leftSide = new Ground(1100, 600, 10, 120);
	rightSide = new Ground(1270, 600, 10, 120);
	bottomSide = new Ground(1185, 650, 150, 20);

	Engine.run(engine);

}


function draw() {
	background(200);
	rectMode(CENTER);
    textSize(20)
	text("You want to inculcate the habit of throwing the waste in the trash bin in young individuals and help keep your city clean.\n So you have decided to create a simple game of throwing crumpled paper balls in a waste paper basket.",200,200)


	ground.display();
	leftSide.display();
	rightSide.display();
	bottomSide.display();


	imageMode(CENTER);
	//use image() command to add paper image to the ball
	push()
	imageMode(CENTER)
	image(paperImg, ball.position.x, ball.position.y, 50, 50)
	pop()


	// use image() command to add dustbin image in the canvas.
	push()
	imageMode(CENTER)
	image(dustbinImg,1180, 560, 220, 200)
	pop()

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		
		Matter.Body.applyForce(ball, ball.position, { x: 50, y: -50 });

	}
}
