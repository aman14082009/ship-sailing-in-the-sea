var ship, ship_sailing;
var sea, seaImage;

function preload(){
 ship_sailing = loadAnimation("ship-1.png","ship-2.png");
 seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200,400,400);
  sea.addImage("sea_image", seaImage);
  sea.scale = 0.2;
  sea.velocityX = 2;
  ship = createSprite(150,200,100,50);
  ship.addAnimation("sailing", ship_sailing);
  ship.scale = 0.2;
  ship.x = 150
  
}

function draw() {
  background("white");
  if (sea.x === 350) {
      sea.x = 200;
  }
  
  drawSprites();

  
 
}