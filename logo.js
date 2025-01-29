document.addEventListener('DOMContentLoaded', () => {
    const logoList = document.querySelector('.c-logo_list');
    logoList.setAttribute('data-logo-list', '');
    const logoSlots = document.querySelectorAll('.c-logo_slot');

    logoSlots.forEach((slot, index) => {
      slot.setAttribute('data-logo-slot', index.toString());
    });

    let maxIndex = 0;
    logoSlots.forEach(slot => {
      const icons = slot.querySelectorAll('.c-logo_icon');
      maxIndex = Math.max(maxIndex, icons.length - 1);
      icons.forEach((icon, index) => {
        icon.setAttribute('data-logo-icon', index.toString());
      });
    });

    const FADE_IN_DURATION = 0.4;
    const FADE_OUT_DURATION = 0.05;
    const STAGGER_DELAY = 0.2;
    const HOLD_DURATION = 1;
    const EASE = "power1.inOut";
    let firstRun = true;

    gsap.set('.c-logo_icon', { opacity: 0, scale: 0.95 });

    const createMainTimeline = () => {
      const timeline = gsap.timeline();
      const slots = Array.from(logoSlots);

      // Reset scale for all logos at start of timeline
      slots.forEach(slot => {
        const icons = slot.querySelectorAll('.c-logo_icon');
        gsap.set(icons, { scale: 0.95 });
      });

      if (firstRun) {
        const initialSequence = gsap.timeline();
        slots.forEach((slot, slotIndex) => {
          const icon = slot.querySelector('[data-logo-icon="0"]');
          initialSequence.to(icon, {
            opacity: 1,
            scale: 1,
            duration: FADE_IN_DURATION,
            ease: EASE
          }, slotIndex === 0 ? '>' : `>+${STAGGER_DELAY}`);
        });
        initialSequence.to({}, { duration: HOLD_DURATION }, '>');
        timeline.add(initialSequence);
      }

      for (let currentIndex = 0; currentIndex <= maxIndex; currentIndex++) {
        const transitionSequence = gsap.timeline();

        slots.forEach((slot, slotIndex) => {
          const currentIcon = slot.querySelector(`[data-logo-icon="${currentIndex}"]`);
          const nextIcon = slot.querySelector(
            `[data-logo-icon="${currentIndex === maxIndex ? 0 : currentIndex + 1}"]`
          );

          // Reset scale for next icon before animation
          gsap.set(nextIcon, { scale: 0.95 });

          transitionSequence.to([currentIcon, nextIcon], {
            opacity: (i) => i === 0 ? 0 : 1,
            scale: (i) => i === 0 ? 0.95 : 1,
            duration: FADE_IN_DURATION,
            ease: EASE
          }, slotIndex === 0 ? '>' : `>+${STAGGER_DELAY}`);
        });

        transitionSequence.to({}, { duration: HOLD_DURATION }, '>');
        timeline.add(transitionSequence);
      }

      firstRun = false;
      return timeline;
    };

    const masterTimeline = gsap.timeline({
      repeat: -1,
      onRepeat: () => {
        const newTimeline = createMainTimeline();
        masterTimeline.add(newTimeline);
      }
    });

    masterTimeline.add(createMainTimeline());
    masterTimeline.play();
  });