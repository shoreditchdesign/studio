// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Get the popup element and its height
const popup = document.querySelector(".c-cta-popup_wrap");
const popupHeight = popup.offsetHeight;

// GSAP animation for the popup
gsap.fromTo(popup,
  { y: popupHeight }, // Start position (hidden below its own height)
  { y: 0, duration: 0.5, paused: true } // End position (visible at the top)
);

// ScrollTrigger to handle the visibility of the popup based on scroll position
ScrollTrigger.create({
  trigger: document.body,
  start: "top top", // Trigger when the top of the body hits the top of the viewport
  end: "bottom top", // End when the bottom of the body hits the top of the viewport
  onUpdate: self => {
    if (self.scroll() > window.innerHeight * 1.5) {
      gsap.to(popup, { y: 0 });
    } else {
      gsap.to(popup, { y: 2* popupHeight });
    }
  }
});