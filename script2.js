
  
  var sound = new Howl({
  src: ['sond.mp3'],
   autoplay: false
  }) 
var setc=setInterval(function(){
let colorvvx= ["#17202A", "#34495E", "#641E16", "#2E4053", "#273746","#333", "#fff","#CECE42","#FF1493" , "#B22222","#34495e"]
  let randomColorx=Math.floor(Math.random()*colorvvx.length);
   let givecc = colorvvx[randomColorx];
document.getElementById("scor").style.color=givecc
},3000)

let  score

let modal =document.querySelector("#modal") 
let span=document.getElementsByClassName("close")[0]
let vtt=0
let play=document.querySelector("#play")
let besinf=document.querySelector("besinf")
let scinf=document.querySelector("#scinf")

let tima=0
 let Hightsc =0

let dy
let dy1
let dy2
let dy3
let dy4
let dy5




let bc
   
let xc
   let yc
  let randomColor
  let colorPick
let colortext="#333"
let colortext1="#fff"
let colortext2="#CECE42"
let colortext3="#FF1493"
let colortext4="#B22222"
let colortext5="#34495e"

let scor=0;
 let currentBestscore= localStorage["highScore"]
 let actualscore=scor
  let timeur=0;
   let time=0
  let canvas=document.querySelector("canvas");

   canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;

  
  
   
     if (typeof localStorage["highScore"] !== 'undefined') {
 document.getElementById("bscor").innerHTML= localStorage["highScore"]
  
}
else  if (localStorage["highScore"] = 0){
   
    document.getElementById("bscor").innerHTML="0"
}
         
  
 

  score= document.querySelector("#scor");

 let message = document.querySelector("#Message");


 let c= canvas.getContext("2d");
 
  let color=["#333", "#fff","#CECE42","#FF1493" , "#B22222","#34495e" ]


   let start= setInterval(function(){
  time= time +1;
 if (time==1) {
  document.querySelector("#Message").innerHTML="Ready";
 }
 if (time==2) {
 document.querySelector("#Message").innerHTML="Go"; 

 }
 if (time==3) {
 
   clearInterval(start);
   colors()
 }
       
   },500)

   addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight

 
})
   play.onclick=function(){
    location.reload();
   }
span.onclick=function(){
  window.history.back();
}
function colors(){
  randomColor=Math.floor(Math.random()*color.length)
  
   colorPick=color[randomColor];
   message.style.color=colorPick;
  
 let m1=message.textContent="Black"
let m2=message.textContent="White"
let m3= message.textContent="Yellow"
let m4=message.textContent="Pink"
let m5=message.textContent="Red"
let m6=message.textContent="Blue"

 message.style.color=colorPick;
 if (colorPick==colortext) {
message.textContent=m1

 }
 if (colorPick==colortext1) {
message.textContent=m2

 }
 if (colorPick==colortext2) {
message.textContent=m3

 }
 if (colorPick==colortext3) {
message.textContent=m4

 }
 if (colorPick==colortext4) {
message.textContent=m5

 }
 if (colorPick==colortext5) {
message.textContent=m6

 }

 

 }

    

  

 
   function showCoordinates(event) {
   xc = event.touches[0].clientX;
   yc = event.touches[0].clientY;
  console.log(xc + ", " + yc)
}
function myFunction(){
   xc=0;
   yc=0
 }
