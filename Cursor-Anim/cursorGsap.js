let cursorElem = document.getElementsByClassName("cursor")
let cursorElem2 = document.getElementsByClassName("cursor2")
let image =document.querySelector("#overlay")


window.addEventListener("mousemove",function(dets){
    gsap.to(cursorElem,{
        x: dets.x+16,
        y:dets.y+16,
        
    });
    gsap.to(cursorElem2,{
        x: dets.x,
        y:dets.y
    });
});



image.addEventListener("mouseenter", function() {
    gsap.to(cursorElem, {
        scale: 2,
        opacity:0.5
    });

});
image.addEventListener("mouseleave", function() {
    gsap.to(cursorElem, {
        scale: 1,
        opacity:1
    });

});