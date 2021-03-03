
var guy1 , guy2;
 




function setup() {
  createCanvas(800,400);
  guy1 = createSprite(400, 200, 50, 50);
  guy1.shapeColor= "blue";
  guy2 = createSprite(300, 200, 29, 34); 
  guy2.shapeColor= "orange"; 
  
}

function draw() {
  background(328,23,125);  
  drawSprites();
}