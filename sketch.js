const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var table;
var player1image, player1;
var sky;
var player2, computerimage;
var ball;
var form, player, game;
var score = 0;
var score2 = 0;
//var textSize(50);
//var textFont("Arial");
var gameState = "serve";

function preload(){
  player1image = loadImage("racket.png");
  tableImage = loadImage("table2.png");
  skyimage = loadImage("background.jpg");
  computerimage = loadImage("computer2.png");
  ballimage = loadImage("ball.png");
}

function setup() {
  createCanvas(800,800);
  /*game = new Game();
  game.getState();
  game.start();*/


  sky = createSprite(400,250,800,50)
  sky.addImage("skyImage", skyimage);
  sky.scale = 2;
  
  player2 = createSprite(400,140);
  player2.addImage("player2Image", computerimage);
  player2.scale = 1.2;

  table = createSprite(400,500);
  table.addImage("table1Image", tableImage);
  table.scale = 1.2;

  ball = createSprite(400,400);
  ball.addImage("ballImage", ballimage);
  ball.scale = 0.07;
  //ball.velocityY = 1;

  player1 = createSprite(300,600);
  player1.addImage("playerImage", player1image);
  player1.scale = 0.4;
  ball.velocityY = 3;

}

function draw() {
  background("white"); 
  console.log(ball.y);

  if(gameState = "serve"){
    text("Touch the ball to start the game!",200,200);
  }
 
  player1.position.x = mouseX;
  player1.position.y = mouseY; 

  ball.x = player1.x;

  player2.x = ball.x - 5;

  if (ball.velocityY = 0){
   player1.y = ball.y;
  }
  if(keyDown === 32){
    ball.velocityX = 1;;
    }
 if(player1.position.x === 400 && player1.position.y === 300){
   ball.velocityY = 1;
   }

   if (ball.y <= 100){
    // isTouching2(ball,player2);
     ball.velocityY = ball.velocityY*(-1);
   }

  isTouching(ball,player1);
  isTouching2(ball,player2);
  
  if(ball.x > 200 && ball.x < 600 && ball.y < 170){
     ball.velocityY = 300;
     ball.velocityX = 5;
   }


  text (score, 200, 20);
  text ("Computer's Score=" + score2, 200, 10);

drawSprites();
}

function isTouching(object1,object2){
  if(player1.x  === ball.x /*&& ball.y > 400*//* || player1.x - 5 === ball.x  || player1.x - 4 === ball.x || player1.x - 3 === ball.x || player1.x - 2 === ball.x || player1.x - 1 === ball.x || player1.x + 1 === ball.x || player1.x + 2 === ball.x || player1.x + 3 === ball.x || player1.x + 4 === ball.x || player1.x + 5 === ball.x /*&& /*player1.y === ball.y*/ /*|| player1.y - 5 === ball.y || player1.y - 4 === ball.y || player1.y - 3 === ball.y || player1.y - 2 === ball.y || player1.y - 1 === ball.y || player1.y + 1 === ball.y || player1.y + 2 === ball.y || player1.y + 3 === ball.y || player1.y +4 === ball.y || player1.y +5 === ball.y*/ ){
     ball.velocityY = -3;
  }
}

function isTouching2(object1,object4){
  if(player2.x === ball.x){
    ball.velocityY = 3;
  }
}
