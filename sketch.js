var fr1,mr1
var go1,go2,go3,go4
function setup(){
createCanvas(1200,800)  
fr1=createSprite(200,200,50,80)  
mr1=createSprite(400,200,80,30)
fr1.shapeColor="green"
mr1.shapeColor="green"
fr1.debug=true
mr1.debug=true 

go1=createSprite(100,100,50,50) 
go1.shapeColor="green"
go2=createSprite(200,100,50,50)
go2.shapeColor="green"
go3=createSprite(300,100,50,50)
go3.shapeColor="green"
go4=createSprite(400,100,50,50)
go4.shapeColor="green"
} 

function draw(){
background(0,0,0) 
mr1.x=World.mouseX
mr1.y=World.mouseY
if(isTouching(mr1,go4)){
    return true
}
drawSprites()
}
  function isTouching(o1,o2){
    if (o1.x-o2.x<o2.width/2+o1.width/2 && o2.x-o1.x<o2.width/2+o1.width/2 && o1.y-o2.y<o2.height/2+o1.height/2 && o2.y-o1.y<o1.height/2+o1.height/2){
        o1.shapeColor="red"
        o2.shapeColor="red"
        }  
        else{
        o1.shapeColor="green"
        o2.shapeColor="green" 
        }  
  }
  