if (modal.style.display="block"==true) {
 
}

  function game(){
 

let dy=1;
let y=0;

 let mousex
 let mousey
  


let colorcircle=["#333", "#fff","#CECE42","#FF1493" , "#B22222","#34495e" ];
function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function getDistance(x1,y1,x2,y2){
  let xdistance = x2 -x1;
  let ydistance = y2 - y1;
  return Math.sqrt(Math.pow(xdistance, 2)+ Math.pow(ydistance, 2))
}
 

 Circle=function(x, y, dx, dy, x1, y1, dx1, dy1,x2, y2, dx2, dy2, x3, y3, dx3, dy3,x4, y4, dx4, dy4, x5, y5, dx5, dy5, radius,radius1,radius2,radius3,radius4,radius5){

   this.x=x;
   this.y=y;
   this.dx=dx;
   this.dy=dy;
    this.radius=radius
    this.x1=x1;
   this.y1=y1;
   this.dx1=dx1;
   this.dy1=dy1;
    this.radius1=radius1;
      this.x2=x2;
   this.y2=y2;
   this.dx2=dx2;
   this.dy2=dy2;
    this.radius2=radius2;
    this.x3=x3;
   this.y3=y3;
   this.dx3=dx3;
   this.dy3=dy3;
    this.radius3=radius3;
    this.x4=x4;
   this.y4=y4;
   this.dx4=dx4;
   this.dy4=dy4;
    this.radius4=radius4;
    this.x5=x5;
   this.y5=y5;
   this.dx5=dx5;
   this.dy5=dy5;
    this.radius5=radius;
  
    let =color0="#333"
      let =color1="#fff"
      let =  color2="#CECE42"
        let =  color3="#FF1493"
         let = color4="#B22222"
         let =   color5="#34495e"
    



this.draw=function(){
 
 c.beginPath();
c.arc(this.x, this.y, this.radius, 0 , Math.PI * 2, false)
c.fillStyle=color0
c.strokeStyle=color0
c.stroke()
c.fill()
c.closePath()



c.beginPath();
c.arc(this.x1, this.y1, this.radius1, 0 , Math.PI * 2, false)
c.fillStyle= color1
c.strokeStyle=color1
c.stroke()
c.fill();


c.beginPath();
c.arc(this.x2, this.y2, this.radius2, 0 , Math.PI * 2, false)
c.fillStyle= color2
c.strokeStyle=color2
c.stroke()
c.fill();

c.beginPath();
c.arc(this.x3, this.y3, this.radius3, 0 , Math.PI * 2, false)
c.fillStyle= color3
c.strokeStyle=color3
c.stroke()
c.fill();

c.beginPath();
c.arc(this.x4, this.y4, this.radius4, 0 , Math.PI * 2, false)
c.fillStyle= color4
c.strokeStyle=color4
c.stroke()
c.fill();

c.beginPath();
c.arc(this.x5, this.y5, this.radius5, 0 , Math.PI * 2, false)
c.fillStyle=color5
c.strokeStyle=color5
c.stroke()
c.fill()


}
     this.update=function(){

      

let c1=this.radius
let c2=this.radius1
let c3=this.radius2
let c4=this.radius3
let c5=this.radius4
let c6=this.radius5



  this.y+=this.dy  
  this.y1+=this.dy1
  this.y2+=this.dy2  
  this.y3+=this.dy3
  this.y4+=this.dy4  
  this.y5+=this.dy5
if (this.y+ c1>innerHeight +70 && color0==colorPick){
document.querySelector("#besinf").innerHTML=localStorage["highScore"]
document.querySelector("#scinf").innerHTML=scor
modal.style.display="block"
canvas.style.display="none";
document.getElementById("scor").style.display="none";
document.getElementById("info").style.display="none";
message.textContent="Try again"
clearInterval(again)

} 
if (this.y1+ c2>innerHeight  +70 && color1==colorPick){
document.querySelector("#besinf").innerHTML=localStorage["highScore"]
document.querySelector("#scinf").innerHTML=scor
modal.style.display="block"
canvas.style.display="none";
document.getElementById("scor").style.display="none";
document.getElementById("info").style.display="none";
message.textContent="Try again"
clearInterval(again)
} 
if (this.y2+ c3>innerHeight  +70 && color2==colorPick){
document.querySelector("#besinf").innerHTML=localStorage["highScore"]
document.querySelector("#scinf").innerHTML=scor
modal.style.display="block"
canvas.style.display="none";
document.getElementById("scor").style.display="none";
document.getElementById("info").style.display="none";
message.textContent="Try again"
clearInterval(again)
} 
if (this.y3+ c4>innerHeight  +70 && color3==colorPick){
document.querySelector("#besinf").innerHTML=localStorage["highScore"]
document.querySelector("#scinf").innerHTML=scor
modal.style.display="block"
canvas.style.display="none";
document.getElementById("scor").style.display="none";
document.getElementById("info").style.display="none";
message.textContent="Try again"
clearInterval(again)
} 
if (this.y4+ c5>innerHeight  +70 && color4==colorPick){
document.querySelector("#besinf").innerHTML=localStorage["highScore"]
document.querySelector("#scinf").innerHTML=scor
modal.style.display="block"
canvas.style.display="none";
document.getElementById("scor").style.display="none";
document.getElementById("info").style.display="none";
message.textContent="Try again"
clearInterval(again)
} 
if (this.y5+ c6>innerHeight  +70 && color5==colorPick){
document.querySelector("#besinf").innerHTML=localStorage["highScore"]
document.querySelector("#scinf").innerHTML=scor
modal.style.display="block"
canvas.style.display="none";
document.getElementById("scor").style.display="none";
document.getElementById("info").style.display="none";
message.textContent="Try again"
clearInterval(again)
} 





    if (this.y + this.radius >innerHeight +70||this.x + this.radius >innerWidth+70) {
 this.x = Math.random() * (innerWidth - radius * 2) + radius;
         this.y=-35
     
  }else if(getDistance(this.x,this.y, this.x1,this.y1)<this.radius+this.radius1){
 this.x= Math.random() * (innerWidth - radius * 2) + radius;
  }else if(getDistance(this.x,this.y, this.x2,this.y2)<this.radius+this.radius2){
    this.x= Math.random() * (innerWidth - radius * 2) + radius;
  }else if(getDistance(this.x,this.y, this.x3,this.y3)<this.radius+this.radius3){
  this.x= Math.random() * (innerWidth - radius * 2) + radius;
  }
  else if(getDistance(this.x,this.y, this.x4,this.y4)<this.radius+this.radius4){
  this.x= Math.random() * (innerWidth - radius * 2) + radius;
  }
  else if(getDistance(this.x,this.y, this.x5,this.y5)<this.radius+this.radius5){
  this.x= Math.random() * (innerWidth - radius * 2) + radius;
  }
  
  
  




  if (this.y1 + this.radius1 >innerHeight+70||this.x1 + this.radius1 >innerWidth+70) {
 this.x = Math.random() * (innerWidth - radius1 * 2) + radius1;
         this.y1=-35
 
  } else if(getDistance(this.x1,this.y1, this.x,this.y)<this.radius1+this.radius){
   this.x1= Math.random() * (innerWidth - radius1 * 2) + radius1;
  } else if(getDistance(this.x1,this.y1, this.x2,this.y2)<this.radius1+this.radius2){
  this.x1= Math.random() * (innerWidth - radius1 * 2) + radius1;
  } else if(getDistance(this.x1,this.y1, this.x3,this.y3)<this.radius1+this.radius3){
    this.x1= Math.random() * (innerWidth - radius1 * 2) + radius1;
  }
  else if(getDistance(this.x1,this.y1, this.x5,this.y5)<this.radius1+this.radius5){
    this.x1= Math.random() * (innerWidth - radius1 * 2) + radius1;
  }
  else if(getDistance(this.x1,this.y1, this.x4,this.y4)<this.radius1+this.radius4){
    this.x1= Math.random() * (innerWidth - radius1 * 2) + radius1;
  }

     if (this.y2 + this.radius2 >innerHeight+70||this.x2 + this.radius2 >innerWidth+70) {
 this.x2 = Math.random() * (innerWidth - radius2 * 2) + radius2;
         this.y2=-35
 
  }else if(getDistance(this.x2,this.y2, this.x,this.y)<this.radius2+this.radius){
    this.x2= Math.random() * (innerWidth - radius2 * 2) + radius2;
  }else if(getDistance(this.x2,this.y2, this.x1,this.y1)<this.radius2+this.radius1){
   this.x2= Math.random() * (innerWidth - radius2 * 2) + radius2;
  }else if(getDistance(this.x2,this.y2, this.x3,this.y3)<this.radius2+this.radius3){
    this.x2= Math.random() * (innerWidth - radius2 * 2) + radius2;
  }else if(getDistance(this.x2,this.y2, this.x4,this.y4)<this.radius2+this.radius4){
    this.x2= Math.random() * (innerWidth - radius2 * 2) + radius2;
  }
  else if(getDistance(this.x2,this.y2, this.x5,this.y5)<this.radius2+this.radius5){
    this.x2= Math.random() * (innerWidth - radius2 * 2) + radius2;
  }




     
     if (this.y3 + this.radius3 >innerHeight+70||this.x3 + this.radius3 >innerWidth+70) {
 this.x3 = Math.random() * (innerWidth - radius3 * 2) + radius3;
         this.y3=-35
 
  }else if(getDistance(this.x3,this.y3, this.x,this.y)<this.radius3+this.radius){
    this.x3= Math.random() * (innerWidth - radius3 * 2) + radius3;
  }else if(getDistance(this.x3,this.y3, this.x1,this.y1)<this.radius3+this.radius1){
    this.x3= Math.random() * (innerWidth - radius3 * 2) + radius3;
  }else if(getDistance(this.x3,this.y3, this.x2,this.y2)<this.radius3+this.radius2){
    this.x3= Math.random() * (innerWidth - radius3 * 2) + radius3;
  }else if(getDistance(this.x3,this.y3, this.x5,this.y5)<this.radius3+this.radius5){
    this.x3= Math.random() * (innerWidth - radius3 * 2) + radius3;
  }
  else if(getDistance(this.x3,this.y3, this.x4,this.y4)<this.radius3+this.radius4){
    this.x3= Math.random() * (innerWidth - radius3 * 2) + radius3;
  }


     
     if (this.y4 + this.radius4 >innerHeight+70||this.x4 + this.radius4 >innerWidth+70) {
 this.x4 = Math.random() * (innerWidth - radius4 * 2) + radius4;
         this.y4=-35
 
  }else if(getDistance(this.x4,this.y4, this.x,this.y)<this.radius4+this.radius){
    this.x4= Math.random() * (innerWidth - radius4 * 2) + radius4;
  }else if(getDistance(this.x4,this.y4, this.x1,this.y1)<this.radius4+this.radius1){
    this.x4= Math.random() * (innerWidth - radius5 * 2) + radius4;
  }else if(getDistance(this.x4,this.y4, this.x2,this.y2)<this.radius4+this.radius2){
    this.x4= Math.random() * (innerWidth - radius4 * 2) + radius4;
  }else if(getDistance(this.x4,this.y4, this.x5,this.y5)<this.radius4+this.radius5){
    this.x4= Math.random() * (innerWidth - radius4 * 2) + radius4;
  }
  else if(getDistance(this.x4,this.y4, this.x3,this.y3)<this.radius4+this.radius3){
    this.x4= Math.random() * (innerWidth - radius4 * 2) + radius4;
  }



     
     if (this.y5 + this.radius5 >innerHeight+70||this.x5 + this.radius5 >innerWidth+70) {
 this.x5 = Math.random() * (innerWidth - radius5 * 2) + radius5;
         this.y5=-35
 
  }else if(getDistance(this.x5,this.y5, this.x,this.y)<this.radius5+this.radius){
    this.x5= Math.random() * (innerWidth - radius5 * 2) + radius5;
  }else if(getDistance(this.x5,this.y5, this.x1,this.y1)<this.radius5+this.radius1){
    this.x5= Math.random() * (innerWidth - radius5 * 2) + radius5;
  }else if(getDistance(this.x5,this.y5, this.x2,this.y2)<this.radius5+this.radius2){
    this.x5= Math.random() * (innerWidth - radius5 * 2) + radius5;
  }
  else if(getDistance(this.x5,this.y5, this.x4,this.y4)<this.radius5+this.radius4){
    this.x5= Math.random() * (innerWidth - radius5 * 2) + radius5;
  }
  else if(getDistance(this.x5,this.y5, this.x3,this.y3)<this.radius5+this.radius3){
    this.x5= Math.random() * (innerWidth - radius5 * 2) + radius5;
  }


let rx=this.x;
let ry=this.y;
let rx1=this.x1;
let ry1=this.y1;
let rx2=this.x2;
let ry2=this.y2;
let rx3=this.x3;
let ry3=this.y3;
let rx4=this.x4;
let ry4=this.y4;
let rx5=this.x5;
let ry5=this.y5;

         this.draw();
     
     


    if(getDistance(xc,yc,rx,ry)<35 && color0==colorPick){
 
 this.x=Math.random() * (innerWidth - radius * 2) + radius;
 this.y=-35
  this.radius=35;
   this.dy=(Math.random()*4)+1
scor= scor+1
score.textContent = scor


if (scor > localStorage["highScore"]) {
      localStorage["highScore"] = scor;
    }

    if (typeof localStorage["highScore"] !== 'undefined') {
   document.getElementById("bscor").innerHTML=localStorage["highScore"];
}
  


}  if(getDistance(xc,yc,rx,ry)<35 && color0!==colorPick){
document.querySelector("#besinf").innerHTML=localStorage["highScore"]
document.querySelector("#scinf").innerHTML=scor
modal.style.display="block"
canvas.style.display="none";
document.getElementById("scor").style.display="none";
document.getElementById("info").style.display="none";
message.textContent="Try again"
clearInterval(again)
}
   if(getDistance(xc,yc,rx1,ry1)<35 &&color1==colorPick){
   
 this.x1=Math.random() * (innerWidth - radius * 2) + radius;
 this.y1=-35
  this.radius1=35
  this.dy1=(Math.random()*4)+1

scor= scor+1
score.textContent = scor


if (scor > localStorage["highScore"]) {
      localStorage["highScore"] = scor;
    }

    if (typeof localStorage["highScore"] !== 'undefined') {
   document.getElementById("bscor").innerHTML=localStorage["highScore"];
}
  
   
} if(getDistance(xc,yc,rx1,ry1)<35 && color1!==colorPick){
document.querySelector("#besinf").innerHTML=localStorage["highScore"]
document.querySelector("#scinf").innerHTML=scor
modal.style.display="block"
canvas.style.display="none";
document.getElementById("scor").style.display="none";
document.getElementById("info").style.display="none";
message.textContent="Try again"
clearInterval(again)
}
   if(getDistance(xc,yc,rx2,ry2)<35 && color2==colorPick){
  
 this.x2=Math.random() * (innerWidth - radius * 2) + radius;
 this.y2=-35
  this.radius2=35
  this.dy2=(Math.random()*4)+1
  scor= scor+1
score.textContent = scor


if (scor > localStorage["highScore"]) {
      localStorage["highScore"] = scor;
    }

    if (typeof localStorage["highScore"] !== 'undefined') {
   document.getElementById("bscor").innerHTML=localStorage["highScore"];
}
    
}if(getDistance(xc,yc,rx2,ry2)<35 && color2!==colorPick){
document.querySelector("#besinf").innerHTML=localStorage["highScore"]
document.querySelector("#scinf").innerHTML=scor
modal.style.display="block"
canvas.style.display="none";
document.getElementById("scor").style.display="none";
document.getElementById("info").style.display="none";
message.textContent="Try again"
clearInterval(again)
}
   if(getDistance(xc,yc,rx3,ry3)<35 && color3==colorPick) {
  
 this.x3=Math.random() * (innerWidth - radius * 2) + radius;
 this.y3=-35
  this.radius3=35
  this.dy3=(Math.random()*4)+1


scor= scor+1
score.textContent = scor


if (scor > localStorage["highScore"]) {
      localStorage["highScore"] = scor;
    }

    if (typeof localStorage["highScore"] !== 'undefined') {
   document.getElementById("bscor").innerHTML=localStorage["highScore"];
}
  
   
} if(getDistance(xc,yc,rx3,ry3)<35 && color3!==colorPick){
document.querySelector("#besinf").innerHTML=localStorage["highScore"]
document.querySelector("#scinf").innerHTML=scor
modal.style.display="block"
canvas.style.display="none";
document.getElementById("scor").style.display="none";
document.getElementById("info").style.display="none";
message.textContent="Try again"
clearInterval(again)
}
   if(getDistance(xc,yc,rx4,ry4)<35 && color4==colorPick){
  
 this.x4=Math.random() * (innerWidth - radius * 2) + radius;
 this.y4=-35
  this.radius4=35
  this.dy4=(Math.random()*4)+1
scor= scor+1
score.textContent = scor


if (scor > localStorage["highScore"]) {
      localStorage["highScore"] = scor;
    }

    if (typeof localStorage["highScore"] !== 'undefined') {
   document.getElementById("bscor").innerHTML=localStorage["highScore"];
}
  
     
}if(getDistance(xc,yc,rx4,ry4)<35 && color4!==colorPick){
document.querySelector("#besinf").innerHTML=localStorage["highScore"]
document.querySelector("#scinf").innerHTML=scor
modal.style.display="block"
canvas.style.display="none";
document.getElementById("scor").style.display="none";
document.getElementById("info").style.display="none";
message.textContent="Try again"
clearInterval(again)
}
   if(getDistance(xc,yc,rx5,ry5)<35 && color5==colorPick){
  
 this.x5=Math.random() * (innerWidth - radius * 2) + radius;
 this.y5=-35
  this.radius5=35;
  this.dy5=(Math.random()*4)+1
scor= scor+1
score.textContent = scor


if (scor > localStorage["highScore"]) {
      localStorage["highScore"] = scor;
    }

    if (typeof localStorage["highScore"] !== 'undefined') {
   document.getElementById("bscor").innerHTML=localStorage["highScore"];
}
  

   }if(getDistance(xc,yc,rx5,ry5)<35 && color5!==colorPick){
document.querySelector("#besinf").innerHTML=localStorage["highScore"]
document.querySelector("#scinf").innerHTML=scor
modal.style.display="block"
canvas.style.display="none";
document.getElementById("scor").style.display="none";
document.getElementById("info").style.display="none";
message.textContent="Try again"
clearInterval(again)
}
 
}}

        

}
game()
 



 
  

