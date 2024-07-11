$(document).ready(function() {
    $('#closevid').click(function() {
    StopEmbedVideo();
    });
});

function StopEmbedVideo() {
    var $frame = $('iframe#embedvideo');

    // saves the current iframe source
    var vidsrc = $frame.attr('src');

// sets the source to nothing, stopping the video
$frame.attr('src',''); 

    // sets it back to the correct link so that it reloads immediately on the next window open
    $frame.attr('src', vidsrc);

}