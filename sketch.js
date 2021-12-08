var waitImg,logoimg,popimg
var playbutton,homebutton,aboutbutton;
var gameState="wait"

function preload(){
waitImg= loadImage("nine.png")
logoimg= loadImage("logo1.png")
popimg= loadImage("popup.png")
 

}

function setup(){
createCanvas(windowWidth,windowHeight)

logo = createSprite(windowWidth/2,windowHeight/2)
logo.addImage(logoimg)
logo.scale=1.5

play=createButton("play");
play.position(100,100);

about=createButton("about");
about.position(100,200)

home=createButton("home")
home.position(100,300)

popbox=createSprite(windowWidth/2,windowHeight/2)
popbox.addImage(popimg)
popbox.visible=false
popbox.scale=3

}


function draw(){


    if(gameState==="wait"){
    background(waitImg)
popbox.visible=false

}

if(home.mousePressed(()=>{
gameState="wait"
}))

if(about.mousePressed(()=>{
gameState="about" 
}))


if(play.mousePressed(()=>{
    gameState="play" 
    }))
    


if (gameState==="about"){
    popbox.visible = true
}

if (gameState==="play"){
    popbox.visible = false
    background("yellow")
}

drawSprites()
}