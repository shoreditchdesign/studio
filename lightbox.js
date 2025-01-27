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
    const videoSrc = frame.getAttribute('src');
    frame.setAttribute('src', '');
    frame.setAttribute('src', videoSrc);
}

function playEmbedVideo() {
    const frame = document.querySelector('iframe#embedvideo');
    const videoSrc = frame.getAttribute('src');
    
    // Add Vimeo-specific autoplay parameter
    if (!videoSrc.includes('autoplay=')) {
        const separator = videoSrc.includes('?') ? '&' : '?';
        // For Vimeo: autoplay=1 without muted parameter
        const newSrc = `${videoSrc}${separator}autoplay=1&background=0`;
        frame.setAttribute('src', newSrc);
    } else {
        // If autoplay parameter exists but is set to 0, set it to 1
        const updatedSrc = videoSrc.replace('autoplay=0', 'autoplay=1');
        frame.setAttribute('src', updatedSrc);
    }
}