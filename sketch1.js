var fixedRec, movingRec;
function setup() {
  createCanvas(1200,800);
  fixedRec = createSprite(400,100,50,80);
  movingRec = createSprite(400,800,50,80);
  fixedRec.shapeColor = "red";
  movingRec.shapeColor = "blue";
  movingRec.velocityY = -4;
  fixedRec.velocityY = 4;
}

function draw() {
  background("black");

  bounceOff (movingRec, fixedRec);
   
  drawSprites();
}
function bounceOff (object1, object2){
  if (object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2){
      object1.velocityX = object1.velocityX* (-1);
      object2.velocityX = object2.velocityX* (-1);
    }
  if (object1.y - object2.y < object1.height/2 + object2.height/2
    && object2.y - object1.y < object1.height/2 + object2.height/2 ){
      object1.velocityY = object1.velocityY* (-1);
      object2.velocityY = object2.velocityY* (-1); 
  } 
}