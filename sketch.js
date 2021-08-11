var bg,bgImg;
var player, shooterImg, shooter_shooting;


function preload(){
  bgImg=loadImage("assets/bg.jpeg");
  shooterImg=loadImage("assets/shooter_1.png");
  shooter_shooting=loadImage("assets/shooter_3.png")
} 

function setup() {
createCanvas(windowWidth,windowHeight);
bg=createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
bg.addImage(bgImg);
player=createSprite(displayWidth-1150, displayHeight-300, 50, 50);
player.addImage(shooterImg);
player.scale=0.6


}

function draw() {
  background(0); 
 
  if(keyDown("UP_ARROW")){
    player.y=player.y-2
  }
 
  if (keyDown("DOWN_ARROW")){
    player.y=player.y+2
  }

  if(keyDown("LEFT_ARROW")){
    player.x=player.x-2
  }
 
  if(keyDown("RIGHT_ARROW")){
    player.x=player.x+2
  }
  
  if(keyWentDown("space")){
  player.addImage(shooter_shooting)
  }
  
  if(keyWentUp("space")){
    player.addImage(shooterImg)
  }

 

drawSprites();

}
