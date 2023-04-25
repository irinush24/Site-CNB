let slide = document.querySelector("#slide");
let btnRight = document.querySelector("#btn-right");
let btnLeft = document.querySelector("#btn-left");
let k = 1;

let boolInformatii = [];
for (let index = 1; index <= 2; index++) {
    boolInformatii[index] = true;
}
function dropInformatii(value){
    if(boolInformatii[value] === true){
        document.querySelector("#materie"+value).style.display = "flex";
        document.querySelector("#border"+value).style.borderBottom="thin solid rgb(27 27 27)";
    }
    else{
        document.querySelector("#materie"+value).style.display = "none";
        document.querySelector("#border"+value).style.borderBottom="none";
    }
    boolInformatii[value] = !boolInformatii[value]; 
}

function navmod(){
    let top = window.pageYOffset;
    if( top === 0 ){
        document.querySelector("#nav").style.backgroundColor = "rgb(118 36 36 / 0)"
    }
    else{
        document.querySelector("#nav").style.backgroundColor = "rgb(118 36 36 / 0.9)"
    }
}

var images = ["url('./assets/scan0003.jpg')",
"url('./assets/scan0015.jpg')",
"url('./assets/scan0004.jpg')",
"url('./assets/scan0011.jpg')",
"url('./assets/scan0016.jpg')",
"url('./assets/scan0018.jpg')",
"url('./assets/scan0032.jpg')"];
var index = 0;
var div = document.createElement('div')

function makeImage() {
   
    if(screen.width>700)
        {div.style.width="80vw";
        div.style.height="80vh";
        div.style.backgroundSize="contain";}
    else
        {div.style.width="100vw";
        div.style.height="60vh";
        div.style.backgroundSize="contain";}   
   div.style.margin="auto"
   div.style.backgroundImage=images[0];
   div.style.backgroundPosition="center center";
   div.style.backgroundRepeat="no-repeat";
   document.getElementById('content').appendChild(div);
}

function rightSlide(){
   var div = document.getElementById('content').getElementsByTagName('div')[2];
   div.style.position="center"
   if(index==7)
        index=0;
   index++;
   index = index % images.length;
   if(screen.width>700)
        {div.style.backgroundSize="contain";
        div.style.backgroundRepeat="no-repeat";}
    else
        div.style.backgroundSize="contain"; 
   div.style.backgroundImage="none";
   div.style.backgroundImage=images[index];
}

function leftSlide(){
    var div = document.getElementById('content').getElementsByTagName('div')[2];
    div.style.position="center"
    if(index==0)
        index=7;
    index--;
    index = index % images.length;
    if(screen.width>700)
        {div.style.backgroundSize="contain";
        div.style.backgroundRepeat="no-repeat";}
    else
        div.style.backgroundSize="contain";  
    div.style.backgroundImage="none";
    div.style.backgroundImage=images[index];
 }