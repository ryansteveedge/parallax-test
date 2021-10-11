gsap.registerPlugin(ScrollTrigger);

var timeline = gsap.timeline();

timeline.from(".square-1", {
  y: 1000, //direction and amount
  duration: 2,
})
.from(".square-2", {
  y: -1000, //direction and amount
  duration: 2,
}, '-=2')
.to(".dynamic-text .text", {
  autoAlpha: 1,
  duration: 0.5,
  y: 0,
  ease: Sine.easeInOut,
}, '-=1.5');

ScrollTrigger.create({
  trigger: ".middle",
  animation: timeline,
  // Uncomment these to see how they affect the ScrollTrigger
  markers: true,
  // toggleClass: "active",
  pin: true,
  scrub: 1,
  start: "top top",
  end: () => "+=" + window.innerHeight*(4),
});

// gsap.from(".square-1", {
//    y: 1000, //direction and amount
//    duration: 2,
//   scrollTrigger: {
//     trigger: ".middle",
//     scrub: true,
//     pin: true,
//     pinSpacing: true,
//     start: "top top",
//      end: () => "+=" + window.innerHeight*(4),
//     markers: true,

//   },
// });

// gsap.from(".square-2", {
//    y: -1000, //direction and amount
//    duration: 8,
//   scrollTrigger: {
//     trigger: ".middle",
//     scrub: true,
//     pin: true,
//     pinSpacing: true,
//     start: "top top",
//      end: () => "+=" + window.innerHeight*(4),
//     markers: true,

//   },
// });
