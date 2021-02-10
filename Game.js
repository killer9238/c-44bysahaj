class Game{
    constructor(){

    }
    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    
      }
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }
      async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
        }
        snake=createSprite(500,200)
        snake.addImage(snakeimage)
        snake.scale=0.5

        /*snake2=createSprite(500,200)
        snake2.addImage(snakeimage)
        snake2.scale=0.5

        snakes=[snake1,snake2];*/
    }
    play(){
        form.hide();
        Player.getPlayerInfo();
        if(allPlayers !== undefined){
            background(rgb(198,135,103));
            image(bgimage, 0,0,1000,1000);

            /*for(var plr in allPlayers){
                //add 1 to the index for every loop
                index = index + 1 ;*/
             //}
             snake.bounceOff(edges)
             if(keyDown("UP_ARROW")){
                 snake.velocityY=-1
                 player.x=snake.x;
                 player.y=snake.y;
                 player.update();
               }
               if(keyDown("DOWN_ARROW")){
                 snake.velocityY=+1
                   player.x=snake.x;
                 player.y=snake.y;
                 player.update();
              }
              if(keyDown("LEFT_ARROW")){
                 snake.velocityX=-1
                 player.x=snake.x;
                 player.y=snake.y;
                 player.update();
              }
              if(keyDown("RIGHT_ARROW")){
                 snake.velocityX=+1
                 player.x=snake.x;
                 player.y=snake.y;
                 player.update();
              }
        }      
    }
}