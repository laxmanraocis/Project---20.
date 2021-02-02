var road, roadImage;
var player, playerImg1, playerImg2;
var coin, coinImage;
var can, canImage;
var bomb, bombImage;
var power, powerImage;

PLAY = 1;
gameState = PLAY;

var Score = 0;

function preload(){
  roadImage = loadImage("roadpng.jpeg");
  playerImg1 = loadAnimation("player1.png.jpeg, player2.png.png");
  playerImg2 = loadAnimation("player3.png.jpeg, player4.png.jpeg");
  coinImage = loadImage("coinpng.jpeg");
  canImage = loadImage("canpng.jpeg");
  bombImage = loadImage("bombpng.jpeg");
  powerImage = loadImage("powerpng.jpeg");
  
}

function setup() {
  createCanvas(100,400);
  
  road = createSprite(0,0,100,400);
  road.addImage("path",roadImage);
  road.velocityY = 4;
  
  player = createSprite(30,385,20,20);
  player.addAnimation("player1",playerImg1);
  player.addAnimation("player2",playerImg2);
  player.velocityY = 3;
  
}

function draw() {
  background(0);

  if(gameState === PLAY){

  textSize (10);
  fill ("black");
  Text("Coins " = Score, 70, 20);

    player.changeAnimation("player1",playerImg1);
    player.velocityY = 3;

    if(player.isTouching(can)){
      player.changeAnimation("player2",playerImg2);
      player.velocityY = 5;
      
      power.addImage("takat",powerImage);
      
    }

    if(player.isTouching(coin)){
      score = score + 5;

    }
  

    drawSprites();

  }
    
  
   
  }

  function createbomb(){
    if(frameCount % 300 === 0){
      bomb = createSprite(Math.round(random(10,90)),0,0);
      bomb.addImage("booom",bombImage);
      bomb.scale = 0.2;
      bomb.velocityY = 3;
      bomb.lifetime = 133;

    }
  }

  function createcan(){
    if(frameCount % 200 === 0){
      can = createSprite(Math.round(random(10,90)),0,0);
      can.addImage("booster",canImage);
      can.scale = 0.2;
      can.velocityY = 3;
      can.lifetime = 133;

    }
    
  }

  function createcoin(){
    if(frameCount % 50 === 0){
      coin = createSprite(Math.round(random(10,90)),0,0);
      coin.addImage("paisa",coinImage);
      coin.scale = 0.2;
      coin.velocityY = 3;
      coin.lifetime = 133;

    }
  
  }