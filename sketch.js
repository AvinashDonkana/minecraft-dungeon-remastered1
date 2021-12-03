//var WAIT = 0;
//var PLAY = 1;
//var END = 2;
////var gameState = WAIT;
var bgImg;
var alex;
var alexImg;
var zombie1,zombie2,zombie3,zombie4;
var zombie1Img,zombie2Img,zombie3Img,zombie4Img;
var pillager,ravager,ravger2;
var pillagerImg,ravagerImg,ravager2Img;
var killSound;
var EnemysGroup,zombie1,zombie2,zombie3,zombie4,pillager,ravager,ravger2;
var invisibleGround;
var score = 0;

function preload(){
bgImg = loadImage("edited photos/background.jpg");
alexImg = loadImage("edited photos/alex.png");
zombie1Img= loadImage("edited photos/zombie1.png");
zombie2Img=loadImage("edited photos/zombie2.png");
zombie3Img=loadImage("edited photos/zombie3.png");
zombie4Img= loadImage("edited photos/zombie4.png");
pillagerImg= loadImage("edited photos/pillager.png");
ravagerImg= loadImage("edited photos/ravager.png");
ravager2Img=loadImage("edited photos/ravger2.png");



//killSound = loadSound("mixkit-sword-slash-swoosh-1476.mp3");

}


//setup function

function setup(){
createCanvas(900,600);

alex= createSprite(150,500,30,80);
alex.addImage(alexImg);
alex.scale=0.5;
alex.visible = true;

zombie1= createSprite(950,500,30,80);
zombie1.velocityX = -2;
zombie1.addImage(zombie1Img);
zombie1.scale=0.4 ;
zombie1.visible=false;

zombie2= createSprite(120,300,30,80);
zombie2.addImage(zombie2Img);
zombie2.scale=0.7;
zombie2.visible=false;

zombie3= createSprite(120,300,30,80);
zombie3.addImage(zombie3Img)
zombie3.scale=0.8;
zombie3.visible=false;

zombie4= createSprite(120,300,30,80);
zombie4.addImage(zombie4Img);
zombie4.scale=0.7;
zombie4.visible=false;

pillager= createSprite(120,300,30,80);
pillager.addImage(pillagerImg)    
pillager.scale=0.7;
pillager.visible=false;

ravager= createSprite(120,300,30,80);
ravager.addImage(ravagerImg);
ravager.scale=0.7;
ravager.visible=false;

ravager2= createSprite(120,300,30,80);
ravager2.addImage(ravager2Img);
ravager2.scale=0.7;
ravager2.visible=false;

invisibleGround = createSprite(450,550,900,20);
invisibleGround.visible=false;
//creating groups
EnemysGroup = createGroup();

}

//draw function

function draw(){
background(bgImg);

spawnEnemys();


textSize(30);
fill("red");
text("Score: " + score, 400, 75);


//spawnZombies();

if(keyDown("RIGHT_ARROW")){
  alex.x = alex.x + 4;
}
if(keyDown("LEFT_ARROW")){
  alex.x = alex.x - 4;
}
if(keyDown("UP_ARROW") && alex.y>=450){
  alex.velocityY = alex.velocityY - 2;
}
alex.velocityY = alex.velocityY + 0.5;

//console.log(alex.y);
 if(keyDown("space")){
 // killSound.play();
 }

 alex.collide(invisibleGround);



 if(alex.isTouching(EnemysGroup)){
   EnemysGroup.destroyEach();
   score = score + 10;
 
}

drawSprites();

}
function spawnEnemys(){
  if(frameCount % 200 === 0){

    var enemy = createSprite(950,500,30,70);

    enemy.velocityX = -2;

    var randomNum = Math.round(random(1,7));

    switch(randomNum){
        case 1: enemy.addImage(zombie1Img);
        break;
        case 2: enemy.addImage(zombie2Img);
        break;
        case 3: enemy.addImage(zombie3Img);        
        break;
        case 4: enemy.addImage(zombie4Img);
        break;
        case 5: enemy.addImage(pillagerImg);
        break;
        case 6: enemy.addImage(ravagerImg);
        break;
        case 7: enemy.addImage(ravager2Img);
        break;
        default: break;
    }
    
    enemy.scale = 0.4;
    enemy.lifetime = 600;
    EnemysGroup.add(enemy);
 }
}

