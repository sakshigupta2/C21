var fixedRec, movingRec;
var gameObject1, gameObject2, gameObject3, gameObject4;
function setup() {
  createCanvas(1200,800);
  fixedRec = createSprite(500,500,50,80);
  movingRec = createSprite(200,500,50,80);
  fixedRec.shapeColor = "red";
  movingRec.shapeColor = "blue";
  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200,100,50,50);
  gameObject1.shapeColor = "yellow";
  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "red";
  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "blue";
}

function draw() {
  background("black");
  movingRec.x = World.mouseX;
  movingRec.y = World.mouseY;
  if (isTouching(gameObject1, movingRec)){
    gameObject1.shapeColor = "pink";
    movingRec.shapeColor = "grey"; 
  }
  else {
    gameObject1.shapeColor = "green";
    movingRec.shapeColor = "blue";
  }
  drawSprites();
}
function isTouching (object1, object2){
  if (object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object1.height/2 + object2.height/2
    && object2.y - object1.y < object1.height/2 + object2.height/2 ){
    return true;
  }
  else {
   return false;
  }  
}