let circleStore=[]
let radius =35;
let radius1 =35;
let radius2 =35;
let radius3 =35;
let radius4 =35;
let radius5 =35;












 
 function animate(){

   requestAnimationFrame(animate);

  c.fillStyle = 'rgba(0,0,0,0.1)';
   c.fillRect(0, 0, canvas.width, canvas.height);

  
 for(var i =0; i < circleStore.length;i++){
    circleStore[i].update();
   }
 }
 animate(); 
 





 let again = setInterval(function(){


 colors()

 },10000)
  
  
 function bb(){

for (var i = 0; i <1; i++) {

let x=Math.random() * (innerWidth - radius * 3) + radius;
let y=-35;
let dx=(Math.random()*3)+1
 dy=(Math.random()*3)+1


let x1=Math.random() * (innerWidth - radius1 * 3) + radius1;
let y1=-35
let dx1=(Math.random()*3)+1
 dy1=(Math.random()*3)+1

let x2=Math.random() * (innerWidth - radius2 * 3) + radius2;
let y2=0;
let dx2=(Math.random()*3)+1
 dy2=(Math.random()*3)+1


let x3=Math.random() * (innerWidth - radius3 * 3) + radius3;
let y3=-35;
let dx3=(Math.random()*3)+1
 dy3=(Math.random()*3)+1


let x4=Math.random() * (innerWidth - radius4 * 3) + radius4;
let y4=-35
let dx4=(Math.random()*3)+1
 dy4=(Math.random()*3)+1


let x5=Math.random() * (innerWidth - radius5 * 3) + radius5;
let y5=-35
let dx5=(Math.random()*3)+1
 dy5=(Math.random()*3)+1




 circleStore.push(new Circle(x, y, dx, dy, x1, y1, dx1, dy1,x2, y2, dx2, dy2, x3, y3, dx3, dy3,x4, y4, dx4, dy4, x5, y5, dx5, dy5, radius,radius1,radius2,radius3,radius4,radius5));

}
}

var xv=setInterval(function(){
  
  vtt=vtt+1
  if (vtt==5) {
this.dy=Math.random()*6
  this.dy1=Math.random()*8
   this.dy2=Math.random()*9
    this.dy3=Math.random()*5
     this.dy4=Math.random()*2
      this.dy5=Math.random()*3
       this.dy6=Math.random()*8

  }
},1000)

var cv=setInterval(function(){

 tima=tima+1
 console.log(tima)
 if (tima==2) {
  bb()
 
 }
 if(tima==150){
  bb()

   }
 if(tima==200){
  bb()

 }
  if(tima==300){
  bb()

 }
 if(tima==500){
  bb()

 }
 if(tima==800){
  bb()

 }
},1000)

