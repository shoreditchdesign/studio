window.addEventListener("DOMContentLoaded", (event) => {
  // Delay execution for preloader animation
  setTimeout(() => {
    // Ensure GSAP and plugins are loaded
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined" || typeof SplitType === "undefined") {
      console.error("GSAP, ScrollTrigger, or SplitType is not loaded.");
      return;
    }

    // Register ScrollTrigger plugin with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Add the 'a-stagger-up' attribute to all h1 and h2 elements
    document.querySelectorAll("h1, h2").forEach((element) => {
      element.setAttribute("a-stagger-up", "");
    });

    // Split text into spans
    new SplitType("[a-stagger-up]", {
      types: "words, chars",
      tagName: "span",
    });

    // Link timelines to scroll position
    function createScrollTrigger(triggerElement, timeline) {
      // Reset tl when scroll out of view past bottom of screen
      ScrollTrigger.create({
        trigger: triggerElement,
        start: "top bottom",
        onLeaveBack: () => {
          timeline.progress(0);
          timeline.pause();
        },
      });

      // Play tl when scrolled into view (60% from top of screen)
      ScrollTrigger.create({
        trigger: triggerElement,
        start: "top 60%",
        onEnter: () => timeline.play(),
      });
    }

    document.querySelectorAll("[a-stagger-up]").forEach((element) => {
      let tl = gsap.timeline({ paused: true });
      tl.from(element.querySelectorAll(".word"), {
        opacity: 0,
        yPercent: 100,
        duration: 0.5,
        ease: "back.out(2)",
        stagger: 0.05, // Stagger each element by 200 ms
      });
      createScrollTrigger(element, tl);
    });

    // Avoid flash of unstyled content
    gsap.set("[a-stagger-up]", { opacity: 1 });
  }, 1800); // 5000ms delay for preloader animation
});