let navMenu = document.getElementsByClassName("nav-menu")
let navMenuCloseBtn = document.querySelector(".nav-menu i")
let menuBtn = document.querySelector(".nav i")
let navTimeline = gsap.timeline();

navMenuCloseBtn.addEventListener("click",function(){
    navTimeline.reverse();
})
menuBtn.addEventListener("click",function(){
    navTimeline.play();
})

navTimeline.to(navMenu,{
    right:"30",
    duration:0.3,
    opacity:1,
    delay:1
})
navTimeline.from(".nav-menu a",{
    x:"100px",
    duration:0.6,
    opacity:0,
    delay:0.3,
    stagger:0.15,
    ease:'bounce.out'

})
navTimeline.from(navMenuCloseBtn,{
    opacity:0,
    duration:0.2
})
navTimeline.pause();