var drawing =[];

function setup(){
    createCanvas(1200,800);
     
   // canvas.mousePressed(startPath);
   // canvas.mouseReleased(endPath);
    //var clearButton = select('#clearButton');
   //clearButton.mousePressed(clearCanvas);
}

function draw(){
   
 //background();
ellipse(mouseX,mouseY,20,20);
line(mouseX,mouseY,20,20);
rect(mouseX,mouseY,20,20);
/*if(mouseIsPressed){
    var point = {
        x:mouseX,
        y:mouseY
}
    drawing.push(point);
}
}*/
/*function clearDrawing(){
    drawing = [];
}*/
}