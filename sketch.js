var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  fixedRect1= createSprite(600, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
   fixedRect.velocityX=4;
   fixedRect1.velocityX=-4;
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

if( isTouching(fixedRect,movingRect))
  {movingRect.shapeColor="red";
    fixedRect.shapeColor="red";

}
else if( isTouching(fixedRect1,movingRect))
  {movingRect.shapeColor="red";
    fixedRect1.shapeColor="red";
}
else{movingRect.shapeColor="green";
     fixedRect.shapeColor="green";
     fixedRect1.shapeColor="green";
}
bounceBack(fixedRect,fixedRect1)
  drawSprites();

}
