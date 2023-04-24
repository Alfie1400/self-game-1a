var bgImg
var bull1, bull2, bull3, bull4, bull5, bull6, bull7, bull8
var bullet,bullet2,bullet3,bullet4
var eggImg
var explodeImg, gameOverImg
var overlay
var retryImg, startImg, titleImg, playImg
var toadImg, toadsImg
var direction = 'right'
var gameState = "start"
var border1,border2,border3,border4


function preload(){
  playImg = loadImage("images/all_project_images/play.png")
  bgImg = loadImage('images/all_project_images/background.png')
 // bullAnimation = loadAnimation ('images/all_project_images/bull1.png','images/all_project_images/bull1b.png','images/all_project_images/bull1c.png','images/all_project_images/bull2.png','images/all_project_images/bull2b.png','images/all_project_images/bull2c.png', 'images/all_project_images/bull3.png','images/all_project_images/bull3b.png','images/all_project_images/bull3c.png',' images/all_project_images/bull4.png','images/all_project_images/bull4b.png','images/all_project_images/bull4c.png', 'images/all_project_images/bull5.png','images/all_project_images/bull5b.png','images/all_project_images/bull5c.png', 'images/all_project_images/bull6.png','images/all_project_images/bull6b.png','images/all_project_images/bull6c.png', 'images/all_project_images/bull7.png','images/all_project_images/bull7b.png', 'images/all_project_images/bull7c.png','images/all_project_images/bull8.png','images/all_project_images/bull8b.png', 'images/all_project_images/bull8c.png')
  bull1 = loadImage("images/all_project_images/bull1b.png")
  bull2 = loadImage("images/all_project_images/bull2b.png")
  bull3 = loadImage("images/all_project_images/bull3b.png")
  bull4 = loadImage("images/all_project_images/bull4b.png")
  bull5 = loadImage("images/all_project_images/bull5b.png")
  bull6 = loadImage("images/all_project_images/bull6b.png")
  bull7 = loadImage("images/all_project_images/bull7b.png")
  bull8 = loadImage("images/all_project_images/bull8b.png")
  bulletImg = loadImage('images/all_project_images/bullet.png')
  bullet2Img = loadImage('images/all_project_images/bullet2.png')
  bullet3Img = loadImage('images/all_project_images/bullet3.png')
  bullet4Img = loadImage('images/all_project_images/bullet4.png')
  eggImg = loadImage('images/all_project_images/egg.png')
  explodeImg = loadImage('images/all_project_images/explode.png')
  gameOverImg = loadImage('images/all_project_images/gameOver.png')
  overlaySprite = loadImage('images/all_project_images/overlay.png')
  retryImg = loadImage('images/all_project_images/retry.png')
  startImg = loadImage('images/all_project_images/start.png')
  titleImg = loadImage('images/all_project_images/title.png')
  toadImg = loadImage('images/all_project_images/toad.png')
} 


function setup() {
  createCanvas(windowWidth,windowHeight);
  bg=createSprite(width/2,height/2,width,height)
  bg.addImage(bgImg)

  overlay = createSprite(width/2,height/3+50,width,50)
  overlay.addImage(overlaySprite)

  start1 = createSprite(width/2,height/2+50)
  start1.addImage(startImg)
  start1.scale=0.7

  start = createSprite(width/2+2,height/2-15)
  start.addImage(playImg)
  start.scale=0.35

  title = createSprite(width/2,height/2+90)
  title.addImage(titleImg)
  title.scale=0.7

  bull =createSprite(width/2,height/2)
  bull.addImage(bull6)
  bull.scale=0.5
  bull.visible=false


  bullet = createSprite(3000,3000);
  bullet.addImage(bulletImg);
  bullet.scale = 0.3;

  
  bullet2 = createSprite(3000,3000);
  bullet2.addImage(bullet2Img);
  bullet2.scale = 0.3;
  
  bullet3 = createSprite(3000,3000);
  bullet3.addImage(bullet3Img);
  bullet3.scale = 0.3;
  
  bullet4 = createSprite(3000,3000);
  bullet4.addImage(bullet4Img);
  bullet4.scale = 0.3;


  border1 = createSprite(70,height,20,1500)
  border1.visible=false
  border2 = createSprite(1220,height,10,1500)
  border2.visible=false
  border3 = createSprite(width,1270,3000,1260)
  border3.visible=false
  border4 = createSprite(width,100,3000,10)
  border4.visible=false


  toadsGroup=new Group()
  eggsGroup=new Group()

  for(var i=1;i<=4;i++){
    egg = createSprite(50,60+120*i)
    egg.addImage(eggImg)
    egg.scale=0.8
    eggsGroup.add(egg)
    egg.visible=false
  }
   
}

function draw() {
  if(mousePressedOver(start)){
    gameState="play"
  }


  if(gameState=="play"){
   start1.visible=false
   start.visible=false
   title.visible=false
   overlay.visible=false  
   eggsGroup.setVisibleEach(true)
   bull.visible=true
    if(keyDown(UP_ARROW)){
    bull.y+=-3
    bull.addImage(bull8)
    direction = 'up'
    }
    if(keyDown(DOWN_ARROW)){
    bull.y+=3
    bull.addImage(bull4)
    direction = 'down'
    }
    if(keyDown(RIGHT_ARROW)){
    bull.x+=3
    bull.addImage(bull6)
    direction = 'right'
   
    }
    if(keyDown(LEFT_ARROW)){
    bull.x+=-3
    bull.addImage(bull2)
    direction = 'left'
    
   }
    if(keyDown("space") && direction === 'right'){
    bullet.x=bull.x
    bullet.y=bull.y
    bullet.velocityX=12
    }

    if(keyDown("space") && direction === 'left'){
    bullet2.x=bull.x
    bullet2.y=bull.y
    bullet2.velocityX=-12
    }

    if(keyDown("space") && direction === 'up'){
    bullet3.x=bull.x
    bullet3.y=bull.y
    bullet3.velocityY=-12
    }

    if(keyDown("space") && direction === 'down'){
    bullet4.x=bull.x
    bullet4.y=bull.y
    bullet4.velocityY=12
    }
  
    if(bull.isTouching(border1)){
      bull.x= bull.x+3
    }
    if(bull.isTouching(border2)){
      bull.x= bull.x-3
    }
    if(bull.isTouching(border3)){
      bull.y= bull.y-3
    }
    if(bull.isTouching(border4)){
      bull.y= bull.y+3
    }
    
  }

  spawnToad()
  

  background("white");  
  drawSprites();
  
}


function spawnToad(){
  if(frameCount%150==0){
    toad=createSprite(width+200,random(height/2-120,height/2+300))
    toad.addImage(toadImg)
    toad.scale=0.45
    toad.velocityX=-3
    toad.collide(eggsGroup)
  }
  
}

function eggHit(toad,egg){
  console.log(egg.y)
  console.log("working")
  egg.remove()
}

