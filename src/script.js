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
.from(".square-3", {
  y: 1000, //direction and amount
  duration: 2,
})
.from(".square-4", {
  y: -1000, //direction and amount
  duration: 2,
}, '-=2')
.from(".square-5", {
  y: 1000, //direction and amount
  duration: 2,
})
.from(".square-6", {
  y: -1000, //direction and amount
  duration: 2,
}, '-=2')
.to(".dynamic-text-1 .text", {
  autoAlpha: 1,
  duration: 0.5,
  y: 0,
  ease: Sine.easeInOut,
}, '-=6')
.to(".dynamic-text-1 .text", {
  autoAlpha: 0,
  duration: 0.5,
  y: -40,
  ease: Sine.easeInOut,
}, '-=5')
.to(".dynamic-text-2 .text", {
  autoAlpha: 1,
  duration: 0.5,
  y: 0,
  ease: Sine.easeInOut,
}, '-=4')
.to(".dynamic-text-2 .text", {
  autoAlpha: 0,
  duration: 0.5,
  y: -40,
  ease: Sine.easeInOut,
}, '-=3')
.to(".dynamic-text-3 .text", {
  autoAlpha: 1,
  duration: 0.5,
  y: 0,
  ease: Sine.easeInOut,
}, '-=2')
.to(".dynamic-text-3 .text", {
  autoAlpha: 0,
  duration: 0.5,
  y: -40,
  ease: Sine.easeInOut,
}, '-=1');

ScrollTrigger.create({
  trigger: ".middle",
  animation: timeline,
  // Uncomment these to see how they affect the ScrollTrigger
  markers: true,
  // toggleClass: "active",
  pin: true,
  scrub: 1,
  start: "top top",
  end: () => "+=" + window.innerHeight*(8),
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
