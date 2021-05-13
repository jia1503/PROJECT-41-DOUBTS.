var trackImg, umbrellaObj, maxDrops = 100, dropsArray = [], thunder, dropObj;
var Engine = Matter.Engine;
var World = Matter.World;
var  Events = Matter.Events;
var  Bodies = Matter.Bodies;
function preload(){
    imageOne = loadImage("1.png");
    imageTwo = loadImage("2.png");
    imageThree = loadImage("3.png");
    imageFour = loadImage("4.png");
    
}

function setup(){
   var canvas = createCanvas(300, 800);
   engine = Engine.create();
   world = engine.world;
   umbrellaObj = new Umbrella(150,300);
}

function draw(){
    background(0);
    
    for(var i = 0; i<maxDrops; i++){
        dropsArray.push(new Drop(random(0,300), random(0, 300)));
    }
   Thunder();
   Engine.update(engine);
   drawSprites();
}   

function Thunder(){
    thunder = createSprite(random(50,250), 10);

    rand = Math.round(random(1,4))
    switch(rand){
        case 1 : thunder.addImage(imageOne);
        break;

        case 2 : thunder.addImage(imageTwo);
        break;

        case 3 : thunder.addImage(imageThree);
        break;

        case 4 : thunder.addImage(imageFour);
        break;

        default : break;
    }

    if(frameCount%10 === 0){
        thunder.destroy;
    }
}

