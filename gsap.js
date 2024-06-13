//Stagger Up Animation

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
        // Play tl when scrolled into view or if already in view, only once
        ScrollTrigger.create({
            trigger: triggerElement,
            start: "top 90%", // Start the animation when the top of the element is 80% from the top of the viewport
            onEnter: () => timeline.play(),
            onEnterBack: () => timeline.play(),
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
}, 1800); // 1800ms delay for preloader animation
});




//Fade In Left Snippet

window.addEventListener("DOMContentLoaded", (event) => {
// Delay execution for preloader animation
setTimeout(() => {
    // Ensure GSAP and plugins are loaded
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined" || typeof SplitType === "undefined") {
    console.error("GSAP, ScrollTrigger, or SplitType is not loaded.");
    return;
    }

    // Link timelines to scroll position
    function createScrollTrigger(triggerElement, timeline) {
    // Play tl when scrolled into view (60% from top of screen), only once
    ScrollTrigger.create({
        trigger: triggerElement,
        start: "top 80%",
        onEnter: () => timeline.play(),
        once: true // Ensures the animation runs only once
    });
    }

    document.querySelectorAll("[a-fade-left]").forEach((element) => {
    let tl = gsap.timeline({ paused: true });
    tl.from(element.querySelectorAll("[a-fade-left]"), {
        opacity: 0,
        x: -30, // 30px offset from the left
        duration: 0.5,
        ease: "power1.in", // ease-in curve
        stagger: 0.05, // Stagger each element by 50 ms
    });
    createScrollTrigger(element, tl);
    });

    // Avoid flash of unstyled content
    gsap.set("[a-fade-left]", { opacity: 1 });
}, 1800); // 1800ms delay for preloader animation
});
