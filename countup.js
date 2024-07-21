//countup snippet

$(".counterup").each(function (index) {
  // assign ID
  let thisId = "countup" + index;
  $(this).attr("id", thisId);
  // create variables
  let startNumber = +$(this).text();
  let endNumber = +$(this).attr("final-number");
  let decimals = 0;
  let duration = $(this).attr("count-duration");
  // animate number
  let myCounter = new CountUp(thisId, startNumber, endNumber, decimals, duration);
  
  /* Scroll out of view trigger
  ScrollTrigger.create({
    trigger: $(this),
    start: "top bottom",
    end: "bottom top",
    onLeaveBack: () => {
      myCounter.reset();
    }
  });*/

  // Scroll into view trigger
  ScrollTrigger.create({
    trigger: $(this),
    start: "top 80%",
    end: "bottom top",
    onEnter: () => {
      myCounter.start();
    }
  });
});
