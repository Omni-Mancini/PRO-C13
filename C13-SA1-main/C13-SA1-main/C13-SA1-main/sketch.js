var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud, cloudImg;



var score;


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
 cloudImg = loadImage("cloud.png");
  
}

function setup() {

  createCanvas(600,200);
  
  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //crie um sprite ground (solo)
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //crie um solo invisível
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //gerar números aleatórios
  var rand =  Math.round(random(1,100));
  console.log(rand);

  
}

function draw() {
  //definir cor de fundo
  background(180);
  
  //console.log(trex.y)
  
  
  
  // pular quando tecla espaço for pressionada
  if(keyDown("space")&& trex.isTouching(ground)) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8;
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //impedir que o trex caia
  trex.collide(invisibleGround);
  
  //gerar as nuvens
  spawnClouds();
  //console.log(frameCount);
  
  drawSprites();
}

//função para gerar as nuvens
function spawnClouds(){
  // escreva seu código aqui
  if(frameCount % 60 == 0){
    
    cloud=createSprite(600,(random(1, 125)),40,10);
    cloud.velocityX=-3;
    cloud.addImage("cloud", cloudImg);
    cloud.scale=0.5;
  }
}



