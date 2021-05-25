
var asteroid1 ,asteroid2 , asteroid3 , asteroidGroup ;
var astronaut  ,astronautimg
var asteroidimg , asteroidimg2 ,bgimg , alienGroup
var alien; 
var gameState = 0 ;
var earth , earthImg , alienimg
var score = 0 ; 
var gun  , gunimg;

function preload(){
 
 astronautimg = loadImage ("astronaut.png")
asteroidimg = loadImage("asteroid2.png");
 bgimg = loadImage("bg.jpeg")
 earthImg = loadImage("earth.png");
alienimg = loadImage("alien2.png");
gunimg = loadImage("gun.png")
}


function setup() {
	createCanvas(800, 700);
 
  astronaut  = createSprite(200,240, 50 , 50 );
  astronaut.addImage(astronautimg);

  astronaut.scale = 0.3
 asteroidGroup = new Group ();
 alienGroup = new Group()
 gunGroup = new Group()
 earth = createSprite (400 , 750 , 500 ,600)
 earth.addImage(earthImg)
 earth.scale = 0.3


}


function draw() {

  background(bgimg);
  
 
  if (gameState === 0 ){
    text ("press space key to start the game " ,400 ,400 );
    if (keyDown("space")){
      gameState = 1 ; 
      
    }
    }
    else
   if (gameState === 1 ){
    

  Asteroids(50 ,50);
  aliens();
  guns();
if(astronaut.x > 0 && astronaut.x < 800 && astronaut.y > 0 && astronaut.y < 400  ){
  if(keyDown("up")){

    astronaut.y -= 10 
  
  }
  if(keyDown("down")){
      
    astronaut.y +=10 
   
   
  }
  if(keyDown("left")){
    astronaut.x -= 10 
 
  
  }

  if(keyDown("right")){
    astronaut.x += 10 

  
    
  }
}

    // earth = createSprite (400 , 650 , 200 ,200)
  //  earth.addImage(earthimg)
  // for(var i = 0 ; i<asteroidGroup.length ; i++){
  //   if (astronaut.isTouching(asteroidGroup[i]));
  //     asteroidGroup[i].destroy();
  //     asteroidGroup.splice(i,1)

  //     }
  textSize(20)
        stroke(25)
  fill("white")
  text("score :" + score , 50 ,50  )
  if(astronaut.isTouching(asteroidGroup)){
    asteroid.destroy();
    score +=1
  }

  if(astronaut.isTouching(alienGroup)){
    alien.destroy();
    score +=3
  }

  if(astronaut.isTouching(gunGroup)){
    alien.destroy();
    asteroid.destroy();
  }
if(score === 5 ){
  textSize(35)
  stroke(25)
fill("white")
  text("good job!! " , 200 , 100 )


}

    if(asteroidGroup.isTouching(earth)){
      gameState = 3 ; 
  
    }

    if(alienGroup.isTouching(earth)){
      gameState = 3 ; 
  
    }

  drawSprites();
   }
   else if (gameState === 3){
    textSize(40)
    stroke(25)
fill("white")
    text("mission failed" , 400 , 400);
   }
   if(score === 10 ){

    gameState === 4 
      textSize(35)
     stroke(25)
   fill("white")
     text("you have saved the earth!! " , 200 , 100 )
    


  }
}


