var images =Array.from( document.getElementsByTagName("img"));
var lightboxContainer = document.querySelector(".output");
var lightboxImg = document.querySelector(".outputImg");
var closeBtn=document.getElementById("close");
var prevBtn=document.getElementById("prev");
var nextBtn=document.getElementById("next");
var imgIndex;


for(var i=0;i<images.length;i++){
    images[i].addEventListener("click" , function(e){
        lightboxContainer.classList.replace("d-none","d-flex");  
        var imgSrc =e.target.getAttribute("src");
        lightboxImg.style.backgroundImage=`url(${imgSrc})`
        imgIndex = images.indexOf(e.target);
    })
}
function close(){
    lightboxContainer.classList.replace("d-flex","d-none");
}
closeBtn.addEventListener("click",close)
;
function nextSlide () {
    if(imgIndex == images.length-1){
        imgIndex=0;
    }
    else{
        imgIndex++;
    }
  
   var imgSrc = images[imgIndex].src;
   lightboxImg.style.backgroundImage=`url(${imgSrc})`
}
nextBtn.addEventListener("click",nextSlide);

function prevSlide () {
    imgIndex--;
    if(imgIndex == -1){
        imgIndex=images.length-1;
    }
    
  
   var imgSrc = images[imgIndex].src;
   lightboxImg.style.backgroundImage=`url(${imgSrc})`
}
prevBtn.addEventListener("click",prevSlide);

document.addEventListener("keydown",function(e){
    if(e.key == "ArrowRight"){
        nextSlide();
    }
    else if(e.key == "ArrowLeft"){
        prevSlide();
    }
    else if(e.key =="Escape"){
        close();
    }
}
)