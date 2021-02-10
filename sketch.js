var bgimage;
var snake,snakeimage;
var playerCount=0;
var gameState=0;
var snake1,snake2,snakes;
var form,player,game;
var allPlayers

function preload(){
  bgimage=loadImage("images/bg.png")
  snakeimage=loadImage("images/sahaj 1.png")
}

function setup(){
   createCanvas(1000,1000)
   edges=createEdgeSprites();
   database = firebase.database();
   game = new Game();
   game.getState();
   game.start();
   
}

function draw(){
     background(255);
     if(playerCount === 2){
      game.update(1);
    }
    if(gameState === 1){
      clear();
      game.play();
    }
    
     drawSprites();
    // if(snake.isTouching(edges)){
     //  text("Game Over",500,500)
   //  }
   
}