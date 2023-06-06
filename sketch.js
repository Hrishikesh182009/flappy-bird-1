var canvas;
var backgroundImage,background;
var bgImg;

var bird,bar
var birdImg,barImge
var form, player;
var playerCount;
var ground,groundImage
var backg

var PLAY = 1;
var END = 0;
var gameState = PLAY;

var fuelBar

function preload() {
  backgroundImage = loadImage("./assets/bg.png");
  groundImage = loadImage("./assets/ground2.png")
  barImg = loadImage("./assets/barxtended.png")
  birdImg = loadImage("./assets/flapy.png")
  groundImage = loadImage("./assets/ground2.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  ground = createSprite(width/2-100,height/2+300)
  ground.addImage(groundImage)

  backg = createSprite(0,0,5000,5000)
  backg.addImage(backgroundImage)
  
  backg.scale = 2.5

  bird = createSprite(800,height/2,50,50)
  bird.addImage(birdImg);
  bird.scale = 0.25;
  
 bargroup = new Group()
 
}

function draw() {
  background("white");
  
 

   if(gameState === PLAY){
    if(backg.position.x<500){
      backg.position.x = 800;
    }
    //image(ground, 0, height * 5, width * 6, height);
    backg.velocity.x = -2;
    
    bird.velocity.y = bird.velocity.y + 0.5;
    if (keyDown(UP_ARROW)) {
          bird.velocity.y =- 3;
        }
  
     spawnBar1();
      }

     else if(gameState === END){
      bird.velocity.y = 0;
     backg.velocity.x = 0;
  }
  
  drawSprites()
}

function spawnBar1(){
    if(frameCount % 100 === 0){
     bar = createSprite(1600,300,50,50)
     bar.position.y = Math.round(random(height/2,height/2+50))
     
     bar.addImage(barImg);
     bar.scale = 1.4;
     bar.velocity.x = -3
     bargroup.lifetime = 120
     bargroup.add(bar)
    }
}





function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
