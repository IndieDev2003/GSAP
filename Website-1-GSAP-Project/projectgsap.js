let navTimeline = gsap.timeline();

navTimeline.from(".nav a,.location", {
  y: -100,
  opacity: 0,
  duration: 0.5,
  stagger: 0.15,
});
navTimeline.from(".hero .play", {
  y: 1000,
  // rotate:360,
  duration: 1,
  opacity: 0,
  stagger: 0.15,
});
gsap.from(".cards", {
  x: -1000,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    scroller: ".cards",
    trigger: "body",
    markers: true,
    start: "top 50%",
  },
});
