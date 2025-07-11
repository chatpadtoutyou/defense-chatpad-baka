var href = "";
var ad = 0;
var src = "";

$(() => {
    setInterval(() => {
        video = document.querySelector("video");
        if (video != null) {
            if (src != video.src && video.src != "") {
                src = video.src;
                video.src = "";
            }
            jVideo = $(video);
            video.autoplay = false;
            video.preload = "metadata";
            jVideo.removeAttr('autoplay');
            if ($('.atvwebplayersdk-ad-timer').is(":visible") > 0 && ad < 1) {
                video.muted = true;
                video.currentTime = 60;
                ++ad;
            } else {
                if (ad > 0) {
                    video.currentTime = 0;
                    $('input[type="range"]').attr('value', '0');
                    $('[aria-label^="Seek Back"]').click();
                    video.muted = false;
                    video.src = src;
                    --ad;
                }
            }
        }
    }, 100);
});
