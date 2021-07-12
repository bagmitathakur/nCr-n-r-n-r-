var Balloon,balloonImage1,balloonImage2;
// create database and position variable here
var database,position;

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  Balloon=createSprite(250,450,150,150);
  Balloon.addAnimation("hotAirBalloon",balloonImage1);
  Balloon.scale=0.5;

  var balloonPos=database.ref('balloon/position');
  balloonPos.on("value",readPosition,showError);


  textSize(20); 
}




// function to display UI


function readPosition(data){
  position=data.val();

balloonPos.x=position.x;
balloonPos.y=position.y;






}








function draw() {
  background(bg);
if(position!==undefined){ 
  if(keyDown(LEFT_ARROW)){
    Balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in left direction
    wPos(-1,0);
  }
  else if(keyDown(RIGHT_ARROW)){
    Balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in right direction
    wPos(1,0);
  }
  else if(keyDown(UP_ARROW)){
    Balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in up direction
    wPos(0,-1)
  }
  else if(keyDown(DOWN_ARROW)){
    Balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in down direction
    writePosition(0,1);
  }




  drawSprites();}
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}


function showError(){
  console.log("error in writing to the database");

}
function writePosition(x,y){


  database.ref('balloon/position').set({
    'x':position.x+x,
    'y':position.y+y
    


})
}

function update(balloonPos){

  balloonPos=database.ref('balloon/position');
  balloonPos.on("value",readPosition,showError);
 balloonPos= data.val();
  

 


}
