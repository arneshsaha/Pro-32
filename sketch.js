//namespace all the matter.js files
const Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//create variables for engine and world
var engine;
var world;

//create the variables for all the objects
var backgroundImg;
var ground;
var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;
var box8;
var box9;
var box10;
var box11;
var box12;
var box13;
var box14;
var box15;
var box16;
var box17;
var box18;
var box19;
var box20;
var box21;



var ground2;
var box22;
var box23;
var box24;
var box25;
var box26;
var box27;
var box28;
var box29;
var box30;
var box31;
var box32;
var box33;
var box34;
var box35;
var box36;
var box37;
var box38;
var box39;
var box40;
var box41;
var box42;

var ground3;
var box43;
var box44;
var box45;
var box46;
var box47;
var box48;
var box49;
var box50;
var box51;
var box52;
var box53;
var box54;
var box55;
var box56;
var box57;
var box58;
var box59;
var box60;
var box61;
var box62;
var box63;


var shooter;

var slingshot;

var score = 0;

var gameState = "onSling"

var bg = "morn.png";

function preload() {

    //load the background image
    backgroundImg = loadImage("morn.png");

    //call the function for API
    getBackgroundImg();

}



function setup() {

    //create the canvas
    createCanvas(1200, 600);

    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;



    //create the first box target
    ground = new Ground(900, 450, 175, 20);
    box1 = new Particlered(830, 430, 20, 20);
    box2 = new Particlered(850, 430, 20, 20);
    box3 = new Particlered(870, 430, 20, 20);
    box4 = new Particlered(890, 430, 20, 20);
    box5 = new Particlered(910, 430, 20, 20);
    box6 = new Particlered(930, 430, 20, 20);
    box7 = new Particlered(950, 430, 20, 20);
    box8 = new Particlered(970, 430, 20, 20);


    box9 = new Particleblue(860, 410, 20, 20);
    box10 = new Particleblue(840, 410, 20, 20);
    box11 = new Particleblue(880, 410, 20, 20);
    box12 = new Particleblue(900, 410, 20, 20);
    box13 = new Particleblue(920, 410, 20, 20);
    box14 = new Particleblue(940, 410, 20, 20);
    box15 = new Particleblue(960, 410, 20, 20);


    box16 = new Particlegreen(850, 390, 20, 20);
    box17 = new Particlegreen(870, 390, 20, 20);
    box18 = new Particlegreen(890, 390, 20, 20);
    box19 = new Particlegreen(910, 390, 20, 20);
    box20 = new Particlegreen(930, 390, 20, 20);
    box21 = new Particlegreen(950, 390, 20, 20);


    //create the second box target
    ground2 = new Ground(700, 200, 175, 20);
    box22 = new Particlegreen(630, 180, 20, 20);
    box23 = new Particlegreen(650, 180, 20, 20);
    box24 = new Particlegreen(670, 180, 20, 20);
    box25 = new Particlegreen(690, 180, 20, 20);
    box26 = new Particlegreen(710, 180, 20, 20);
    box27 = new Particlegreen(730, 180, 20, 20);
    box28 = new Particlegreen(750, 180, 20, 20);
    box29 = new Particlegreen(770, 180, 20, 20);

    box30 = new Particlered(640, 160, 20, 20);
    box31 = new Particlered(660, 160, 20, 20);
    box32 = new Particlered(680, 160, 20, 20);
    box33 = new Particlered(700, 160, 20, 20);
    box34 = new Particlered(720, 160, 20, 20);
    box35 = new Particlered(740, 160, 20, 20);
    box36 = new Particlered(760, 160, 20, 20);

    box37 = new Particleblue(650, 140, 20, 20);
    box38 = new Particleblue(670, 140, 20, 20);
    box39 = new Particleblue(690, 140, 20, 20);
    box40 = new Particleblue(710, 140, 20, 20);
    box41 = new Particleblue(730, 140, 20, 20);
    box42 = new Particleblue(750, 140, 20, 20);


    //create the shooter
    shooter = new Shooter(300, 300, 50, 50);

    //create the third box target
    ground3 = new Ground(150, 220, 175, 20);
    box43 = new Particleblue(80, 200, 20, 20);
    box44 = new Particleblue(100, 200, 20, 20);
    box45 = new Particleblue(120, 200, 20, 20);
    box46 = new Particleblue(140, 200, 20, 20);
    box47 = new Particleblue(160, 200, 20, 20);
    box48 = new Particleblue(180, 200, 20, 20);
    box49 = new Particleblue(200, 200, 20, 20);
    box50 = new Particleblue(220, 200, 20, 20);

    box51 = new Particlegreen(90, 180, 20, 20);
    box52 = new Particlegreen(110, 180, 20, 20);
    box53 = new Particlegreen(130, 180, 20, 20);
    box54 = new Particlegreen(150, 180, 20, 20);
    box55 = new Particlegreen(170, 180, 20, 20);
    box56 = new Particlegreen(190, 180, 20, 20);
    box57 = new Particlegreen(210, 180, 20, 20);

    box58 = new Particlered(100, 160, 20, 20);
    box59 = new Particlered(120, 160, 20, 20);
    box60 = new Particlered(140, 160, 20, 20);
    box61 = new Particlered(160, 160, 20, 20);
    box62 = new Particlered(180, 160, 20, 20);
    box63 = new Particlered(200, 160, 20, 20);


    //create the slingshot
    slingshot = new SlingShot(shooter.body, {
        x: 400,
        y: 300
    });


}



function draw() {

    //clear the background
    background(backgroundImg);

    //show the score
    textSize(35);
    textFont("Georgia");
    fill("white");
    text("Score : " + score, 1000, 50);


    // update the engine
    Engine.update(engine);

    //display the first box target
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();


    //display the second box target
    ground2.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();
    box34.display();
    box35.display();
    box36.display();
    box37.display();
    box38.display();
    box39.display();
    box40.display();
    box41.display();
    box42.display();

    //display the shooter
    shooter.display();

    //display the third box target
    ground3.display();
    box43.display();
    box44.display();
    box45.display();
    box46.display();
    box47.display();
    box48.display();
    box49.display();
    box50.display();
    box51.display();
    box52.display();
    box53.display();
    box54.display();
    box55.display();
    box56.display();
    box57.display();
    box58.display();
    box59.display();
    box60.display();
    box61.display();
    box62.display();
    box63.display();

    //slingshot.display();
    slingshot.display();

}


//make the shooter drag with the mouse
function mouseDragged() {
    if (gameState === "onSling") {
        Matter.Body.setPosition(shooter.body, {
            x: mouseX,
            y: mouseY
        });
    }
}

//make the shooter fly and 
function mouseReleased() {
    slingshot.fly();
    gameState = "launched";
}

//make the shooter again join with the slingshot when space is pressed
function keyPressed() {

    if (keyCode === 32) {
        slingshot.attach(shooter.body);
        gameState = "onSling";

        Matter.Body.setPosition(shooter.body, {
            x: 400,
            y: 300
        });




    }
}

//make a function to call API
async function getBackgroundImg() {
    //make a variable to fetch data form the API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
    var responseJSON = await response.json();
    console.log(responseJSON);

    //extract the datetime
    var datetime = responseJSON.datetime;
    console.log(datetime);

    //extract the hour
    var hour = datetime.slice(11, 13);
    console.log(hour);

    //write the condition to change the background on the basis of time
    if (hour >= 06 && hour <= 19) {
        bg = "morn.png";



    } else {

        bg = "night.png";

    }
    backgroundImg = loadImage(bg);
   
}