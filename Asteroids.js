function Asteroids( width, height ){
           if(frameCount% 70 === 0){
            asteroid = createSprite( random(50,750),0, width, height);
            asteroid.velocityY = 4
           asteroid.addImage(asteroidimg)
           asteroid.scale = 0.15
           asteroidGroup.push(asteroid)
           }
      
 
    }
 function aliens(){
        if(frameCount%200 === 0){
               alien = createSprite(0, random(0,400) , 50 ,50)
               alien.velocityX = 1
              alien.addImage(alienimg)
              alien.scale = 0.25
              alienGroup.push(alien)
        }
 }

 function guns(){
       if(frameCount%150 === 0){
             gun = createSprite(random(50,750),0 , 50 ,50)
             gun.velocityY = 2 
            gun.addImage(gunimg)
            gun.scale = 0.20
            gunGroup.push(gun)
       }
}