new Splide( '.splide', {
// Desktop on down
perPage: 3,
perMove: 1,
focus: 0, // 0 = left and 'center' = center
type: 'slide', // 'loop' or 'slide'
gap: '0px', // space between slides
arrows: 'slider', // 'slider' or false
pagination: 'slider', // 'slider' or false
speed : 600, // transition speed in miliseconds
dragAngleThreshold: 30, // default is 30
autoWidth: false, // for cards with differing widths
rewind : false, // go back to beginning when reach end
rewindSpeed : 400,
waitForTransition : false,
updateOnMove : true,
trimSpace: false, // true removes empty space from end of list
breakpoints: {
    991: {
    // Tablet
        perPage: 3,
    },
767: {
    // Mobile Landscape
        perPage: 4,
    },
479: {
    // Mobile Portrait
        perPage: 2,
    }
}
}).mount();

new Splide( '.splide-logos', {
// Desktop on down
perPage: 3,
perMove: 1,
focus: 0, // 0 = left and 'center' = center
type: 'slide', // 'loop' or 'slide'
gap: '1rem', // space between slides
arrows: 'slider', // 'slider' or false
pagination: 'slider', // 'slider' or false
speed : 600, // transition speed in miliseconds
dragAngleThreshold: 30, // default is 30
autoWidth: true, // for cards with differing widths
rewind : false, // go back to beginning when reach end
rewindSpeed : 400,
waitForTransition : false,
updateOnMove : true,
trimSpace: false, // true removes empty space from end of list
breakpoints: {
    991: {
    // Tablet
        perPage: 3,
    },
767: {
    // Mobile Landscape
        perPage: 2,
    },
479: {
    // Mobile Portrait
        perPage: 1,
    }
}
}).mount();

new Splide( '.splide-approach', {
// Desktop on down
perPage: 3,
perMove: 1,
focus: 0, // 0 = left and 'center' = center
type: 'slide', // 'loop' or 'slide'
gap: '1rem', // space between slides
arrows: 'slider', // 'slider' or false
pagination: 'slider', // 'slider' or false
speed : 600, // transition speed in miliseconds
dragAngleThreshold: 30, // default is 30
autoWidth: true, // for cards with differing widths
rewind : false, // go back to beginning when reach end
rewindSpeed : 400,
waitForTransition : false,
updateOnMove : true,
trimSpace: false, // true removes empty space from end of list
breakpoints: {
    991: {
    // Tablet
        perPage: 3,
    },
767: {
    // Mobile Landscape
        perPage: 2,
    },
479: {
    // Mobile Portrait
        perPage: 2,
    }
}
}).mount();

new Splide( '.splide-reviews', {
// Desktop on down
perPage: 3,
perMove: 1,
focus: 0, // 0 = left and 'center' = center
type: 'slide', // 'loop' or 'slide'
gap: '2rem', // space between slides
arrows: 'slider', // 'slider' or false
pagination: 'slider', // 'slider' or false
speed : 600, // transition speed in miliseconds
dragAngleThreshold: 30, // default is 30
autoWidth: true, // for cards with differing widths
rewind : false, // go back to beginning when reach end
rewindSpeed : 400,
waitForTransition : false,
updateOnMove : true,
trimSpace: false, // true removes empty space from end of list
breakpoints: {
    991: {
    // Tablet
        perPage: 3,
    },
767: {
    // Mobile Landscape
        perPage: 2,
    },
479: {
    // Mobile Portrait
        perPage: 1,
    }
}
}).mount();

new Splide( '.splide-team', {
// Desktop on down
perPage: 3,
perMove: 1,
focus: 0, // 0 = left and 'center' = center
type: 'slide', // 'loop' or 'slide'
gap: '1rem', // space between slides
arrows: 'slider', // 'slider' or false
pagination: 'slider', // 'slider' or false
speed : 600, // transition speed in miliseconds
dragAngleThreshold: 30, // default is 30
autoWidth: true, // for cards with differing widths
rewind : false, // go back to beginning when reach end
rewindSpeed : 400,
waitForTransition : false,
updateOnMove : true,
trimSpace: false, // true removes empty space from end of list
breakpoints: {
    991: {
    // Tablet
        perPage: 3,
    },
767: {
    // Mobile Landscape
        perPage: 2,
    },
479: {
    // Mobile Portrait
        perPage: 2,
    }
}
}).mount();