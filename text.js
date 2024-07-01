/* window.addEventListener("DOMContentLoaded", (event) => {
    // Delay execution for preloader animation
    setTimeout(() => {
        // Ensure GSAP and plugins are loaded
        if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined" || typeof SplitType === "undefined") {
            console.error("GSAP, ScrollTrigger, or SplitType is not loaded.");
            return;
        }

        // Register ScrollTrigger plugin with GSAP
        gsap.registerPlugin(ScrollTrigger);

        // Stagger Up Animation
        document.querySelectorAll("h1, h2").forEach((element) => {
            element.setAttribute("a-stagger-up", "");
        });

        // Split text into spans
        new SplitType("[a-stagger-up]", {
            types: "words, chars",
            tagName: "span",
        });

        function createScrollTrigger(triggerElement, timeline) {
            let hasPlayed = false;

            ScrollTrigger.create({
                trigger: triggerElement,
                start: "top 80%", // Start the animation when the top of the element is at the bottom
                onEnter: () => {
                    if (!hasPlayed) {
                        timeline.play();
                        hasPlayed = true;
                    }
                },
                onEnterBack: () => {
                    if (!hasPlayed) {
                        timeline.play();
                        hasPlayed = true;
                    }
                },
                once: true // Ensures the animation runs only once
            });
        }
        
        document.querySelectorAll("[a-stagger-up]").forEach((element) => {
            let tl = gsap.timeline({ paused: true });
            tl.from(element.querySelectorAll(".word"), {
                opacity: 0,
                yPercent: 100,
                ease: "expo.out",
                stagger: 0.05, // Stagger each element by 50 ms
            });
            createScrollTrigger(element, tl);
        });

        // Avoid flash of unstyled content
        gsap.set("[a-stagger-up]", { opacity: 1 });

      
    }, 1000); // 1000ms delay for preloader animation
}); */


window.addEventListener("DOMContentLoaded", (event) => {
    // Split text into spans
    let typeSplit = new SplitType("[a-gsap-text]", {
      types: "words, chars",
      tagName: "span"
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
        }
      });
      // Play tl when scrolled into view (60% from top of screen)
      ScrollTrigger.create({
        trigger: triggerElement,
        start: "top 60%",
        onEnter: () => timeline.play()
      });
    }

    $("[a-gsap-text]").each(function (index) {
      let tl = gsap.timeline({ paused: true });
      tl.from($(this).find(".word"), { opacity: 0, yPercent: 100, duration: 0.5, ease: "back.out(2)", stagger: { amount: 0.5 } });
      createScrollTrigger($(this), tl);
    });

    // Avoid flash of unstyled content
    gsap.set("[a-gsap-text]", { opacity: 1 });
  });
