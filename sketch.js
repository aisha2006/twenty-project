var car,wall;
var speed,weight;


function setup() {

  createCanvas(1600,400);
 

  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50,200,100,50);
  car.velocityX=speed;
  
  
  wall=createSprite(1000,200,60,height/2);
}

function draw() {
  background(255,255,255);  

    if(wall.x-car.x < (wall.width+car.width)/2){
      var deformation=0.5*weight*speed*speed/22500;
      car.velocityX=0;
    
    if (deformation<100){
      car.shapeColor=color("green");
    }

    if(deformation<180 && deformation>100){
      car.shapeColor=color("yellow");
    }

    if(deformation>180){
      car.shapeColor=color("red");
    }
  }
  

  drawSprites();
}