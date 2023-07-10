//Actor code

let xActor = 85;
let yActor = 366;
let actorSpeed = 3;
let collided = false;
let score = 0;

function showActor(){
  image(actorImage, xActor, yActor, 30, 30);
  //print(yActor);
}

function moveActor(){
  if (keyIsDown(UP_ARROW)){
    yActor -= actorSpeed;
  }
  if (keyIsDown(DOWN_ARROW)){
    yActor += actorSpeed;
  }
  /*
  if (keyIsDown(LEFT_ARROW)){
    xActor -= actorSpeed;
  }
  if (keyIsDown(RIGHT_ARROW)){
    xActor += actorSpeed;
  }
  */
  yActor = constrain(yActor, 3, height-34);
}

function actorStartPosition(){
  yActor = 366;
}

function detectCollision(){
  for (let i = 0; i < carImage.length; i++){
    collided = collideRectCircle(xCars[i], yCars[i], widthCar, heightCar, xActor, yActor, 15);
    if (collided){
      if (scoreGreaterZero()){
        score -= 1;
      }
      actorStartPosition();
      collisionSound.play();
    }
  }
}

function showScore(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60));
  text(score, width/5, 27);
}

function makePoints(){
  if (yActor < 15){
    score += 1;
    actorStartPosition();
    scoreSound.play();
  }
}

function scoreGreaterZero(){
  return score > 0;
}