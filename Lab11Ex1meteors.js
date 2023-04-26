/*
Recreating the game:

//have a setup function
function setup(){
createCanvas(705, 625);
}

//have a draw function
function draw(){
background (0);
}

//create a function for the ship
function addShip(x, y, size){
push();
scale(size);
translate(x, y);
triangle(30, 75, 58, 20, 86, 75);
pop();
}

//create a function for the projectile

//create a class for asteroids
class addAsteroids {
constructor (asteroid, x, y){
this.asteroid = asteroid;
this.x = x;
this.y = y;
  }
}

//make the asteroids move randomly
//make asteroids different shapes and sizes
//make asteroids respawn if they go off the canvas
//create a collision between the asteroids and the projectiles
if projectile collides with asteroid, asteroid splits into two smaller asteroids
//create a collision bewteen the ship and the asteroids
is ship collides with asteroid, display "oops!" in the console

//assign movement to arrow keys
make the UP arrow key move the ship in the direction it is pointing toward
make the LEFT and RIGHT arrow keys rotate the ship in their respective directions, LEFT arrow rotates ship to the left and RIGHT arrow rotates ship to the right

//assign keyPressed function to the SPACE key
use this function to launch projectiles from the front of the ship when the space bar is pressed


-----------------------------
Gameplay Improvements:
1. Impliment a score system
2. Impliment a health bar
3. Impliment a timer counting down system to create a losing scenario
4. Create a way to give more time, ex. if a certain kind of meteor is hit additional time is given
5. The longer the game goes on, the more difficult it should get to find the time increasing meteor
6. Add a collision between the ship and the meteor that will decrease the health bar
7. add a scoreboard to display when round is over/when timer reaches zero

Graphical Improvements:
1. Give the meteors color
2. Give meteors that increase time a different color to make them stand out
3. Give the ship a more detailed appearance

*/
