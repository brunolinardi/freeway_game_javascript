//Car code

let xCars = [600, 600, 600, 600, 600, 600];
let yCars = [40, 96, 150, 210, 270, 318];
let speedCars = [2, 2.5, 3.2, 5, 3.3, 2.3];
let widthCar = 50;
let heightCar = 40;

function showCar(){
  for (let i = 0; i < carImage.length; i++){
    image(carImage[i], xCars[i], yCars[i], widthCar, heightCar);   
  }
}

function moveCar(){
  for (let i = 0; i < carImage.length; i++){
  xCars[i] -= speedCars[i];
  }
}

function resetCarPosition(){
  for (let i = 0; i < carImage.length; i++){
    if (carOffScreen(xCars[i])){
      xCars[i] = 600;
    }    
  }
}

function carOffScreen(xCars){
  return xCars < -50;
}