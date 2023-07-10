//Image preloading

let roadImage;
let car1Image;
let car2Image;
let car3Image;
let actorImage;

//Sounds load

let soundtrack;
let scoreSound;
let collisionSound;

function preload(){
  roadImage = loadImage("Images/estrada.png");
  car1Image = loadImage("Images/carro-1.png");
  car2Image = loadImage("Images/carro-2.png");
  car3Image = loadImage("Images/carro-3.png");
  carImage = [car1Image, car2Image, car3Image, car1Image, car2Image, car3Image];
  actorImage = loadImage("Images/ator-1.png");
  soundtrack = loadSound("Sounds/trilha.mp3");
  scoreSound = loadSound("Sounds/pontos.wav");
  collisionSound = loadSound("Sounds/colidiu.mp3");
}