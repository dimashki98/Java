$(document).ready(function() {
    var videoEmbed = `<video id="myVideo" width="0%" height="auto" loop autoplay>
                        <source src="https://dimask98.github.io/mada/82xe.i_14030711_095917068.mp4" type="video/mp4">
                      </video>`;
    $('.nav-tabs').before(videoEmbed);

    var youtubeEmbed = `<iframe id="youtubeVideo" width="100%" height="auto" src="https://www.youtube.com/embed/1veKsFK34Ew?enablejsapi=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
    $('.nav-tabs').before(youtubeEmbed);

    var video = document.getElementById('myVideo');
    video.muted = false;

    video.play().catch(function(error) {
        var playButton = `<button id="playButton" style="margin-top: 10px;">أحسن ما عم تراقب بصمت اكبس هون / برعاية شات مدى</button>`;
        $('.nav-tabs').before(playButton);

        $('#playButton').click(function() {
            video.play();
        });
    });

    var youtubePlayer;
    window.onYouTubeIframeAPIReady = function() {
        youtubePlayer = new YT.Player('youtubeVideo', {
            events: {
                'onStateChange': function(event) {
                    if (event.data == YT.PlayerState.PLAYING) {
                        video.pause();
                        video.currentTime = 0;
                    }
                }
            }
        });
    };

    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
});
