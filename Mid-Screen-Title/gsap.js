let h1Text = "GSAP"
let h1Elem= document.querySelector("h1")

let splitedTxt = h1Text.split("")

h1Elem.innerHTML =''
splitedTxt.forEach(function(elem){
    h1Elem.innerHTML +=`<span>${elem}</span>`
    
})

gsap.from("h1 span",{
    y:70,
    duration:0.7,
    opacity:0,
    stagger:0.15,
    repeat:5,
    ease:"bounce.out"

})