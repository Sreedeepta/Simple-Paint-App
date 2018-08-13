
// commnets
var canvas = document.getElementById("mycanvas");
var c= canvas.getContext('2d');

canvas.width = window.innerWidth-300;
canvas.height = window.innerHeight-50;

var circles=[];
var colors = ['red','yellow','green','violet','purple','orange','pink'];   // random colors
var x1,y1;


function add(event){

   var x = event.x; 
   var y =event.y;
   var radius = Math.floor(Math.sqrt(Math.pow((x-x1),2)+ Math.pow((y-y1),2)));

var cr=new Circle(x,y,radius/2);

circles.push(cr);


for(var i=0; i<circles.length;i++){
if(radius >0){
circles[i].draw();
}
}

function func1 (event) {
 x1 = event.x;
 y1 = event.y;

}

function Circle(x,y,radius){
this.x = x;
this.y =y;
this.radius=radius;
var col = colors[Math.floor(Math.random()*7)];
this.draw=function (){
  c.beginPath();
 c.arc(this.x,this.y,this.radius,0,2*Math.PI);
 c.fillStyle = col;
 c.fill();
}


}
}

function del(e){

c.clearRect(0,0,canvas.width,canvas.height);
circles.pop();
circles.pop();
    var newcircles = [];
    var count=0;
   for(var i=circles.length-1; i>=0;i--){

         var radius2 = Math.floor(Math.sqrt(Math.pow((e.x-circles[i].x),2)+ Math.pow((e.y-circles[i].y),2)));
     if(radius2 < circles[i].radius){
       if(count>0){
         newcircles.push(circles[i]);
         continue;
       }
       count++;
     }
     else{
       newcircles.push(circles[i]);
     }
}
    circles = newcircles.filter((t)=> t);
  for(var i=circles.length-1; i>=0;i--){

  circles[i].draw();

  }

}

canvas.addEventListener('mousedown',function(event){
  x1 = event.x;
  y1 = event.y;
});
canvas.addEventListener('mouseup',add);
canvas.addEventListener('dblclick',del);
canvas.addEventListener('click',function(e){

var flag = false;
for(var i=0; i<circles.length; i++){
  var radius3 = Math.floor(Math.sqrt(Math.pow((e.x-circles[i].x),2)+ Math.pow((e.y-circles[i].y),2)));
if(radius3 < circles[i].radius){
      flag = true;

}

}
if (flag) {
  console.log('hit');
  document.getElementById('text').innerHTML = 'Hit !';

}
else {
  console.log('miss');
  document.getElementById('text').innerHTML = 'Miss !';

}

});

document.getElementById('bt1').addEventListener('click',function(){

c.clearRect(0,0,canvas.width,canvas.height);
circles=[];

})

