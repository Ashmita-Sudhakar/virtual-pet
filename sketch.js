var dog,sadDog,happyDog;
var feed,addFood;
var foodObj;

function preload(){
  sadDog=loadImage("Dog.png");
  happyDog=loadImage("happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  ﻿
feed=createButton("Feed the dog"); 
 feed. position (700,95); 
 feed.mousePressed(feedDog);
 addFood=createButton("Add Food");
addFood. position(800,95); 
addFood.mousePressed(addFoods);
  

}

function draw() {
  background(46,139,87);
  drawSprites();
}

//function to read food Stock


function feedDog()


if(foodobj.getFoodstock()<= 0) {
foodobj.updateFoodStock(foodobj.getFoodstock()*0); 
}
else{
foodObj. updateFoodstock (foodobj.getFoodStock()-1);
}
//function to add food in stock
function addFoods(){
foodS++;
foods++; 
database.ref('/').update({
  Food: foods
})

}