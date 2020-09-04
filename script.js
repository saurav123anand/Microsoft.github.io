const prevbtn=document.getElementById('prev');
const nextbtn=document.getElementById('next');
let slides=document.querySelectorAll('.caraousel-item')
const auto=true;
const intervalTime=5000;
let slideInterval;

const nextslide=()=>{
   // get current class
   let current=document.querySelector('.current')
    // remove current class
    current.classList.remove('current')
   // check for next slide
   if(current.nextElementSibling){
       // add current to next sibling
       current.nextElementSibling.classList.add('current')
   }
   else{
       slides[0].classList.add('current')
   }
  
}
const prevslide=()=>{
   // get current class
   let current=document.querySelector('.current')
    // remove current class
    current.classList.remove('current')
   // check for next slide
   if(current.previousElementSibling){
       // add current to previous sibling
       current.previousElementSibling.classList.add('current')
   }
   else{
       slides[slides.length-1].classList.add('current')
   }
  
}
nextbtn.addEventListener('click',e=>{
nextslide();
if(auto){
    clearInterval(slideInterval)
    slideInterval=setInterval(nextslide, intervalTime);
}
})
prevbtn.addEventListener('click',e=>{
   prevslide();
   if(auto){
    clearInterval(slideInterval)
    slideInterval=setInterval(nextslide, intervalTime);
}
})

if(auto){
    // run next slide at interval time
    slideInterval=setInterval(nextslide, intervalTime);
}

let hamburger=document.querySelector('.hamburger-menu')
let midNav=document.querySelector('.mid-nav')
hamburger.addEventListener('click',()=>{
    midNav.classList.toggle('hamburger-work')
    hamburger.classList.toggle('icon-change')
})