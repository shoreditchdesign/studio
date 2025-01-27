document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('lightbox-close').addEventListener('click', function() {
        stopEmbedVideo();
    });
    
    document.getElementById('lightbox-open').addEventListener('click', function() {
        playEmbedVideo();
    });
});

function stopEmbedVideo() {
    const frame = document.querySelector('iframe#embedvideo');
    let videoSrc = frame.getAttribute('src');
    
    // Turn autoplay off and reset to beginning
    if (videoSrc.includes('autoplay=1')) {
        videoSrc = videoSrc.replace('autoplay=1', 'autoplay=0');
    }
    
    // Add #t=0s to reset to beginning if not present
    if (!videoSrc.includes('#t=')) {
        videoSrc = `${videoSrc}#t=0s`;
    } else {
        videoSrc = videoSrc.replace(/#t=\d+s/, '#t=0s');
    }
    
    frame.setAttribute('src', '');
    frame.setAttribute('src', videoSrc);
}

function playEmbedVideo() {
    const frame = document.querySelector('iframe#embedvideo');
    const videoSrc = frame.getAttribute('src');
    
    // Add Vimeo-specific autoplay parameter
    if (!videoSrc.includes('autoplay=')) {
        const separator = videoSrc.includes('?') ? '&' : '?';
        const newSrc = `${videoSrc}${separator}autoplay=1&background=0`;
        frame.setAttribute('src', newSrc);
    } else {
        const updatedSrc = videoSrc.replace('autoplay=0', 'autoplay=1');
        frame.setAttribute('src', updatedSrc);
    }
}