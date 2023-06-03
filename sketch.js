var gameState = "wait"
var storybutton, mutebutton, musicbutton, nextbutton, playbutton,restartbutton



function preload(){
    splashimg=loadImage("splashimage.gif")
    }
    
    function setup(){
    createCanvas(windowWidth,windowHeight)

playbutton=createImg("play2.png")
playbutton.position(width/2.5,height-(height/4.8))
playbutton.size(350,200)
    
    }
    
    function draw(){
        if(gameState=="wait"){
    background(splashimg)
}
    
    playbutton.mousePressed(() => {
        gameState = "gamestory"
        playbutton.hide()
       
    })

    if(gameState==="gamestory"){
        background(0)
    }
        
    }