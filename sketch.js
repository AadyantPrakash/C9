let box

function setup() {
  createCanvas(600, 500);
  box = createSprite(200,100,50,50)
}

function draw() {
  background(100,210,78);

  //make the box move with the arrow keys
  if(keyIsDown(RIGHT_ARROW)){
    box.x = box.x+5
  }
  if(keyIsDown(LEFT_ARROW)){
    box.x = box.x-5
  }
  if(keyIsDown(UP_ARROW)){
    box.y = box.y-5
  }
if(keyIsDown(DOWN_ARROW)){
box.y = box.y+5
}


  
  drawSprites()
}