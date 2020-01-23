var ob1,ob2,ob3,ob4;

var frec,mrec;

function setup() {
   createCanvas(800,500);

   frec = createSprite(300,200,50,50);
   frec.shapeColor = "green";
   mrec = createSprite(220,100,50,50);
   mrec.shapeColor = "red";
  ob1 = createSprite(100,100,50,50);
  ob1.shapeColor = "blue";
  ob2 = createSprite(200,100,50,50);
  ob2.shapeColor = "orange";
  ob3 = createSprite(300,100,50,50);
  ob3.shapeColor = "yellow";
  ob4 = createSprite(400,100,50,50);
  ob4.shapeColor = "pink";
}

function draw() {
  background(255,255,255);  

mrec.x = World.mouseX;
mrec.y = World.mouseY;

if (isTouching(mrec,ob2)){
  ob2.shapeColor = "black";
  mrec.shapeColor = "black";
}
else{ 
  ob2.shapeColor = "orange";
  mrec.shapeColor = "red";

}


  drawSprites();
}
function isTouching(object1,object2){
  if (object1.x-object2.x<object1.width/2+object2.width/2
    && object2.x-object1.x<object1.width/2+object2.width/2
    && object1.y-object2.y<object1.height/2+object2.height/2 
    && object2.y-object1.y<object1.height/2+object2.height/2){
      return true;
    
  }
  else{
  return false;
}
 }