const quotes = document.querySelectorAll(".quote");

function setupSplits() {
  quotes.forEach(quote => {
    // Reset if needed
    if(quote.anim) {
      quote.anim.progress(1).kill();
      quote.split.revert();
    }

    quote.split = new SplitText(quote, { 
      type: "lines,words,chars",
      linesClass: "split-line"
    });

    // Set up the anim
    quote.anim = gsap.from(quote.split.chars, {
      scrollTrigger: {
        trigger: quote,
        toggleActions: "restart pause resume reverse",
        start: "top 50%",
      },
      duration: 0.6, 
      ease: "circ.out", 
      y: 80, 
      stagger: 0.02,
    });
  });
}

ScrollTrigger.addEventListener("refresh", setupSplits);
setupSplits();

window.addEventListener('load', () => {
  setTimeout(setupSplits, 1700);
});