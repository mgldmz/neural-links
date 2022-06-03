var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");
var colorPalette = ["#e6d9cb","#d59f33","#b46d51", "#063630"];

var mouse = {
    x : undefined,
    y : undefined
}

window.addEventListener('mousemove', 
    function(event){
    mouse.x = event.x;
    mouse.y = event.y;        
})

var circlesNum = 200;
var circleArray = [];

for (var i = 0; i< circlesNum;i++ ){
    circleArray.push(new Circle());
}


function animate(){
    requestAnimationFrame(animate);

    c.fillStyle = "white";
    c.fillRect(0,0,window.innerWidth,window.innerHeight);


    for (var i = 0; i< circlesNum;i++ ){
        circleArray[i].move();
        circleArray[i].bounce();
        //circleArray[i].grow();
        
        for (var j = 0; j <circlesNum; j++){
             circleArray[i].connect(circleArray[j]);
        }
        circleArray[i].draw();
        
    }

}


animate();