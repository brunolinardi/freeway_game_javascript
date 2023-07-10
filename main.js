function setup() {
  createCanvas(500, 400);
  soundtrack.loop();
}

function draw() {
  background(roadImage);
  showActor();
  showCar();
  showScore();
  moveCar();
  moveActor();
  resetCarPosition();
  detectCollision();
  makePoints();
}
