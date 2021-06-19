var bgImg;
var cat, catimg1, catimg2;
var mouse, mouseimg1, mouseimg2;

function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    catimg1 = loadAnimation("cat1.png");
    mouseimg1 = loadAnimation("mouse1.png");
    catimg2 = loadAnimation("cat2.png","cat3.png");
    mouseimg2 = loadAnimation("mouse2.png","mouse3.png","mouse4.png");
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(870,720,50,50);
    cat.addAnimation("catRunning",catimg1);
    cat.scale = 0.15;
    
    mouse = createSprite(200,700,50,50);
    mouse.addAnimation("mouseTeasing",mouseimg1);
    mouse.scale=0.15
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.addAnimation("catRunning",catimg2);
        cat.changeAnimation("catRunning")
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here



  if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseimg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
  }

  








}
