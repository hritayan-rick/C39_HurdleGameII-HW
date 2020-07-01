const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg, platform;
var stone, slingShot;
var bg, font;
var Score = 0;

function preload() {
   // backgroundImg = loadImage("sprites/bg_day.jpg");

   getBGImg();
   font = loadFont('sprites/font.ttf');
}

function setup() {
    var canvas = createCanvas(1280, 720);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(640, height - 20, 1280, 40);
    platform = new Ground(150, 595, 300, 170);
    base1 = new Ground(680, 600, 350, 20);
    base2 = new Ground(960, 300, 350, 20);

    stone = new Stone(200, 50);

    slingShot = new SlingShot(stone.body, { x: 200, y: 340 });

    block1 = new rectBlock(590, 580, 60, 60, "sprites/iceBlock1.png");
    block2 = new rectBlock(592, 550, 60, 60, "sprites/iceBlock1.png");
    block3 = new rectBlock(592, 520, 60, 60, "sprites/metalBlock1.png");
    block4 = new rectBlock(720, 580, 60, 60, "sprites/iceBlock1.png");
    block5 = new rectBlock(720, 550, 60, 60, "sprites/metalBlock1.png");
    block6 = new rectBlock(720, 520, 60, 60, "sprites/metalBlock1.png");
	block7 = new rectBlock(655, 490, 20, 20, "sprites/woodBlock1.png");
	block8 = new rectBlock(615, 490, 20, 20, "sprites/woodBlock1.png");
	block9 = new rectBlock(695, 490, 20, 20, "sprites/metalBlock1.png");
	
	block10 = new rectBlock(960, 80, 30,30, "sprites/iceBlock1.png");
    block11 = new rectBlock(900, 80, 30, 30, "sprites/iceBlock1.png");
    block12 = new rectBlock(1020, 80, 30, 30, "sprites/iceBlock1.png");
	//
	block13 = new rectBlock(960, 40, 30, 30, "sprites/metalBlock1.png");
    block14 = new rectBlock(920, 40, 30, 30, "sprites/metalBlock1.png");
    block15 = new rectBlock(1000, 40, 30, 30, "sprites/metalBlock1.png");
	//
	block16 = new rectBlock(940, 20, 30,30, "sprites/woodBlock1.png");
	block17 = new rectBlock(980, 20, 30,30, "sprites/woodBlock1.png");
	//
	block18 = new rectBlock(960, 0, 40,40, "sprites/metalBlock2.png");
	block19 = new rectBlock(655, 450, 40,40, "sprites/metalBlock2.png");


    log1 = new Log(655, 500, 20, "sprites/iceLog.png");
    log2 = new Log(655, 470, 20, "sprites/woodLog.png");
	
	log3 = new Log(960, 100, 20, "sprites/woodLog.png");
	log4 = new Log(960, 60, 20, "sprites/metalLog.png");

}

function draw() {
    if(backgroundImg){
    background(backgroundImg);
    }

    Engine.update(engine);
    strokeWeight(2);

    ground.display("#5e2015");
    platform.display("#5e2015");
    base1.display("#a6563f");
    base2.display("#c26461");

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
	block7.display();
	block8.display();
	block9.display();
	
	block10.display();
	block11.display();
	block12.display();
	block13.display();
	block14.display();
	block15.display();
	block16.display();
	block17.display();
	block18.display();
	block19.display();

    log1.display();
	log2.display();
	
	log3.display();
	log4.display();


    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
	block7.score();
	block8.score();
	block9.score();
	
	block10.score();
	block11.score();
	block12.score();
	block13.score();
	block14.score();
	block15.score();
	block16.score();
	block17.score();
	block18.score();
	block19.score();

    log1.score();
	log2.score();
	
	log3.score();
	log4.score();

    slingShot.display();
	
    textSize(20);
    fill("#ff0000");
    textFont("Helvetica")
    text("Drag the stone & Destroy the Tower of Blocks!!",480, 30);
    textSize(12);
    text("(Hit them really hard to make them disappear. Press SPACE to attach stone to Slingshot.)",440, 50);
    textFont(font);
    textSize(20);
    fill("#FF6600");
    text("Score:", width-120, 25);
	textSize(40);
    text(Score, width -100, 60);
	
	console.log(stone.body.position.x);

    stone.display();

}

function mouseDragged() {
    Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY });
}


function mouseReleased() {
    slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(stone.body);
    }
}

async function getBGImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var datetime =  responseJSON.datetime;
    var hour = datetime.slice(11,13);

    if(hour >= 06 && hour <= 18){
        bg = 'sprites/bg_day.jpg';
    }
    else{
        bg = 'sprites/bg_night.png';
    }

    backgroundImg = loadImage(bg);
}