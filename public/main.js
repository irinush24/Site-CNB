let slide = document.querySelector("#slide");
let btnRight = document.querySelector("#btn-right");
let btnLeft = document.querySelector("#btn-left");
let k = 1;

function leftSlide(){
    let width = screen.width;
    if(k != 1){
        if(width > 767){
            slide.style.transform = "translateX("+ (k-2)*-50 +"vw)";
        }
        else{
            slide.style.transform = "translateX("+ (k-2)*-100 +"vw)"; 
        }
        k--;
        for(let i = 1 ; i <= 5 ; i++){
            if( k === i ){
                document.querySelector("#c"+i).style.opacity = "1";
            }
            else{
                document.querySelector("#c"+i).style.opacity = "0.6";
            }
        }
    }
    else{
        btnLeft.style.transitionDuration = "0s";
        if(width > 767){
            slide.style.transform = "translateX(-200vw)";
        }
        else slide.style.transform = "translateX(-400vw)";
        k = 5;
        document.querySelector("#c5").style.opacity = "1";
    }
}
function rightSlide(){
    let width = screen.width;
    if(k != 5){
        if(width > 767){
            slide.style.transform = "translateX("+ k*-50 +"vw)";
        }
        else{
            slide.style.transform = "translateX("+ k*-100 +"vw)";
        }
        k++;
        for(let i = 1 ; i <= 5 ; i++){
            if( k === i ){
                document.querySelector("#c"+i).style.opacity = "1";
            }
            else{
                document.querySelector("#c"+i).style.opacity = "0.6";
            }
        }
    }
    else{
        console.log(btnRight)
        btnRight.style.transitionDuration = "0s";
        slide.style.transform = "translateX(0vw)";
        k = 1;
        document.querySelector("#c1").style.opacity = "1";
    }
}