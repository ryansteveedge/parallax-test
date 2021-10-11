// gsap.to(".square", {
//   // x: 1000, //direction and amount
//   duration: 8, //how long
//   scrollTrigger: {
//      trigger: ".div2", //Starts when this element comes in
//      start: "top 80%", //when top of trigger meets 80 of viewport
//      end: "bottom bottom",
//      scrub: true, //change to numerical value for smoother scrolling
//      // pin: ".square", //pin can be changed to trigger or an element
//      // pinSpacing: false,
//      toggleActions: "play none reverse none",
//      //              onEnter onLeave onEnterBack onLeaveBack
//      // end: () => "+=" + document.querySelector(".square").offsetHeight, //height of element
//      markers: true,
//      // toggleClass: "red" //Once Scroll trigger starts this class is added to the square
//  }
// });

// --- ORANGE PANEL ---
// gsap.from(".text", {
//    // y: 1000, //direction and amount
//    duration: 8,
//   scrollTrigger: {
//     trigger: ".middle",
//     scrub: true,
//     pin: true,
//     pinSpacing: true,
//     start: "top top",
//     end: "+=100%",
//     markers: true,
//   },
// });

gsap.from(".square-1", {
   y: 1000, //direction and amount
   duration: 8,
  scrollTrigger: {
    trigger: ".middle",
    scrub: true,
    pin: true,
    pinSpacing: true,
    start: "top top",
     end: () => "+=" + window.innerHeight*(4),
    markers: true,

  },
});

// var circles = gsap.utils.toArray('.square-2')
//
// circles.forEach((circle, i) => {
//
//   var circleFade = gsap.fromTo(circle, { autoAlpha: 0 }, { duration: 0.1, autoAlpha: 1 }, 0)
//
//   ScrollTrigger.create({
//      trigger: ".middle",
//    scrub: true,
//    pin: true,
//    pinSpacing: true,
//    start: "top top",
//    end: () => "+=" + window.innerHeight,
//    markers: true,
//   })
//
// });

gsap.from(".square-2", {
   y: -1000, //direction and amount
   duration: 8,
  scrollTrigger: {
    trigger: ".middle",
    scrub: true,
    pin: true,
    pinSpacing: true,
    start: "top top",
     end: () => "+=" + window.innerHeight*(4),
    markers: true,

  },
});
