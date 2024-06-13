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
                start: "top bottom", // Start the animation when the top of the element is at the bottom
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
                duration: 0.5,
                ease: "expo.out",
                stagger: 0.05, // Stagger each element by 50 ms
            });
            createScrollTrigger(element, tl);
        });

        // Avoid flash of unstyled content
        gsap.set("[a-stagger-up]", { opacity: 1 });

        // Fade Left Animation
        document.querySelectorAll(".text-lg").forEach((element) => {
            let tl = gsap.timeline({ paused: true });
            tl.from(element, {
                opacity: 0,
                x: -30, // 30px offset from the left
                duration: 0.5,
                ease: "power1.in", // ease-in curve
                stagger: 0.05, // Stagger each element by 50 ms
            });
            createScrollTrigger(element, tl);
        });

        // Avoid flash of unstyled content
        gsap.set(".text-lg", { opacity: 1 });
    }, 1800); // 1800ms delay for preloader animation
});
