
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;
var background,backgroundImage;

var SurvivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
 
}



function setup() {
  
  monkey = createSprite(30,355,20,20)
  monkey.addAnimation("monkey",monkey_running) 
  monkey.scale=0.1;  

  ground = createSprite(400,390,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);

} 
function draw() {
background("lightblue");

stroke("black")
textSize(20)
fill("black")  
SurvivalTime=Math.ceil(frameCount/frameRate())  
text("Survival Time:" + SurvivalTime,100,50 )  
  
  
if (ground.x < 0){
ground.x = ground.width/2;  
}
  
if (keyDown("space")&& monkey.y >= 279)  {
  
  monkey.velocityY=-10;
  
}

 
 monkey.velocityY = monkey.velocityY + 0.8
   
  
  monkey.collide(ground); 
  
  
 spawnObstacle(); 
 spawnbanana();
  
  
  drawSprites();  
}

  function spawnObstacle(){

  if (frameCount % 120 === 0)  {


  var obstacle=createSprite(400,368,40,50)  
  obstacle.addImage( obstacleImage);

  obstacle.scale=0.1;  
  obstacle.velocityX=-3;
  obstacle.lifetime=150;

}
  
}

function spawnbanana () {
  
if (frameCount % 100 === 0 )  {
  
var banana= createSprite(400,250,40,50)  
banana.addImage(bananaImage) 
banana.scale=0.1;  
banana.velocityX=-4; 
banana.lifetime=150;  
  
}
  
}
